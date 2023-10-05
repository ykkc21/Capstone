const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const db = require("./connection/db.js");
const { json } = require("body-parser");

// const cookieSession = require("cookie-session"); // 쿠키세션 잘 저장하고 잘 가져오는지 확인

//CORS 사용
// app.use(
//   cors({
//     origin: "http://localhost:3000", // 허용할 도메인
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

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

app.post("/loginData", (req, res) => {
  const email = req.body.email;
  const pw = req.body.pw;
  console.log(email, pw);

  if (email && pw) {
    db.query(
      `SELECT * FROM user where email = "${email}" and pw="${pw}"`,
      (err, row, fields) => {
        if (err) console.error(err);
        if (row.length === 0) {
          res.send("No_User");
        } else {
          req.session.save(() => {
            const data = {
              idx: row[0].idx,
              name: row[0].name,
              state: row[0].state,
            };

            req.session.user_data = data;
            console.log("===========> 저장한 세션값", req.session);
            res.send("OK");
          });
        }
      }
    );
  } else {
    res.send("알맞는 계정이 없습니다.");
  }
});

app.get("/loginCheck", (req, res) => {
  const user = req.session.user_data;
  if (user) {
    res.json({ msg: "OK", user });
  } else {
    res.json({ msg: "NO" });
  }
});

app.get("/logout", (req, res) => {
  res.send("logout");
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

//세션 테스트 용
// app.get("/set-session", (req, res) => {
// req.session.save(() => {
//   const data = [{ name: "text", address: "zlzlzlzlzl" }];
//   req.session.username = data;
//   console.log(req.session);
//   res.send("Session set");
// });
// req.session.destroy(() => {
//   console.log("세션 파기");
// });
// });

// app.get("/get-session", (req, res) => {
//   const username = req.session.username;
//   res.send(`Username: ${JSON.stringify(username)}`);
// });

// 서버가 잘 동작하는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
