const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const session = require("express-session");
const fileStore = require("session-file-store")(session);

const user = require("./routes/user.js");
const content = require("./routes/content.js");

app.use("/User", user);
app.use("/Content", content);

// 데이터를 json형식으로 파싱하겠다.
app.use(express.json({ limit: "50mb" }));
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use(
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

// 서버가 잘 동작하는지 확인
server.listen(9000, () => {
  console.log("server is running on 9000");
});
