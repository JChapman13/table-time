const express = require("express");
const router = express.Router();
const locationCtrl = require("../controllers/location");

router.get("/", locationCtrl.getLocation);

module.exports = router;
