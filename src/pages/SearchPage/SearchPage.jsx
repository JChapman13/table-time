import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Restaurant from "../../components/Restaurant/Restaurant";
import { Grid } from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";
import MobileNavBar from "../../components/MobileNavBar/MobileNavBar";

function SearchPage(props) {
  return (
    <>
      <Grid container spacing={2} direction="row" justifyContent="center">
        {props.searchedRestaurants.map((e, idx) => {
          return (
            <Grid item xs={10}>
              <Restaurant key={e + idx} restaurants={e} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default SearchPage;
