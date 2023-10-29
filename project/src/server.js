const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const db = require("./connection/db.js"); // 데이터베이스

const user = require("./routes/user.js");
const content = require("./routes/content.js");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/User", user);
app.use("/Admin", content);

// 데이터를 json형식으로 파싱하겠다.
app.use(express.json({ limit: "50mb" }));
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
// 세션 정의
app.use(
  session({
    httpOnly: true,
    secret: "ASDFGHJKL!@#", // 암호화에 대한 속성
    resave: false,
    saveUninitialized: true,
    store: new fileStore(),
    cookie: {
      secure: false, // HTTPS를 사용하지 않는 경우 false로 설정
    },
  })
);

// 서버가 잘 동작하는지 확인
server.listen(9000, () => {
  console.log("server is running on 9000");
});
