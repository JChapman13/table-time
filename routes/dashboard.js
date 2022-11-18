const express = require("express");
const router = express.Router();
const dashboardCtrl = require("../controllers/dashboard");

router.get("/restaurants", dashboardCtrl.getRestaurants);
router.get("/categories", dashboardCtrl.getCategories);

module.exports = router;
