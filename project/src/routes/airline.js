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
  console.log(aircode, Lan);

  if (aircode === "" || Lan === "") {
    res.send("CheckData");
  } else if (aircode === "Null" || Lan === "Null") {
    res.send("CheckData");
  } else if (aircode === "??" || Lan === "문서를 선택해 주세요") {
    res.send("CheckData");
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

    // axios
    //   .get(requestUrl)
    //   .then((result) => {
    //     console.log(result.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }
});

module.exports = router;
