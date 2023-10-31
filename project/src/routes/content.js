const express = require("express");
const router = express.Router();
const db = require("../connection/db");
const cors = require("cors");
const multer = require("multer");

router.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
router.use(express.json());
// 데이터를 json형식으로 파싱하겠다.
router.use(express.json({ limit: "50mb" }));
//파싱하는 옵션지정 (false는 기본으로 내장된 querystring으로 받아온다.)
router.use(express.urlencoded({ extended: false, limit: "50mb" }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 파일이 저장될 폴더 경로 설정

    cb(
      null,
      "/Users/gan-yeonghun/Documents/GitHub/Capstone/project/public/upload_Image"
    );
  },

  filename: function (req, file, cb) {
    // 저장될 파일명 설정
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("get ContentData");
});

// 콘텐츠 정보가져오기
router.get("/Contents", (req, res) => {
  db.query("SELECT * FROM content", (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.json({ msg: "NoData" });
    } else {
      res.json({ msg: "OK", contents: rows });
    }
  });
});

// 콘텐츠 삭제하기
router.post("/DeleteContent", (req, res) => {
  const { ContentId } = req.body;
  console.log(ContentId);
  const sql = `DELETE FROM content WHERE c_idx=${ContentId}`;
  db.query(sql, (err, result, fields) => {
    if (err) {
      console.error(`삭제 중 오류발생: ${err}`);
    }
    if (result) {
      res.json({ msg: "Delete_Content" });
    }
  });
});

// 관리자 콘텐츠 생성
router.post("/AddContent", upload.single("file"), (req, res) => {
  const { classinfo, title, information, location, array, formData } = req.body;
  const imageFile = req.file;
  const lens = `/upload_Image/${imageFile.originalname}`;
  const YouTubeId = JSON.stringify(array);
  console.log(lens);
  // console.log(imageFile.destination, imageFile.originalname);

  const sql = `INSERT INTO content(c_classinfo, c_title,c_information,c_location,c_youtubeId,c_lens)
  VALUES('${classinfo}','${title}','${information}','${location}','${YouTubeId}','${lens}')`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.json({ msg: "No", text: "DB저장 실패" });
    }
    res.json({ msg: "OK", text: "DB저장 완료" });
  });
});

module.exports = router;
