import React from "react";
import { Col, Row } from "reactstrap";
import * as PurchaseOrderAnimation from "../../assets/animations/15564-order-button.json";
import * as SupplierAnimation from "../../assets/animations/10526-forklift.json";
import * as ItemsAnimation from "../../assets/animations/24700-item-highlight.json";
import {
  Button,
  FormControl,
  TextField,
  CardContent,
  Card,
} from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useHistory } from "react-router";

const ProcumentStaffDashboard = () => {
  let history = useHistory();

  const onNavigateOrders = () => {
    history.push("/procument-staff-orders");
  };
  const onNavigateSuppliers = () => {
    history.push("/procument-staff-suppliers");
  };
  const onNavigateItems = () => {
    history.push("/procument-staff-items");
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
        <h1>SELECT OPTION</h1>
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
                  src={PurchaseOrderAnimation.default}
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
                  <h2>Purchase Orders</h2>
                  <br />
                  <Button
                    style={{ width: "60%" }}
                    variant="contained"
                    color="primary"
                    onClick={onNavigateOrders}
                  >
                    MANAGE
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
                  src={SupplierAnimation.default}
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
                  <h2>Suppliers</h2>
                  <br />
                  <Button
                    style={{ width: "60%" }}
                    variant="contained"
                    color="primary"
                    onClick={onNavigateSuppliers}
                  >
                    MANAGE
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
                  src={ItemsAnimation.default}
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
                  <h2>Items</h2>
                  <br />
                  <Button
                    style={{ width: "60%" }}
                    variant="contained"
                    color="primary"
                    onClick={onNavigateItems}
                  >
                    MANAGE
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

export default ProcumentStaffDashboard;
