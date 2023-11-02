import { React, Fragment } from "react";
import style from "../styles/MainView.module.css";

const MainView = () => {
  return (
    <Fragment>
      <input
        type="radio"
        className={`${style.input} ${style.btn1}`}
        name="show"
        id="btn1"
      />
      <input
        className={`${style.input} ${style.btn2}`}
        type="radio"
        name="show"
        id="btn2"
      />
      <input
        className={`${style.input} ${style.btn3}`}
        type="radio"
        name="show"
        id="btn3"
      />
      <input
        className={`${style.input} ${style.btn4}`}
        type="radio"
        name="show"
        id="btn4"
      />
      <input
        className={`${style.input} ${style.btn5}`}
        type="radio"
        name="show"
        id="btn5"
      />
      <div className={style.MainViewBox}>
        <div className={style.container}>
          <div className={style.SlideBox}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <div className={style.SlideBtnBox}>
                <label htmlFor="btn1"></label>
                <label htmlFor="btn2"></label>
                <label htmlFor="btn3"></label>
                <label htmlFor="btn4"></label>
                <label htmlFor="btn5"></label>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainView;
