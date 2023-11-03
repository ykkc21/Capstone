import { React, Fragment, useState, useRef, useEffect } from "react";
import style from "../styles/MainView.module.css";
import TypeIt from "typeit-react";

const MainView = () => {
  const [viewtext, setViewText] = useState("a happy trip");
  const [typeItKey, setTypeItKey] = useState(0); // key 값을 변경하여 TypeIt을 다시 렌더링

  const handleChangeText = (newText) => {
    setViewText(newText);
    setTypeItKey(typeItKey + 1); // key 값을 변경하여 TypeIt을 다시 렌더링
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
                <br /> - <TypeIt key={typeItKey}>{viewtext}</TypeIt>
              </h1>
              <div className={style.SlideBtnBox}>
                <label
                  onClick={() => handleChangeText("a trip to Australia")}
                  htmlFor="btn1"
                ></label>
                <label
                  onClick={() => handleChangeText("a trip to London")}
                  htmlFor="btn2"
                ></label>
                <label
                  onClick={() => handleChangeText("a trip to Japan")}
                  htmlFor="btn3"
                ></label>
                <label
                  onClick={() => handleChangeText("a trip to Paris")}
                  htmlFor="btn4"
                ></label>
                <label
                  onClick={() => handleChangeText("a trip to Thailand")}
                  htmlFor="btn5"
                ></label>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainView;
