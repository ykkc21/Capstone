const express = require("express");
const router = express.Router();
const request = require("request");
const axios = require("axios");

router.use(express.json());
// 데이터를 json형식으로 파싱하겠다.

router.get("/", async (req, res) => {
  const url =
    "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList";
  const queryParams = `?${encodeURIComponent(
    "serviceKey"
  )}=ni1KPPPSl7rn5wXOSl9YieknHyh6P%2Fk8wXj4aOPMa4BxknTBR71SKg8rboxd1MyzRoMU3uNHxaOCfev05Bcn5A%3D%3D${encodeURIComponent(
    "schDeptCityCode"
  )}=GMP&${encodeURIComponent("schArrvCityCode")}=HND&${encodeURIComponent(
    "pageNo"
  )}=1`;

  try {
    const response = await axios.get(url + queryParams);
    console.log("Status", response.status);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Response received", response.data);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
