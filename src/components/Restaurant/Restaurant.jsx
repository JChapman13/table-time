import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";

function Restaurant(props) {
  const navigate = useNavigate();

  const handleDetails = () => {
    const id = props.restaurants.id;
    navigate("/detail", { state: id });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.restaurants.image_url}
        alt={props.restaurants.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.restaurants.name}
        </Typography>
        <Typography>
          {props.restaurants.rating}
          <StarIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.restaurants.location.display_address[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.restaurants.location.city}
        </Typography>
        <Chip
          label={props.restaurants && props.restaurants.categories[0].title}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDetails}>
          Details
        </Button>
        <Button size="small">Book Now</Button>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}

export default Restaurant;
