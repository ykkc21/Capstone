const express = require("express");
const router = express.Router();
const db = require("../connection/db");
const cors = require("cors");

router.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
router.use(express.json());
// 데이터를 json형식으로 파싱하겠다.

router.post("/HotelData", (req, res) => {
  const { TypeName, AreaName } = req.body;
  console.log("타입데이터:" + TypeName + "지역" + AreaName);
  if (TypeName === "" && AreaName === "") {
    console.log("두 변수값이 다 빈 값이다.");
    const sql = "SELECT * FROM hotel";
    db.query(sql, (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          msg: "NO",
          text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
        });
      }

      if (rows.length === 0) {
        res.status(500).json({
          msg: "NO",
          text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
        });
      } else {
        res.json({ msg: "OK", data: rows });
      }
    });
  } else if (TypeName === "" || AreaName === "") {
    if (TypeName) {
      const sql = `SELECT * FROM hotel where h_roomtype='${TypeName}'`;
      db.query(sql, (err, rows, fields) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            msg: "NO",
            text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
          });
        }

        if (rows.length === 0) {
          res.status(500).json({
            msg: "NO",
            text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
          });
        } else {
          res.json({ msg: "OK", data: rows });
        }
      });
    } else {
      const sql = `SELECT * FROM hotel where h_area='${AreaName}'`;
      db.query(sql, (err, rows, fields) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            msg: "NO",
            text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
          });
        }

        if (rows.length === 0) {
          res.status(500).json({
            msg: "NO",
            text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
          });
        } else {
          res.json({ msg: "OK", data: rows });
        }
      });
    }
  }
  if (TypeName && AreaName) {
    const sql = `SELECT * FROM hotel where h_roomtype='${TypeName}' and h_area='${AreaName}'`;
    db.query(sql, (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          msg: "NO",
          text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
        });
      }

      if (rows.length === 0) {
        res.status(500).json({
          msg: "NO",
          text: "데이터를 불러오는 과정에서 오류가 발생했습니다.",
        });
      } else {
        res.json({ msg: "OK", data: rows });
      }
    });
  }
});

module.exports = router;
