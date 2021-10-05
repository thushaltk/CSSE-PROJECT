import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import assignSuppliersService from "../../services/assignSuppliers-service";
import purchaseorderService from "../../services/purchaseorder-service";

const ViewPurchaseOrder = (props) => {
  const [open, setOpen] = useState(props.open);
  const [purchaseOrderID, setPurchaseOrderID] = useState(props.orderID);
  const [otherData, setOtherData] = useState(props.data);
  const [noData, setNoData] = useState(false);
  const [assignedSuppliers, setAssignedSuppliers] = useState([]);

  useEffect(() => {
    setOpen(props.open);
    setPurchaseOrderID(props.orderID);
    setOtherData(props.data);

    assignSuppliersService
      .getAssignedByPurchaseOrderID(props.orderID)
      .then((res) => {
        setAssignedSuppliers(res.data);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  const onApprove = () => {
    const formData = {
      id: purchaseOrderID,
      status: "APPROVED",
    };
    purchaseorderService.updateStatus(formData).then((res) => {
      console.log(res);
      props.trigger(true);
      handleClose();
    });
  };

  const onDelete = () => {
    const formData = {
      id: purchaseOrderID,
      status: "REJECTED",
    };
    purchaseorderService.updateStatus(formData).then((res) => {
      console.log(res);
      props.trigger(true);
      handleClose();
    });
  };

  return (
    <Dialog maxWidth="lg" fullWidth onClose={handleClose} open={open}>
      <DialogTitle>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1>View Order</h1>
        </div>
        <hr />
      </DialogTitle>
      <DialogContent>
        <Row
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              marginRight: "30px",
            }}
          >
            <h2>Sitename: </h2>
            <h2>location: </h2>
            <h2>Site Manager: </h2>
            <h2>Date added: </h2>
            <h2>Total: </h2>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <h2>{otherData.sitename}</h2>
            <h2>{otherData.location}</h2>
            <h2>{otherData.sitemanager}</h2>
            <h2>{otherData.date}</h2>
            <h2>{otherData.total}</h2>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <TableContainer component={Paper}>
            <Table style={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ textTransform: "uppercase" }}>
                  <TableCell align="center" style={{ fontWeight: "800" }}>
                    Itemname
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "800" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "800" }}>
                    Supplier/s
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "800" }}>
                    Deadline
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "800" }}>
                    Budget
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!noData
                  ? assignedSuppliers.map((order) => (
                      <TableRow
                        key={order._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {order.itemname.itemname}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {order.quantity}
                        </TableCell>

                        <TableCell align="center">
                          {order.supplier.map((sup) => (
                            <p>{sup.name}</p>
                          ))}
                        </TableCell>
                        <TableCell align="center">{order.deadline}</TableCell>
                        <TableCell align="center">{order.budget}</TableCell>
                      </TableRow>
                    ))
                  : ""}
              </TableBody>
            </Table>
          </TableContainer>
        </Row>
        <br />
        <br />
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          {otherData.status === "APPROVED" ? (
            <Button
              disabled
              style={{ marginRight: "20px" }}
              variant="contained"
              color="primary"
            >
              APPROVED
            </Button>
          ) : otherData.status === "REJECTED" ? (
            <>
              <Button disabled variant="contained" color="secondary">
                DECLINED
              </Button>
            </>
          ) : (
            <>
              <Button
                style={{ marginRight: "20px" }}
                variant="contained"
                color="primary"
                onClick={onApprove}
              >
                APPROVE
              </Button>
              <Button variant="contained" color="secondary" onClick={onDelete}>
                DECLINE
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewPurchaseOrder;
