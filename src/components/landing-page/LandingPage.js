import React from "react";
import { Col, Row } from "reactstrap";
import * as SiteManagerLoginAnimation from "../../assets/animations/site_manager_login.json";
import * as SupplierLoginAnimation from "../../assets/animations/63904-search-data.json";
import * as ProcumentStaffLoginAnimation from "../../assets/animations/73985-colleagues-working-together.json";
import {
  Button,
  FormControl,
  TextField,
  CardContent,
  Card,
} from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useHistory } from "react-router";

const LandingPage = () => {
  let history = useHistory();

  const onNavigateSiteManagerLogin = () => {
    history.push("/site-manager-login");
  };
  const onNavigateSupplierRegister = () => {
    history.push("/supplier-register");
  };
  const onNavigateProcumentStaffLogin = () => {
    history.push("/procument-staff-login");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        minHeight: "500px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <br />
      <Row
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>WELCOME</h1>
      </Row>
      <Row
        style={{
          width: "100%",
          height: "fit-content",
          minHeight: "500px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Col style={{ width: "30%", height: "fit-content" }}>
          <Card>
            <CardContent>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Player
                  autoplay={true}
                  loop={true}
                  controls={false}
                  src={SiteManagerLoginAnimation.default}
                  style={{ height: "350px", width: "350px" }}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2>Login as Site Manager</h2>
                  <br />
                  <Button
                    style={{ width: "60%" }}
                    variant="contained"
                    color="primary"
                    onClick={onNavigateSiteManagerLogin}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Col>
        <Col style={{ width: "30%", height: "fit-content" }}>
          <Card>
            <CardContent>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Player
                  autoplay={true}
                  loop={true}
                  controls={false}
                  src={SupplierLoginAnimation.default}
                  style={{ height: "350px", width: "350px" }}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2>Register as Supplier</h2>
                  <br />
                  <Button
                    style={{ width: "60%" }}
                    variant="contained"
                    color="primary"
                    onClick={onNavigateSupplierRegister}
                  >
                    REGISTER
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Col>
        <Col style={{ width: "30%", height: "fit-content" }}>
          <Card>
            <CardContent>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Player
                  autoplay={true}
                  loop={true}
                  controls={false}
                  src={ProcumentStaffLoginAnimation.default}
                  style={{ height: "350px", width: "350px" }}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2>Login as Procument Staff</h2>
                  <br />
                  <Button
                    style={{ width: "60%" }}
                    variant="contained"
                    color="primary"
                    onClick={onNavigateProcumentStaffLogin}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </div>
  );
};

export default LandingPage;
