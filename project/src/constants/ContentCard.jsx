import { React, Fragment, useState } from "react";
import style from "../styles/ContentCard.module.css";
import TestImage from "../assets/img/sky1.jpg";
import axios from "axios";

const ContentCard = ({ listData }) => {
  const UpdateContent = (target) => {
    console.log("Update", target);
  };

  const DeleteContent = async (target) => {
    console.log(123);
    try {
      const DeleteContent = await axios.post(
        "http://localhost:9000/DeleteContent",
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
  };

  return (
    <Fragment>
      <div className={style.Card}>
        <img src={TestImage} alt="img" className={style.MainImage} />
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
              UpdateContent(listData.c_idx);
            }}
            className={`${style.UploadBtn} ${style.btn}`}
          >
            Upload
          </button>
          <button
            onClick={(e) => {
              DeleteContent(listData.c_idx);
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
