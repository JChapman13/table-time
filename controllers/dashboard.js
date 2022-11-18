const User = require("../models/User.js");
const axios = require("axios");
require("dotenv").config();

async function getRestaurants(req, res) {
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&open_now=true&limit=50&latitude=${req.query.latitude}&longitude=${req.query.longitude}`,
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

async function getCategories(req, res) {
  axios
    .get(`https://api.yelp.com/v3/categories?locale=en_CA`, {
      headers: { Authorization: `Bearer ${process.env.YELP_KEY}` },
    })
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err, "category find error");
      res.status(500).json({ message: "can't find categories" });
    });
}

module.exports = {
  getRestaurants,
  getCategories,
};
