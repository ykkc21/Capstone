const express = require("express");
const router = express.Router();
const request = require("request");
const axios = require("axios");

router.use(express.json());
// 데이터를 json형식으로 파싱하겠다.

router.get("/", async (req, res) => {});

module.exports = router;
