import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import * as SupplierLoginAnimation from "../../assets/animations/63904-search-data.json";
import { Alert, Button, FormControl, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import supplierService from "../../services/supplier-service";

const SupplierRegister = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredContact, setEnteredContact] = useState("");
  const [enteredRegisterDate, setEnteredRegisterDate] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let y = new Date().getFullYear();
    let m = new Date().getMonth() + 1;
    let d = new Date().getDate();
    let date = y + "-" + m + "-" + d;
    setEnteredRegisterDate(date);
    setShowAlert(false);
  }, []);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const contactChangeHandler = (event) => {
    setEnteredContact(event);
  };

  const onSubmit = () => {
    const formData = {
      name: enteredUsername,
      location: enteredLocation,
      contact: enteredContact,
      registerDate: enteredRegisterDate,
      status: "PENDING",
    };

    supplierService.addNewSupplier(formData).then((res) => {
      if (res.data.success) {
        setShowAlert(true);
      }
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
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
            src={SupplierLoginAnimation.default}
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
          <br />
          <br />
          <h1>Register as a Supplier</h1>
          <br />
          <FormControl>
            <TextField
              label="Enter username"
              type="text"
              id="sm-username"
              variant="outlined"
              value={enteredUsername}
              onChange={usernameChangeHandler}
              style={{ width: "90%" }}
              required
            />
            <br />
            <TextField
              label="Enter location"
              type="text"
              id="sm-location"
              variant="outlined"
              value={enteredLocation}
              onChange={locationChangeHandler}
              style={{ width: "90%" }}
              required
            />
            <br />
            <div style={{ width: "100%" }}>
              <PhoneInput
                inputStyle={{ width: "90%" }}
                country={"lk"}
                value={enteredContact}
                onChange={contactChangeHandler}
              />
            </div>

            <br />
            <FormControl style={{ width: "90%" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select Date"
                  value={enteredRegisterDate}
                  inputFormat="yyyy-MM-dd"
                  onChange={(newValue) => {
                    setEnteredRegisterDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
            <br />
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
                onClick={onSubmit}
              >
                REGISTER
              </Button>
            </div>
            <br />
            <br />
          </FormControl>
        </Col>
      </Row>
      {showAlert ? (
        <Alert severity="success">Registered Successfully!</Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default SupplierRegister;
