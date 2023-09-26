const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);

const db = require("./connection/db.js");

//CORS 사용
app.use(cors());
// 데이터를 json형식으로 파싱하겠다.
app.use(express.json());
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
app.use(express.urlencoded({ extended: false }));

app.post("/loginData", (req, res) => {
  const email = req.body.email;
  const pw = req.body.pw;

  if (email && pw) {
    console.log("둘다 값이 잘 들어왔습니다.");
    db.query(
      `SELECT * FROM user where email = "${email}" and pw="${pw}"`,
      (err, row, fields) => {
        if (err) console.error(err);
        console.log(row);
      }
    );
  } else {
    console.log("둘 중 하나가 값이 없다.");
  }
  // db.query(
  //   "SELECT * from user where email='" + email + "' and pw='" + pw + "'",
  //   (err, res, fields) => {
  //     if (err) console.error(err);
  //     console.log(res);
  //   }
  // );

  // db.end();
});

app.post("/joinData", (req, res) => {
  console.log(req.body);
  const { name, nickname, bd, email, pw } = req.body;
  console.log(name, nickname, bd, email, pw);
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
