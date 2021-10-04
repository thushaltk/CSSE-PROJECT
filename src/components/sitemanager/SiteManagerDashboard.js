import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import purchaseorderService from "../../services/purchaseorder-service";
import { Button } from "@mui/material";
import AssignSuppliers from "./AssignSuppliers";

const SiteManagerDashboard = () => {
  const [sitemanagerName, setSitemanagerName] = useState(
    localStorage.getItem("sitemanagerName") || "Site Manager"
  );
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isClickedAssignBtn, setIsClickedAssignBtn] = useState(false);
  const [items, setItems] = useState([]);
  const [orderID, setOrderID] = useState("");

  useEffect(() => {
    if (localStorage.getItem("sitemanagerName")) {
      setSitemanagerName(sitemanagerName);
      purchaseorderService
        .getAllPurcaseOrdersBySiteManager(sitemanagerName)
        .then((res) => {
          if (res.data) {
            setPurchaseOrders(res.data);
          } else {
            setNoData(true);
          }
        });
    } else {
      setSitemanagerName("Site Manager");
      setNoData(true);
    }
  }, []);

  const openAssignSuppliers = (orderItems, orderID) => {
    setIsClickedAssignBtn(true);
    setItems(orderItems);
    setOrderID(orderID);
  };

  const setToClose = (sts) => {
    setIsClickedAssignBtn(sts);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1 style={{ marginLeft: "20px", marginTop: "30px" }}>
        Purchase Orders Added By {sitemanagerName}
      </h1>
      <br />

      <div>
        <TableContainer component={Paper}>
          <Table style={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ textTransform: "uppercase" }}>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Sitename
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Location
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Site Manager
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Item List
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Request Date
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
              {!noData
                ? purchaseOrders.map((order) => (
                    <TableRow
                      key={order._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {order.sitename}
                      </TableCell>
                      <TableCell align="center">{order.location}</TableCell>
                      <TableCell align="center">{order.sitemanager}</TableCell>
                      <TableCell align="center">
                        {order.order.map((item) => (
                          <p>{item.itemname}</p>
                        ))}
                      </TableCell>
                      <TableCell align="center">{order.date}</TableCell>
                      <TableCell align="center">{order.status}</TableCell>
                      <TableCell align="center">
                        {order.status === "SELF APPROVED" ? (
                          <Button disabled variant="contained" color="primary">
                            SELF APPROVED
                          </Button>
                        ) : order.status === "APPROVED" ? (
                          <Button disabled variant="contained" color="primary">
                            APPROVED
                          </Button>
                        ) : order.status === "REJECTED" ? (
                          <Button disabled variant="contained" color="primary">
                            REJECTED
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              openAssignSuppliers(order.order, order._id)
                            }
                          >
                            ASSIGN SUPPLIERS
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                : ""}
            </TableBody>
          </Table>
        </TableContainer>
        {isClickedAssignBtn ? (
          <AssignSuppliers
            items={items}
            open={isClickedAssignBtn}
            close={setToClose}
            pOrderID={orderID}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SiteManagerDashboard;
