import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider, LinearProgress } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function ResponsiveAppBar({ coordinates }) {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleDrawer();
  };

  const dropdown = () => (
    <Box sx={{ width: "100%" }} role="presentation">
      <TextField
        variant="standard"
        fontColor="white"
        placeholder="Enter a new address"
        sx={{ input: { color: "white" } }}
      />
      <IconButton
        size="small"
        sx={{ color: "white", padding: "none" }}
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{ borderRadius: "0 0 10px 10px", textAlign: "center" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            TABLETIME
          </Typography>
        </Toolbar>
        {coordinates ? (
          <Typography>
            {coordinates.location}
            <IconButton
              size="small"
              sx={{ color: drawer ? "grey" : "white", padding: "none" }}
              onClick={() => toggleDrawer()}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Typography>
        ) : (
          <LinearProgress />
        )}
        {drawer ? dropdown() : null}
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
