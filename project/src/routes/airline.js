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
    const from_time = "0000";
    const to_time = "2400";
    const queryParams = `?serviceKey=${process.env.APIKEY}&airport=${aircode}&from_time=${from_time}&to_time=${to_time}&lang=${Lan}&type=${type}`;
    const requestUrl = `${apiUrl}${queryParams}`;
    const SelectData = await axios.get(requestUrl);

    res.json({ msg: "OK", data: SelectData.data.response.body.items });
  }
});

module.exports = router;
