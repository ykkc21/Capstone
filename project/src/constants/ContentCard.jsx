import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/ContentCard.module.css";
import TestImage from "../assets/img/sky1.jpg";

const ContentCard = ({ listData }) => {
  const UpdateContent = (target) => {
    console.log("Update", target);
  };
  const DeleteContent = (target) => {
    console.log("Delete", target);
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
            onClick={UpdateContent(listData.c_idx)}
            className={`${style.UploadBtn} ${style.btn}`}
          >
            Upload
          </button>
          <button
            onClick={DeleteContent(listData.c_idx)}
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
