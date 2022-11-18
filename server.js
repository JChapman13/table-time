const express = require("express");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv").config("");
require("./config/database.js");
require("dotenv").config({ path: "ENV_FILENAME" });

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/", require("./routes/dashboard.js"));
app.use("/restaurants", require("./routes/restaurants.js"));
app.use("/reservations", require("./routes/reservations.js"));
app.use("/pickthree", require("./routes/pickthree.js"));
app.use("/location", require("./routes/location.js"));
app.use("/profile", require("./routes/profile.js"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
