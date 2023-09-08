const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);

//CORS 사용
app.cors();

//API로 요청한 경우 hello 메세지를 보내는 콜랙함수
app.get("/api", (req, res) => {
  res.send({ message: "hello" });
});

// 서버가 잘 동작하는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
