const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const db = require("./connection/db.js"); // 데이터베이스
const axios = require("axios");
const fileSystem = require("fs"); // 파일 시스템

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// 데이터를 json형식으로 파싱하겠다.
app.use(express.json({ limit: "50mb" }));
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

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

// 회원정보 관련 서비스
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
  req.session.destroy(() => {
    res.send("logout");
  });
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

// DB에 저장된 youtubeId 가져오기
app.get("/youtubeVideo", (req, res) => {
  const videoID = "YFfQ7uubllc"; // 원하는 비디오 ID로 변경하세요
  const apiKey = "AIzaSyA9g3a5wSf2ql7IAYqiTZ6wjFXi34S9LSo"; // 본인의 YouTube Data API 키로 변경하세요

  axios
    .get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apiKey}&part=snippet,statistics`
    )
    .then((response) => {
      const videoInfo = response.data.items[0];
      console.log(videoInfo);
      console.log("Video Title:", videoInfo.snippet.title);
      console.log("Author:", videoInfo.snippet.channelTitle);
      console.log("View Count:", videoInfo.statistics.viewCount);
      console.log("Published Date:", videoInfo.snippet.publishedAt);
    })
    .catch((error) => {
      console.error("Error fetching YouTube data:", error);
      res.status(500).send("Failed to fetch YouTube data.");
    });
});

// 관리자 콘텐츠 생성
app.post("/AddContent", (req, res) => {
  const { title, information, location, array, lens, lensname } = req.body;
  const lensData = JSON.stringify(lens);
  const YouTubeId = JSON.stringify(array);
  const sql = `INSERT INTO content(c_title,c_information,c_location,c_youtubeId,c_lens, c_lensname)
  VALUES('${title}','${information}','${location}','${YouTubeId}','${lensData}','${lensname}')`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.json({ msg: "No", text: "DB저장 실패" });
    }
    res.json({ msg: "OK", text: "DB저장 완료" });
  });

  db.end((err) => {
    if (err) {
      console.error("DB를 종료하는데 오류가 발생했습니다.", err);
    }
  });
});

//get 유저정보
app.get("/users", (req, res) => {
  db.query("SELECT * FROM user", (err, row, fields) => {
    if (err) {
      console.error(err);
      res.json({ msg: "NoData" });
    }
    res.json({ msg: "OK", users: row });
  });
  db.end((err) => {
    if (err) {
      console.error("DB를 종료하는데 에러가 발생했습니다.", err);
    }
  });
});

// get 콘텐츠정보
app.get("/contents", (req, res) => {
  res.send("get 콘텐츠정보 ");
});

// 서버가 잘 동작하는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
