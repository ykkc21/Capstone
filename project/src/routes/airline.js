const express = require("express");
const router = express.Router();
const request = require("request");

router.use(express.json());
// 데이터를 json형식으로 파싱하겠다.

router.get("/", (req, res) => {
  let url =
    "http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList";
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=ni1KPPPSl7rn5wXOSl9YieknHyh6P%2Fk8wXj4aOPMa4BxknTBR71SKg8rboxd1MyzRoMU3uNHxaOCfev05Bcn5A%3D%3D"; /* Service Key*/

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      console.log("Status", response.statusCode);
      console.log("Headers", JSON.stringify(response.headers));
      console.log("Reponse received", body);
    }
  );
});

module.exports = router;
