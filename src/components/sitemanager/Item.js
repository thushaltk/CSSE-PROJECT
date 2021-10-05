import React, { useEffect, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { QuantityPicker } from "react-qty-picker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Button, CircularProgress, TextField } from "@mui/material";
import supplierService from "../../services/supplier-service";
import InputLabel from "@mui/material/InputLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import assignSuppliersService from "../../services/assignSuppliers-service";

const Item = (props) => {
  const [it, setItem] = useState(props.item);
  const [qty, setQty] = useState(1);
  const [dateValue, setDateValue] = useState(null);
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [allSuppliers, setAllSuppliers] = useState([]);
  const [enteredBudget, setEnteredBudget] = useState([]);
  const [purchaseOrderID, setPurchaseOrderID] = useState(props.purchaseOrderId);
  const [selectedSupplierIDs, setSelectedSupplierIDs] = useState([]);
  const [isAssigned, setIsAssigned] = useState(false);
  const [progress, setProgress] = useState(false);
  let tempSupIDs = [];

  useEffect(() => {
    setSelectedSuppliers([]);
    setItem(props.item);
    setPurchaseOrderID(props.purchaseOrderId);
    supplierService.getApprovedSuppliers().then((res) => {
      setAllSuppliers(res.data.data);
    });
  }, []);

  const handleChange = (value) => {
    setQty(value);
  };
  const handleChange2 = (event) => {
    setSelectedSuppliers(event.target.value);
  };
  const handleDateChange = (value) => {
    setDateValue(value);
  };

  const budgetChangeHandler = (event) => {
    setEnteredBudget(event.target.value);
  };
  const onAssign = () => {
    setProgress(true);
    props.total(enteredBudget);
    selectedSuppliers.map((sup) => {
      tempSupIDs.push(sup._id);
    });
    setTimeout(() => {
      const formData = {
        purchaseOrderID: purchaseOrderID,
        itemname: it._id,
        quantity: qty,
        supplier: tempSupIDs,
        deadline: dateValue,
        budget: enteredBudget,
      };

      assignSuppliersService.addAssignSuppliers(formData).then((res) => {
        if (res.data.success) {
          setIsAssigned(true);
          setProgress(false);
        } else {
          setIsAssigned(false);
        }
      });
    }, 1000);
  };

  return (
    <>
      <TableRow
        key={it._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          {it.itemname}
        </TableCell>
        <TableCell align="center">
          <QuantityPicker
            smooth
            min={1}
            value={qty}
            width="10rem"
            onChange={handleChange}
          />
        </TableCell>
        <TableCell align="center">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">
              Select Suppliers (multiple)
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              label="Select Suppliers (multiple)"
              value={selectedSuppliers}
              onChange={handleChange2}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value.name} />
                  ))}
                </Box>
              )}
            >
              {allSuppliers.map((supplier) => (
                <MenuItem key={supplier._id} value={supplier}>
                  {supplier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="center">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Select Date"
              inputFormat="yyyy-MM-dd"
              value={dateValue}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </TableCell>
        <TableCell align="center">
          <TextField
            variant="outlined"
            type="number"
            label="Budget Allocated"
            onChange={budgetChangeHandler}
          />
        </TableCell>
        <TableCell align="center">
          {progress ? (
            <CircularProgress />
          ) : !isAssigned ? (
            <Button variant="outlined" color="primary" onClick={onAssign}>
              ASSIGN
            </Button>
          ) : (
            <Button disabled variant="outlined" color="primary">
              ASSIGNED
            </Button>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Item;
