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

//API로 요청한 경우 hello 메세지를 보내는 콜랙함수
app.get("/api", (req, res) => {
  res.json({ message: "hello" });
});

app.post("/loginData", (req, res) => {
  console.log(req.body);
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
});

// 서버가 잘 동작하는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
