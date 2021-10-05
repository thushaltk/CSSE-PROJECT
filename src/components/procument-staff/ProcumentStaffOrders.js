import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Col, Form, Row } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import purchaseorderService from "../../services/purchaseorder-service";
import ViewPurchaseOrder from "./ViewPurchaseOrder";

const ProcumentStaffOrders = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isClickedViewOrder, setIsClickedViewOrder] = useState(false);
  const [singleOrder, setSingleOrder] = useState("");
  const [selectedSitename, setSelectedSitename] = useState("");
  const [enteredSearchKeyword, setEnteredSearchKeyword] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(false);
    purchaseorderService.getAllPurchaseOrder().then((res) => {
      if (res.data) {
        setPurchaseOrders(res.data.data);
      } else {
        setNoData(true);
      }
    });
  }, [trigger]);

  const handleChange = (event) => {
    setSelectedSitename(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedLocation(event.target.value);
  };

  const searchkeywordHandler = (event) => {
    setEnteredSearchKeyword(event.target.value);
  };

  const viewPurchaseOrderHandler = (data) => {
    setIsClickedViewOrder(true);
    setSingleOrder(data);
  };

  const setToClose = (sts) => {
    setIsClickedViewOrder(sts);
  };

  const filter = () => {
    if (selectedSitename) {
      setPurchaseOrders(
        purchaseOrders.filter((order) => order.sitename === selectedSitename)
      );
    } else if (enteredSearchKeyword) {
      setPurchaseOrders(
        purchaseOrders.filter(
          (order) => order.sitename === enteredSearchKeyword
        )
      );
    } else if (selectedDate) {
      let y = selectedDate.getFullYear();
      let m = selectedDate.getMonth() + 1;
      let d = selectedDate.getDate();
      let date = y + "-" + m + "-" + d;
      setPurchaseOrders(purchaseOrders.filter((order) => order.date === date));
    } else if (selectedLocation) {
      setPurchaseOrders(
        purchaseOrders.filter((order) => order.location === selectedLocation)
      );
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1 style={{ marginLeft: "20px", marginTop: "30px" }}>
        All Purchase Orders
      </h1>
      <br />
      <Row style={{ width: "100%", display: "flex" }}>
        <Col
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <h3>Select Site Name</h3>
          <FormControl>
            <InputLabel id="siteNameSelectLabel">Sitename</InputLabel>
            <Select
              style={{ width: "80%" }}
              name="siteNameSelect"
              labelId="siteNameSelectLabel"
              value={selectedSitename}
              label="Sitename"
              onChange={handleChange}
            >
              {purchaseOrders.map((order) => (
                <MenuItem value={order.sitename}>{order.sitename}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <h3>Keyword Search</h3>
          <FormControl>
            <TextField
              variant="outlined"
              label="Search here"
              style={{ width: "80%" }}
              onChange={searchkeywordHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Col>
        <Col
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <h3>Date</h3>
          <FormControl style={{ width: "80%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                inputFormat="yyyy-MM-dd"
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Col>
        <Col
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <h3>Location</h3>
          <FormControl>
            <InputLabel id="locationSelectLabel">Location</InputLabel>
            <Select
              style={{ width: "80%" }}
              name="locationSelect"
              labelId="locationSelectLabel"
              value={selectedLocation}
              label="Location"
              onChange={handleChange2}
            >
              {purchaseOrders.map((order) => (
                <MenuItem value={order.location}>{order.location}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "flex-start",
            marginRight: "20px",
          }}
        >
          <Button
            style={{ marginTop: "50px" }}
            color="primary"
            variant="contained"
            onClick={filter}
          >
            Filter
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
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
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => viewPurchaseOrderHandler(order)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : ""}
            </TableBody>
          </Table>
        </TableContainer>
        {isClickedViewOrder ? (
          <ViewPurchaseOrder
            open={isClickedViewOrder}
            close={setToClose}
            data={singleOrder}
            orderID={singleOrder._id}
            trigger={(sts) => setTrigger(sts)}
          />
        ) : (
          ""
        )}
      </Row>
    </div>
  );
};

export default ProcumentStaffOrders;
