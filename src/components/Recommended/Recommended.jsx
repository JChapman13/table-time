import React from "react";
import Restaurant from "../Restaurant/Restaurant";
import { Grid } from "@mui/material";

function Recommended(props) {
  return (
    <>
      <Grid container spacing={2} direction="row" justifyContent="center">
        {props.dashRestaurants.map((e) => {
          return (
            <Grid item xs={12} key={e.id}>
              <Restaurant restaurants={e} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Recommended;
