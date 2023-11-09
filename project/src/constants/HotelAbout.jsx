import { React, Fragment } from "react";
import style from "../styles/HotelAbout.module.css";
const HotelAbout = () => {
  return (
    <Fragment>
      <input
        className={`${style.input} ${style.img1}`}
        type="radio"
        name="showImage"
        id="img1"
      />
      <input
        className={`${style.input} ${style.img2}`}
        type="radio"
        name="showImage"
        id="img2"
      />
      <input
        className={`${style.input} ${style.img3}`}
        type="radio"
        name="showImage"
        id="img3"
      />
      <input
        className={`${style.input} ${style.img4}`}
        type="radio"
        name="showImage"
        id="img4"
      />
      <input
        className={`${style.input} ${style.img5}`}
        type="radio"
        name="showImage"
        id="img5"
      />
      <div className={style.HotelAboutBox}>
        <div className={style.container}>
          <div className={style.HotelAboutTitle}>
            <h1>Hotel About</h1>
            <p>
              편안하고 안전한 여행을 위해, 다양한 숙소 옵션을 한눈에 비교하고
              예약하세요. 저희 플랫폼은 여러 파트너와 연동하여 최고의 가격과
              특가 혜택을 제공합니다. 편리한 검색 기능과 정확한 정보로 여행
              계획을 손쉽게 세우세요. 높은 만족도를 자랑하는 숙박시설과 함께,
              당신만의 특별한 순간을 만들어보세요.
            </p>
          </div>
          <div className={style.HotelAboutImageBox}>
            <div className={style.menuImage}>
              <ul>
                <li>
                  <label htmlFor="img1"></label>
                </li>
                <li>
                  <label htmlFor="img2"></label>
                </li>
                <li>
                  <label htmlFor="img3"></label>
                </li>
                <li>
                  <label htmlFor="img4"></label>
                </li>
                <li>
                  <label htmlFor="img5"></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelAbout;
