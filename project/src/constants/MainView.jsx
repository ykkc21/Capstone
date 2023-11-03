import { React, Fragment, useState } from "react";
import style from "../styles/MainView.module.css";

const MainView = () => {
  const [viewtext, setViewText] = useState("a happy trip");

  const ChangText = (target) => {
    const attr = target.getAttribute("for");
    if (attr === "btn1") {
      setViewText("a trip to Australia");
    } else if (attr === "btn2") {
      setViewText("a trip to London");
    } else if (attr === "btn3") {
      setViewText("a trip to Japan");
    } else if (attr === "btn4") {
      setViewText("a trip to Paris");
    } else if (attr === "btn5") {
      setViewText("a trip to Thailand");
    }
  };
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
        <div className={style.BackColor}>
          <div className={style.container}>
            <div className={style.SlideBox}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <h1>
                  Let's prepare for
                  <br /> - {viewtext}
                </h1>
                <div className={style.SlideBtnBox}>
                  <label
                    onClick={(e) => {
                      ChangText(e.target);
                    }}
                    htmlFor="btn1"
                  ></label>
                  <label
                    onClick={(e) => {
                      ChangText(e.target);
                    }}
                    htmlFor="btn2"
                  ></label>
                  <label
                    onClick={(e) => {
                      ChangText(e.target);
                    }}
                    htmlFor="btn3"
                  ></label>
                  <label
                    onClick={(e) => {
                      ChangText(e.target);
                    }}
                    htmlFor="btn4"
                  ></label>
                  <label
                    onClick={(e) => {
                      ChangText(e.target);
                    }}
                    htmlFor="btn5"
                  ></label>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainView;
