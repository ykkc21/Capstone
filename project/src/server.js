const express = require("express");
const cors = require("cors");
const app = express();
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

const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12341234",
  database: "capstone",
};
app.use(
  session({
    secret: "!@#asdfghjkl", // 암호화에 대한 속성
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/loginCheck", (req, res) => {
  req.session.reload();
  console.log(req.session.user);
  res.send("OK");
});

app.post("/loginData", (req, res) => {
  const email = req.body.user_id;
  const pw = req.body.user_pw;

  if (email && pw) {
    console.log("둘다 값이 잘 들어왔습니다.");
    db.query(
      `SELECT * FROM user where email = "${email}" and pw="${pw}"`,
      (err, row, fields) => {
        if (err) console.error(err);
        req.session.user = row[0];
        req.session.save(() => {
          res.redirect("http://localhost:3000");
        });
        console.log("sesstion확인:", req.session);
      }
    );
  } else {
    console.log("둘 중 하나가 값이 없다.");
  }
});

app.post("/joinData", (req, res) => {
  const { name, nickname, bd, email, pw } = req.body;
  db.query(
    "INSERT INTO user(name,nickname,email,pw,bd) VALUES('" +
      name +
      "','" +
      nickname +
      "','" +
      email +
      "','" +
      pw +
      "','" +
      bd +
      "')",
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
