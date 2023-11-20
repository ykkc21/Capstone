import { React, Fragment, useState } from "react";
import style from "../styles/AirLineView.module.css";
import BackImage from "../assets/img/AirLine1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AirLineView = ({ ChangeValue }) => {
  const [aircode, setAirCode] = useState("??");
  const [Lan, setLan] = useState("문서를 선택해 주세요");
  const [airportText, setAirportText] = useState("선택해주세요");
  const [LanText, setLanText] = useState("문서양식을 선택해주세요");

  const ClickEvent = () => {
    ChangeValue(aircode, Lan);
  };

  return (
    <Fragment>
      <div className={style.AirLineViewBox}>
        <img src={BackImage} alt="viewimg" className={style.viewImage} />
        <div className={style.container}>
          <div className={style.ItemBox}>
            <h1>
              Information on the flight status of Incheon Airport (departure)
            </h1>
            <div className={style.InputBox}>
              <div className={style.SelectBox}>
                <select
                  onChange={(e) => {
                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    setAirCode(selectedOption.value);
                    setAirportText(selectedOption.text);
                  }}
                  className={style.AirportCode}
                  id="AirportCode"
                >
                  <option value="Null">항공지역</option>
                  <option value="PEK">베이징</option>
                  <option value="PVG">상하이</option>
                  <option value="CHI">시카고</option>
                  <option value="TOJ">스페인 마드리드</option>
                  <option value="NKM">나고야</option>
                  <option value="MMM">호주</option>
                </select>
                <select
                  onChange={(e) => {
                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    setLan(selectedOption.value);
                    setLanText(selectedOption.text);
                  }}
                  className={style.Language}
                  id="Language"
                >
                  <option value="Null">문서양식</option>
                  <option value="K">한국어</option>
                  <option value="E">영어</option>
                  <option value="C">중국어</option>
                  <option value="J">일본어</option>
                </select>
              </div>

              <div className={style.MenuTextBox}>
                <div className={style.FromBox}>
                  <p>From</p>
                  <h3>인천공항(ICN)</h3>
                </div>
                <FontAwesomeIcon
                  className={style.IconArrow}
                  icon={faArrowRightArrowLeft}
                />
                <div className={style.ToBox}>
                  <p>To</p>
                  <h3>
                    {airportText}({aircode})
                  </h3>
                </div>
                <div className={style.Document}>
                  <p>Document</p>
                  <h3>{LanText}</h3>
                </div>
              </div>
              <button onClick={ClickEvent} className={style.SearchBtn}>
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
