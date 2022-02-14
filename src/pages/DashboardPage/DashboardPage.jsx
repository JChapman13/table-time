import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Grid } from "@mui/material";
import Recommended from "../../components/Recommended/Recommended";

function DashboardPage() {
  return (
    <>
      <Grid container spacing={4} direction="row" justifyContent="center">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={8}>
          <SearchBar />
        </Grid>
        <Grid item xs={10}>
          <Recommended />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
