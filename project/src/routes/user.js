const express = require("express");
const router = express.Router();
const session = require("express-session");
const fileStore = require("session-file-store")(session);
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

// 세션 정의
router.use(
  session({
    secret: "secret", // 암호화에 대한 속성
    resave: false,
    saveUninitialized: false,
    store: new fileStore(),
    cookie: {
      secure: false, // HTTPS를 사용하지 않는 경우 false로 설정
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//get 유저정보
router.get("/Users", (req, res) => {
  db.query("SELECT * FROM user", (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.json({ msg: "NoData" });
    } else {
      res.json({ msg: "OK", users: rows });
    }
  });
});

// 회원가입 처리
router.post("/joinData", (req, res) => {
  const { name, nickname, bd, email, pw } = req.body;
  console.log(name, nickname, bd, email, pw);
  db.query(
    "INSERT INTO user(name,nickname,email,pw,bd,state) VALUES('" +
      name +
      "','" +
      nickname +
      "','" +
      email +
      "','" +
      pw +
      "','" +
      bd +
      "','User')",
    (err, result) => {
      if (err) console.error(err);
      res.json({ msg: "OK" });
    }
  );
});

// 로그인 서비스
router.post("/loginData", (req, res) => {
  const email = req.body.email;
  const pw = req.body.pw;

  if (email && pw) {
    db.query(
      `SELECT * FROM user where email = "${email}" and pw="${pw}"`,
      (err, row, fields) => {
        if (err) {
          console.error(err);
          res.send("Error");
          return;
        }

        if (row.length === 0) {
          res.send("No_User");
        } else {
          req.session.save((err) => {
            const data = {
              idx: row[0].idx,
              name: row[0].name,
              state: row[0].state,
            };
            req.session.user_data = data;
            console.log("===========> 저장한 세션값", req.session.user_data);
            res.send("OK");
          });
        }
      }
    );
  } else {
    res.send("알맞는 계정이 없습니다.");
  }
});

// 로그인 상시 체크
router.get("/loginCheck", (req, res) => {
  console.log("로그인 상시체크", req.session.user_data);
  if (req.session.user_data) {
    // 세션에 user_data가 있을 때
    const user = req.session.user_data;
    res.json({ msg: "OK", user });
  } else {
    // 세션에 user_data가 없을 때
    res.json({ msg: "NO" });
  }
});

//로그아웃 (세선 삭제)
router.get("/logout", (req, res) => {
  if (req.session) {
    // 세션을 삭제합니다.
    req.session.destroy((err) => {
      if (err) {
        console.error("세션 삭제 중 오류 발생:", err);
        res.status(500).send("세션 삭제 오류");
      } else {
        console.log("로그아웃 성공");
        res.send("logout");
      }
    });
  } else {
    console.error("세션을 찾을 수 없음");
    res.status(400).send("세션 없음");
  }
});

router.post("/DeleteUser", (req, res) => {
  const { userid } = req.body;
  console.log(userid);
  const sql = `DELETE FROM user WHERE idx=${userid}`;
  console.log(sql);
  db.query(sql, (err, result, fields) => {
    if (err) {
      console.error(`삭제 중 오류발생: ${err}`);
    }
    if (result) {
      res.json({ msg: "Delete_User" });
    }
  });
});

router.post("/MyData", (req, res) => {
  const id = req.body.userId;
  const sql = `SELECT * FROM user WHERE idx=${id}`;
  console.log(id);
  if (id === undefined) {
    res.json({ msg: "NO", text: "회원 아이디를 찾을 수 없습니다." });
  } else {
    db.query(sql, (err, rows, fields) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ msg: "NO", text: "데이터를 찾는데 오류가 발생했습니다." });
      }

      if (rows.length === 0) {
        console.error(err);
        res
          .status(500)
          .json({ msg: "NO", text: "데이터를 찾는데 오류가 발생했습니다." });
      } else {
        res.json({ msg: "OK", user: rows[0] });
      }
    });
  }
});

router.post("/UpdateUser", (req, res) => {
  const { idx, userNickName, userEmail, userPassword } = req.body;
  const sql = `UPDATE user SET nickname=?, email=?, pw=? WHERE idx=?`;
  db.query(
    sql,
    [userNickName, userEmail, userPassword, idx],
    (err, results) => {
      if (err) {
        res.status(500).json({
          msg: "NO",
          text: "데이터를 처리하는데 오류가 발생하였습니다.",
        });
      }
      res.json({ msg: "OK" });
    }
  );
});

module.exports = router;
