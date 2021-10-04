import { display } from "@mui/system";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import * as SiteManagerLoginAnimation from "../../assets/animations/site_manager_login.json";
import { Button, FormControl, TextField } from "@mui/material";
import { useHistory } from "react-router";

const SiteManagerlogin = (props) => {
  let history = useHistory();
  const [enteredUsername, setEnteredUsername] = useState('');


  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const onSubmit = () => {
    localStorage.setItem('sitemanagerName', enteredUsername);
    history.push('/site-manager-dashboard');
  }


  return (
    <div style={{ width: "100%", height: "80%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Row
        style={{
          width: "100%",
          height: 'fit-content',
          minHeight: '500px',
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
            src={SiteManagerLoginAnimation.default}
            style={{ height: "500px", width: "500px" }}
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
          <h1>Site Manager Login</h1>
          <br />
          <FormControl>
            <TextField
              label="Enter username"
              type="text"
              id="sm-username"
              variant="outlined"
              style={{ width: "90%" }}
              onChange={usernameChangeHandler}
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
            <br /><br />
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
                onClick={onSubmit}
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

export default SiteManagerlogin;
