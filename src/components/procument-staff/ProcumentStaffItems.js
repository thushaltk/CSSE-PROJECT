import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import itemsService from "../../services/items-service";
import AddItems from "../items/AddItems";
import ViewSupplier from "./ViewSupplier";

const ProcumentStaffItems = () => {
  const [allItems, setAllItems] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [isClickedAddBtn, setIsClickedAddBtn] = useState(false);

  useEffect(() => {
    setIsClickedAddBtn(false);
    setTrigger(false);
    itemsService.getAllItems().then((res) => {
      setAllItems(res.data);
    });
  }, [trigger]);

  const setToClose = (sts) => {
    setIsClickedAddBtn(sts);
  };

  const deleteItemHandler = (id) => {
    itemsService.deleteItem(id).then((res) => {
      if (res.data === "deleted") {
        setTrigger(true);
      }
    });
  };

  const addItemChangeHandler = () => {
    setIsClickedAddBtn(true);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginLeft: "20px", marginTop: "30px" }}>Manage Items</h1>
        <Button
          style={{ height: "30%", marginRight: "30px" }}
          variant="outlined"
          color="primary"
          onClick={addItemChangeHandler}
        >
          ADD NEW ITEM
        </Button>
      </div>

      <br />
      <br />
      <br />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <TableContainer style={{ width: "80%" }} component={Paper}>
          <Table style={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ textTransform: "uppercase" }}>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Item Name
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "800" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allItems.map((itm) => (
                <TableRow
                  key={itm._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {itm.itemname}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deleteItemHandler(itm._id)}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {isClickedAddBtn ? (
        <AddItems
          open={isClickedAddBtn}
          close={setToClose}
          trigger={(sts) => setTrigger(sts)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProcumentStaffItems;
