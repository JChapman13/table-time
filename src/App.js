import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import PickThreePage from "./pages/PickThreePage/PickThreePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { CircularProgress } from "@mui/material";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import MobileNavBar from "./navbar/MobileNavBar";
import DetailPage from "./pages/DetailPage/DetailPage";
import MobileTopBar from "./topbar/MobileTopBar.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({
    location: "",
    longitude: "",
    latitude: "",
  });
  const [dashRestaurants, setDashRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get("/location", {
          params: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        })
        .then((res) => {
          setCoordinates({
            location: res.data.split(",")[0],
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          generateRestaurants({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          generateCategories();
          console.log("location found");
        })
        .catch((err) => console.log(err, "this is the error"));
    });
  }, []);

  async function generateRestaurants(params) {
    axios
      .get("/restaurants", {
        params: {
          latitude: params.latitude,
          longitude: params.longitude,
        },
      })
      .then((res) => {
        setDashRestaurants(res.data.businesses);
        console.log("this is being hit");
        setIsLoading(false);
      })
      .catch((err) => console.log(err, "this is a restaurant finder error"));
  }

  async function generateCategories() {
    axios
      .get("/categories")
      .then((res) => {
        let aliasMap = [];
        let ctgryIdx = [];
        let listOfCategories = [];
        let ctgry = res.data.categories;
        ctgry.map((e) => {
          aliasMap.push(e.parent_aliases[0]);
        });
        aliasMap.forEach((e, idx) => {
          if (e === "restaurants") {
            ctgryIdx.push(idx);
          }
        });
        ctgryIdx.forEach((e) => {
          listOfCategories.push(ctgry[e].title);
        });
        setCategories(listOfCategories);
      })
      .catch((err) => console.log(err, "this is the error for categories"));
  }

  async function searchRestaurants(params) {
    setIsLoading(true);
    try {
      let responseData = [];
      for (const cat of params.categories) {
        const result = await axios.get("/restaurants/search", {
          params: {
            category: cat,
            latitude: params.latitude,
            longitude: params.longitude,
          },
        });
        result.data.businesses.forEach((e) => {
          responseData.push(e);
        });
      }
      setSearchedRestaurants(responseData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoading) {
    return (
      <>
        <MobileTopBar />
        <CircularProgress />
        <MobileNavBar />
      </>
    );
  }
  return (
    <>
      <Router>
        <MobileTopBar coordinates={coordinates} />
        <MobileNavBar
          categories={categories}
          coordinates={coordinates}
          searchRestaurants={searchRestaurants}
        />
        <div className="app-wrapper">
          <Routes>
            <Route path="/welcome" element={<AuthPage />} />
            <Route
              path="/"
              element={
                <DashboardPage
                  coordinates={coordinates}
                  dashRestaurants={dashRestaurants}
                  categories={categories}
                  searchRestaurants={searchRestaurants}
                />
              }
            />
            <Route path="/pickthree" element={<PickThreePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route
              path="/search"
              element={
                <SearchPage
                  coordinates={coordinates}
                  categories={categories}
                  searchRestaurants={searchRestaurants}
                  searchedRestaurants={searchedRestaurants}
                />
              }
            />
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
