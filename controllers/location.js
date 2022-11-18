const User = require("../models/User.js");
const axios = require("axios");
require("dotenv").config();

async function getLocation(req, res) {
  const { latitude, longitude } = req.query;

  axios
    .get(
      `https://api.geocod.io/v1.6/reverse?q=${latitude},${longitude}&api_key=${process.env.GEO_KEY}`
    )
    .then((data) =>
      res.status(200).json(data.data.results[0].formatted_address)
    )
    .catch((err) => {
      res.status(500).json({ message: "location search error" });
    });
}

module.exports = {
  getLocation,
};
