import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Grid } from "@mui/material";
import axios from "axios";
import Recommended from "../../components/Recommended/Recommended";
import MobileNavBar from "../../components/MobileNavBar/MobileNavBar";
import { CircularProgress } from "@mui/material";

function DashboardPage(props) {
  return (
    <>
      <Grid container spacing={4} direction="row" justifyContent="center">
        {props.isLoading ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <Grid item xs={10}>
            <Recommended dashRestaurants={props.dashRestaurants} />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default DashboardPage;
