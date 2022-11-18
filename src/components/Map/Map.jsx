import React from "react";
import { Map, GoogleAPIWrapper } from "google-map-react";
require("dotenv").config();

function Map(props) {
  return (
    <div>
      <iframe
        width="450"
        height="250"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Map;
