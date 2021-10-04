import { display } from "@mui/system";
import React from "react";
import { Col, Row } from "reactstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import * as ProcumentStaffLoginAnimation from "../../assets/animations/73985-colleagues-working-together.json";
import { Button, FormControl, TextField } from "@mui/material";
import { useHistory } from "react-router";

const ProcumentStaffLogin = () => {
  let history = useHistory();

  const goProcumentDashboard = () => {
    history.push("/procument-staff-dashboard");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row
        style={{
          width: "100%",
          height: "fit-content",
          minHeight: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={ProcumentStaffLoginAnimation.default}
            style={{ height: "450px", width: "450px" }}
          />
        </Col>
        <Col
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Procument Staff Login</h1>
          <br />
          <FormControl>
            <TextField
              label="Enter username"
              type="text"
              id="sm-username"
              variant="outlined"
              style={{ width: "90%" }}
              required
            />
            <br />
            <TextField
              label="Enter password"
              type="password"
              id="sm-password"
              variant="outlined"
              style={{ width: "90%" }}
              required
            />
            <br />
            <br />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ width: "20%" }}
                type="submit"
                variant="outlined"
                color="primary"
                onClick={goProcumentDashboard}
              >
                LOGIN
              </Button>
            </div>
          </FormControl>
        </Col>
      </Row>
    </div>
  );
};

export default ProcumentStaffLogin;
