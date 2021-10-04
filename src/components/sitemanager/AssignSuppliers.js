import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Row } from "reactstrap";
import Item from "./Item";
import purchaseorderService from "../../services/purchaseorder-service";

let tmpTotal = 0;

const AssignSuppliers = (props) => {
  const [open, setOpen] = useState(props.open);
  const [itms, setItems] = useState(props.items);
  const [total, setTotal] = useState(0);
  const [selfApprove, setSelfApprove] = useState(false);
  

  useEffect(() => {
    setOpen(props.open);
    setItems(props.items);
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  const totalHandler = (tot) => {
    tmpTotal = parseInt(tmpTotal) +  parseInt(tot);
    console.log(tmpTotal, tot);
    setTotal(tmpTotal);
    if(tmpTotal < 100000){
        setSelfApprove(true);
    }else{
        setSelfApprove(false);
    }
  }

  const onApproveSubmit = () => {
    const formData = {
        id: props.pOrderID,
        status: 'SELF APPROVED',
        total: total
    };
    purchaseorderService.updateOrder(formData).then(res => {
        console.log(res.data);
    })
  };

  const onSubmitApprove = () => {
    const formData = {
        id: props.pOrderID,
        status: 'WAITING FOR APPROVAL',
        total: total
    };
    purchaseorderService.updateStatus(formData).then(res => {
        console.log(res.data);
    })
  };
  

  return (
    <Dialog maxWidth="lg" fullWidth onClose={handleClose} open={open}>
      <DialogTitle>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1>Assign Suppliers</h1>
        </div>
        <hr />
      </DialogTitle>
      <DialogContent>
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
                  Suppliers
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Deadline
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Budget Allocated
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itms.map((it) => (
                <Item item={it} purchaseOrderId={props.pOrderID} total={totalHandler}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Total : LKR {total}</h1>
          {selfApprove ? (
            <Button
            style={{ height: "20%" }}
            variant="contained"
            color="secondary"
            onClick={onApproveSubmit}
          >
            APPROVE AND SUBMIT
          </Button>
          ) : (
            <Button
            style={{ height: "20%" }}
            variant="contained"
            color="secondary"
            onClick={onSubmitApprove}
          >
            SUBMIT FOR APPROVAL
          </Button>
          )}
          
        </Row>
      </DialogContent>
    </Dialog>
  );
};

export default AssignSuppliers;
