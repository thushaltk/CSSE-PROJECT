import { Button, TextField } from "@mui/material";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { Col, Row } from "reactstrap";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = () => {
  let location = useLocation();
  let history = useHistory();
  const { pathname } = location;
  const splitlocation = pathname.split("/");

  return (
    <Row id="header">
      <Col id="header-row" style={{ width: "100%" }}>
        <div id="header-div">
          <img src={logo} width="130px" height="100px" />
        </div>
        <div
          id="header-div"
          className={splitlocation[1] === "" ? "active" : ""}
        >
          <a onClick={() => history.push("/")}>HOME</a>
        </div>
        <div
          id="header-div"
          style={{ width: "150px" }}
          className={splitlocation[1] === "site-manager-login" ? "active" : ""}
        >
          <a onClick={() => history.push("/site-manager-login")}>MANAGERS</a>
        </div>
        <div
          id="header-div"
          className={
            splitlocation[1] === "procument-staff-login" ? "active" : ""
          }
        >
          <a onClick={() => history.push("/procument-staff-login")}>STAFF</a>
        </div>
        <div
          className={splitlocation[1] === "supplier-register" ? "active" : ""}
          onClick={() => history.push("/supplier-register")}
          id="header-div"
          style={{ width: "150px" }}
        >
          <a>SUPPLIERS</a>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
