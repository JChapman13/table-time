import React from "react";
import { Paper } from "@mui/material";

function Categories(props) {
  return (
    <>
      {props.storedCat.map((e, idx) => {
        return <Paper key={e + idx}>{e}</Paper>;
      })}
    </>
  );
}

export default Categories;
