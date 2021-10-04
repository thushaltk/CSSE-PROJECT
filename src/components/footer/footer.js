import React from "react";
import { Col, Row } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Icon } from "@iconify/react";
import facebookIcon from "@iconify/icons-mdi/facebook";
import instagramIcon from "@iconify/icons-mdi/instagram";
import webIcon from "@iconify/icons-mdi/web";

import "./footer.css";
import { Button, TextField } from "@mui/material";

const Footer = () => {
  return (
    <div id="footer">
      <Row style={{ display: "flex", width: "100%", height: "100%" }}>
        <Col
          id="col-footer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} width="230px" height="180px" />
        </Col>
        <Col
          id="col-footer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              lineHeight: "2rem",
            }}
          >
            <h3>PRODUCT</h3>
            <a>Features</a>
            <a>Promo</a>
            <a>Download</a>
          </div>
        </Col>
        <Col
          id="col-footer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              lineHeight: "2rem",
            }}
          >
            <h3>CONTACT</h3>
            <a>Find us</a>
            <a>FAQ</a>
            <a>Help</a>
          </div>
        </Col>
        <Col
          id="col-footer"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              heightjustifyContent: "start",
              flexDirection: "column",
              lineHeight: "2rem",
              marginTop: "15px",
            }}
          >
            <h3>FOLLOW US</h3>
            <div style={{ display: "flex" }}>
              <Icon icon={facebookIcon} width="30px" height="30px" />
              <Icon icon={instagramIcon} width="30px" height="30px" />
              <Icon icon={webIcon} width="30px" height="30px" />
            </div>
          </div>
        </Col>
        <Col
          id="col-footer"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
            <br/>
            <h3>SUBSCRIBE</h3>
            <TextField
                label="Enter your email"
                type="email"
                id="email-subscribe"
                variant="outlined"
            />
            <br/>
            <Button variant="contained" color="primary">SUBSCRIBE</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
