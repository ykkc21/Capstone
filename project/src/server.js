const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const db = require("./connection/db.js");

// const cookieSession = require("cookie-session"); // 쿠키세션 잘 저장하고 잘 가져오는지 확인

//CORS 사용
// app.use(
//   cors({
//     origin: "http://localhost:3000", // 허용할 도메인
//     credentials: true,
//   })
// );
app.use(cors());

// 데이터를 json형식으로 파싱하겠다.
app.use(express.json());
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
app.use(express.urlencoded({ extended: false }));

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

app.get("/set-session", (req, res) => {
  req.session.username = "john_doe";
  res.send("Session set");
});

app.get("/get-session", (req, res) => {
  const username = req.session.username;
  res.send(`Username: ${username}`);
});

// app.post("/loginData", (req, res) => {
//   const email = req.body.email;
//   const pw = req.body.pw;

//   if (email && pw) {
//     db.query(
//       `SELECT * FROM user where email = "${email}" and pw="${pw}"`,
//       (err, row, fields) => {
//         if (err) console.error(err);
//         if (row.length === 0) {
//           res.send("No_User");
//         } else {
//           req.session.name = row[0].name;
//           req.session.idx = row[0].idx;
//           req.session.state = row[0].state;

//           console.log("===========> 저장한 세션값", req.session);
//           res.send("OK");
//         }
//       }
//     );
//   } else {
//     res.send("알맞는 계정이 없습니다.");
//   }
// });

app.get("/api", (req, res) => {
  console.log("Home Page 세션확인 \n", req.session.name);
  res.send({ message: "Hello" });
});

// 서버가 잘 동작하는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
