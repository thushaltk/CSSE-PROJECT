import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import supplierService from "../../services/supplier-service";
import ViewSupplier from "./ViewSupplier";

const ProcumentStaffSuppliers = () => {
  const [allSuppliers, setAllSupplier] = useState([]);
  const [singleSupplier, setSingleSupplier] = useState('');
  const [isClickedViewBtn, setIsClickedViewBtn] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(false);
    supplierService.getAllSuppliers().then((res) => {
      if (res.data.success) {
        setAllSupplier(res.data.data);
      }
    });
  }, [trigger]);

  const viewSupplierHandler = (supplier) => {
    setSingleSupplier(supplier);
    setIsClickedViewBtn(true);
  };

  const setToClose = (sts) => {
    setIsClickedViewBtn(sts);
  }


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1 style={{ marginLeft: "20px", marginTop: "30px" }}>
        Manage Suppliers
      </h1>
      <br />
      <TableContainer component={Paper}>
        <Table style={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ textTransform: "uppercase" }}>
              <TableCell align="center" style={{ fontWeight: "800" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "800" }}>
                Location
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "800" }}>
                Contact
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "800" }}>
                Register Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "800" }}>
                Status
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "800" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allSuppliers.map((sup) => (
              <TableRow
                key={sup._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {sup.name}
                </TableCell>
                <TableCell align="center">{sup.location}</TableCell>
                <TableCell align="center">{sup.contact}</TableCell>
                <TableCell align="center">{sup.registerDate}</TableCell>
                <TableCell align="center">{sup.status}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => viewSupplierHandler(sup)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isClickedViewBtn ? (
          <ViewSupplier open={isClickedViewBtn} close={setToClose} supplierData={singleSupplier} trigger={(sts) => setTrigger(sts)}/>
      ): ''}
    </div>
  );
};

export default ProcumentStaffSuppliers;
