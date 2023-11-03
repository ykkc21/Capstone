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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              vitae earum repellat. Porro quia eos ad reiciendis, quam dolorum
              nihil nobis voluptate sed. Quasi totam quo porro ea animi sed!
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
