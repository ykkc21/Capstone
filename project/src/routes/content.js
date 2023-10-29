const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get ContentData");
});

module.exports = router;
