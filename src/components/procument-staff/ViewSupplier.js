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
import supplierService from "../../services/supplier-service";

const ViewSupplier = (props) => {
  const [open, setOpen] = useState(props.open);
  const [noData, setNoData] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setOpen(props.open);
    setSuccess(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  const onApprove = () => {
    const formData = {
      id: props.supplierData._id,
      status: "APPROVED",
    };
    supplierService.updateStatus(formData).then((res) => {
      if (res.data.success) {
        setSuccess(true);
        props.trigger(true);
        handleClose();
      } else {
        setSuccess(false);
        props.trigger(true);
        handleClose();
      }
    });
  };

  const onDelete = () => {
    const formData = {
      id: props.supplierData._id,
      status: "REJECTED",
    };
    supplierService.updateStatus(formData).then((res) => {
      if (res.data.success) {
        setSuccess(true);
        handleClose();
      } else {
        setSuccess(false);
        handleClose();
      }
    });
  };

  return (
    <Dialog maxWidth="lg" fullWidth onClose={handleClose} open={open}>
      <DialogTitle>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1>View Supplier Details</h1>
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
            <h2>Name: </h2>
            <h2>location: </h2>
            <h2>Contact Number: </h2>
            <h2>Registered Date: </h2>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <h2>{props.supplierData.name}</h2>
            <h2>{props.supplierData.location}</h2>
            <h2>{props.supplierData.contact}</h2>
            <h2>{props.supplierData.registerDate}</h2>
          </Col>
        </Row>
        <br />
        <br />
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          {props.supplierData.status === "APPROVED" ? (
            <Button
              disabled
              style={{ marginRight: "20px" }}
              variant="contained"
              color="primary"
            >
              APPROVED
            </Button>
          ) : props.supplierData.status === "REJECTED" ? (
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

export default ViewSupplier;
