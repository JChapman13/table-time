const express = require("express");
const router = express.Router();
const restaurantsCtrl = require("../controllers/restaurants");

router.get("/search", restaurantsCtrl.searchRestaurants);
router.get("/detail", restaurantsCtrl.restaurantDetail);

module.exports = router;
