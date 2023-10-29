const express = require("express");
const router = express.Router();
const db = require("../connection/db");

// user.use("/", (req, res, next) => {
//   next();
// });

router.post("/joinData", (req, res) => {
  const { name, nickname, bd, email, pw } = req.body;
  console.log(name, nickname, bd, email, pw);
  //   db.query(
  //     "INSERT INTO user(name,nickname,email,pw,bd,state) VALUES('" +
  //       name +
  //       "','" +
  //       nickname +
  //       "','" +
  //       email +
  //       "','" +
  //       pw +
  //       "','" +
  //       bd +
  //       "','User')",
  //     (err, result) => {
  //       if (err) console.error(err);
  //       res.send(result);
  //     }
  //   );
});

module.exports = router;
