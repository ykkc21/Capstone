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
  const data = req.body;
  console.log(data);
  console.log(process.env.APIKEY);
});

module.exports = router;
