const User = require("../models/User.js");
const axios = require("axios");
require("dotenv").config();

async function searchRestaurants(req, res) {
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=restaurants,${req.query.category}&limit=20&latitude=${req.query.latitude}&longitude=${req.query.longitude}`,
      {
        headers: { Authorization: `Bearer ${process.env.YELP_KEY}` },
      }
    )
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err, "restaurant find error");
      res.status(500).json({ message: "can't find restaurants" });
    });
}

async function restaurantDetail(req, res) {
  axios
    .get(`https://api.yelp.com/v3/businesses/${req.query.id}`, {
      headers: { Authorization: `Bearer ${process.env.YELP_KEY}` },
    })
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err, "restaurant find error");
      res.status(500).json({ message: "can't find restaurant" });
    });
}

module.exports = {
  searchRestaurants,
  restaurantDetail,
};
