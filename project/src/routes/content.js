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
  // const YouTubeId = JSON.stringify(array);

  // console.log(imageFile.destination, imageFile.originalname);

  const sql = `INSERT INTO content(c_classinfo, c_title,c_information,c_location,c_youtubeId,c_lens)
  VALUES('${classinfo}','${title}','${information}','${location}','${array}','${lens}')`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.json({ msg: "No" });
    }
    res.json({ msg: "OK" });
  });
});

router.get("/SelectData", (req, res) => {
  const id = req.query.ContentId;
  const sql = `SELECT * FROM content WHERE c_idx=${id}`;

  if (id) {
    db.query(sql, (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("정보를 검색하는데 오류가 발생했습니다.");
      }
      res.json({ msg: "OK", content: rows[0] });
    });
  }
});

router.post("/UpdateContent", upload.single("file"), (req, res) => {
  const {
    contentId,
    classinfo,
    title,
    information,
    location,
    array,
    formData,
  } = req.body;
  const imageFile = req.file;
  const lens = `/upload_Image/${imageFile.originalname}`;
  const YouTubeId = JSON.stringify(array);
  console.log(lens);

  const sql = `UPDATE content SET c_classinfo=?, c_title=?, c_information=?, c_location=?, c_youtubeId=?, c_lens=? WHERE c_idx=?`;

  db.query(
    sql,
    [classinfo, title, information, location, YouTubeId, lens, contentId],
    (err, results) => {
      if (err) {
        console.error(err);
        res.json({ msg: "No" });
      }
      res.json({ msg: "OK" });
    }
  );
});

router.post("/ListDetail", (req, res) => {
  const id = req.body.id.id;
  const sql = `SELECT * FROM content WHERE c_idx=${id}`;
  console.log(id);
  // console.log(sql);
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.error(err);
      res
        .status(505)
        .json({ mes: "NO", text: "데이터를 가져오는데 오류가 발생했습니다." });
    }
    if (rows.length === 0) {
      res.json({ mes: "NO", text: "일치하는 데이터가 없습니다." });
    } else {
      res.json({ mes: "OK", content: rows[0] });
    }
  });
});
module.exports = router;
