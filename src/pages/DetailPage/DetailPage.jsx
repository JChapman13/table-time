import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantDetail from "../../components/RestaurantDetail/RestaurantDetail";
import { Card, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function DetailPage(props) {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();

  useEffect(() => {
    axios
      .get("/restaurants/detail", {
        params: {
          id: state,
        },
      })
      .then((res) => {
        setDetail(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err, "this is a restaurant finder error"));
  }, [state]);

  if (isLoading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }
  return (
    <>
      <Grid container spacing={4} direction="row" justifyContent="center">
        <Grid item xs={11}>
          <RestaurantDetail detail={detail} />
        </Grid>
      </Grid>
    </>
  );
}

export default DetailPage;
