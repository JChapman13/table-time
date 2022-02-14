import React from "react";
import "./App.css";
// import { Grid, Typography, Texfield } from "@mui/material";
// import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import PickThreePage from "./pages/PickThreePage/PickThreePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/welcome" element={<AuthPage />} />
          <Route path="/pickthree" element={<PickThreePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
