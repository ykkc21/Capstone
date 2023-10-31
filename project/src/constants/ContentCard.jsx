import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/ContentCard.module.css";
import axios from "axios";

const ContentCard = ({ ShowUpdateUI, listData }) => {
  const [ImageSrc, setImageSrc] = useState("");

  useEffect(() => {
    setImageSrc(listData.c_lens);
  }, [listData.c_lens]);

  const DeleteContent = async (target) => {
    const DeleteQuestion = window.confirm("게시물을 삭제하시겠습니까?");
    if (DeleteQuestion) {
      console.log("삭제해");
      try {
        const DeleteContent = await axios.post(
          "http://localhost:9000/Content/DeleteContent",
          {
            ContentId: target,
          }
        );
        if (DeleteContent.data.msg === "Delete_Content") {
          alert("컨텐츠 삭제 했습니다.");
          window.location.reload();
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Fragment>
      <div className={style.Card}>
        {ImageSrc ? (
          <img src={ImageSrc} alt="img" className={style.MainImage} />
        ) : (
          <p>No image available</p>
        )}
        <div className={style.TitleBox}>
          <h3 className={style.Title}>{listData.c_title}</h3>
          <h3 className={style.ClassInfo}>{listData.c_classinfo}</h3>
        </div>
        <div className={style.InfoBox}>
          <h3 className={style.Info}>{listData.c_information}</h3>
        </div>
        <div className={style.BtnBox}>
          <button
            onClick={(e) => {
              ShowUpdateUI(listData.c_idx);
            }}
            className={`${style.UploadBtn} ${style.btn}`}
          >
            Update
          </button>
          <button
            onClick={(e) => {
              ShowUpdateUI(listData.c_idx);
            }}
            className={`${style.DeleteBtn} ${style.btn}`}
          >
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentCard;
