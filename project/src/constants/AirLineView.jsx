import { React, Fragment, useState } from "react";
import style from "../styles/AirLineView.module.css";

const AirLineView = ({ ChangeValue }) => {
  const [aircode, setAirCode] = useState("");
  const [Lan, setLan] = useState("");

  const ClickEvent = () => {
    ChangeValue(aircode, Lan);
  };
  return (
    <Fragment>
      <div className={style.AirLineViewBox}>
        <div className={style.container}>
          <div className={style.ItemBox}>
            <div className={style.InputBox}>
              <h1>인천공항 여객기 운항 현황 정보(출발)</h1>
              <select
                onChange={(e) => setAirCode(e.target.value)}
                className={style.AirportCode}
                id="AirportCode"
              >
                <option value="Null">선택해주세요</option>
                <option value="PEK">베이징</option>
                <option value="PVG">상하이</option>
                <option value="CHI">시카고</option>
                <option value="TOJ">스페인 마드리드</option>
                <option value="NKM">나고야</option>
                <option value="MMM">호주</option>
              </select>
              <select
                onChange={(e) => setLan(e.target.value)}
                className={style.Language}
                id="Language"
              >
                <option value="Null">선택해주세요</option>
                <option value="K">한국어</option>
                <option value="E">영어</option>
                <option value="C">중국어</option>
                <option value="J">일본어</option>
              </select>

              <button
                onClick={() => {
                  ClickEvent();
                }}
                className={style.SearchBtn}
              >
                검색하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AirLineView;
