require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const request = require("request");
const axios = require("axios");

router.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
router.use(express.json());
// 데이터를 json형식으로 파싱하겠다.

router.post("/AirPortData", async (req, res) => {
  const { aircode, Lan } = req.body;

  if (aircode === "" || Lan === "") {
    res.send("NoData");
  } else {
    const apiUrl =
      "http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerDeparturesOdp";
    const type = "json";

    const queryParams = `?serviceKey=${encodeURIComponent(
      process.env.APIKEY
    )}&airport=${encodeURIComponent(aircode)}&lang=${encodeURIComponent(
      Lan
    )}&type=${encodeURIComponent(type)}`;

    const requestUrl = `${apiUrl}${queryParams}`;
    console.log(requestUrl);
  }
});

module.exports = router;
