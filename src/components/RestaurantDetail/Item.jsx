import React from "react";
import { Paper, Button } from "@mui/material";

function Item(props) {
  return (
    <Paper sx={{ height: "auto", maxWidth: "auto" }}>
      <img src={props.item} />
    </Paper>
  );
}
export default Item;
