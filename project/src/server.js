const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const db = require("./connection/db.js");

//CORS 사용
app.use(cors());
// 데이터를 json형식으로 파싱하겠다.
app.use(express.json());
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    httpOnly: true,
    secret: "secret key", // 암호화에 대한 속성
    resave: false,
    saveUninitialized: true,
    store: new fileStore(),
  })
);

app.post("/loginData", (req, res) => {
  const email = req.body.email;
  const pw = req.body.pw;

  if (email && pw) {
    db.query(
      `SELECT * FROM user where email = "${email}" and pw="${pw}"`,
      (err, row, fields) => {
        if (err) {
          console.error(err);
        }

        if (row.length === 0) {
          res.send("No_User");
        } else {
          req.session.user = row[0];
          req.session.save();
          res.send("OK");
        }
      }
    );
  } else {
    res.send("알맞는 계정이 없습니다.");
  }
});

app.get("/loginCheck", (req, res) => {
  const user = req.session.user;
  res.send(`저장한 세션값 ${user}`);
});

app.post("/joinData", (req, res) => {
  const { name, nickname, bd, email, pw } = req.body;
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
      res.send(result);
    }
  );
  db.end();
});

// 서버가 잘 동작하는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
