import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SearchIcon from "@mui/icons-material/Search";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import PersonIcon from "@mui/icons-material/Person";

function MobileNavBar() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            className="bottom-nav-icon"
            label="Categories"
            value="categories"
            icon={<FastfoodIcon />}
          />
          <BottomNavigationAction
            className="bottom-nav-icon"
            label="Pick Three"
            value="pickthree"
            icon={<ViewCarouselIcon />}
          />
          <BottomNavigationAction
            className="bottom-nav-icon"
            label="Search"
            value="search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            className="bottom-nav-icon"
            label="Profile"
            value="profile"
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default MobileNavBar;
