import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/ContentCard.module.css";
import TestImage from "../assets/img/sky1.jpg";

const ContentCard = ({ listData }) => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    //lensData에 DB의 Uint8Array 데이터가 포함되어 있다고 가정합니다
    const lensData = listData.c_lens.data;
    //Uint8Array 데이터로 Blob 생성
    const blob = new Blob([lensData], { type: "image/jpeg" });
    //Blob을 URL로 변환
    const BlobUrl = URL.createObjectURL(blob);

    console.log(BlobUrl);
    //영상 소스 설정
    setImageSrc(BlobUrl);

    //구성 요소가 마운트 해제되면 URL 정리
    return () => {
      URL.revokeObjectURL(BlobUrl);
    };
  }, []);

  return (
    <Fragment>
      <div className={style.Card}>
        {imageSrc && (
          <img src={TestImage} alt="img" className={style.MainImage} />
        )}
        <h3>{listData.c_title}</h3>
        <h3>{listData.c_classinfo}</h3>
        <h3>{listData.c_information}</h3>
        <div className={style.BtnBox}>
          <button className={`${style.UploadBtn} ${style.btn}`}>Upload</button>
          <button className={`${style.DeleteBtn} ${style.btn}`}>Delete</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentCard;
