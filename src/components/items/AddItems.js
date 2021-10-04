import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import itemsService from "../../services/items-service";

const AddItems = (props) => {
  const [open, setOpen] = useState(props.open);
  const [noData, setNoData] = useState(false);
  const [success, setSuccess] = useState(false);
  const [enteredItemname, setEnteredItemname] = useState('');

  useEffect(() => {
    setOpen(props.open);
    setSuccess(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  const itemnameChangeHandler = (event) => {
    setEnteredItemname(event.target.value);
  };

  const onSubmit = () => {
      const formData = {
          itemName: enteredItemname
      };

      itemsService.addItem(formData).then(res => {
          props.trigger(true);
          handleClose();
      })
  }

  return (
    <Dialog maxWidth="sm" fullWidth onClose={handleClose} open={open}>
      <DialogTitle>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1>Add New Item</h1>
        </div>
      </DialogTitle>
      <DialogContent>
        <Row
          style={{
            width: "100%",
            height: '100%',
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
            <br/>
          <TextField
            label="Enter itemname"
            type="text"
            id="sm-itemname"
            variant="outlined"
            value={enteredItemname}
            onChange={itemnameChangeHandler}
            style={{ width: "100%" }}
            required
          />
          <br/><br/>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Button style={{width: '50%'}} variant="contained" color="primary" onClick={onSubmit}>
            ADD
          </Button>
          </div>
          
        </Row>
      </DialogContent>
    </Dialog>
  );
};

export default AddItems;
