import React from "react";
import {
  Paper,
  Autocomplete,
  TextField,
  Grid,
  FormControl,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(props) {
  let restaurants = ["McDonalds", "Wendys", "Burger King"];

  return (
    <>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={5}>
          <Paper elevation={2}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={restaurants.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search a restaurant or category"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={2}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={restaurants.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="will have current location set"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            type="submit"
            size="medium"
            sx={{ height: 55 }}
          >
            <SearchIcon />
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBar;
