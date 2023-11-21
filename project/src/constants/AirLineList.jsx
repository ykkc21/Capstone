import { React, Fragment } from "react";
import style from "../styles/AirLineList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faPlane } from "@fortawesome/free-solid-svg-icons";
import QRCode from "qrcode.react";
const AirLineList = ({ airdata }) => {
  console.log(airdata);
  return (
    <Fragment>
      <div className={style.AirListBox}>
        <div className={style.backBox}>
          <h3>출발정보</h3>
          <div className={style.airportInfoBox}>
            <div className={style.firstbox}>
              <h3 className={style.firstTitle}>
                인천공항
                <br />
                (ICN)
              </h3>
              <FontAwesomeIcon className={style.AirportIcon} icon={faPlane} />
              <h3 className={style.lastTitle}>
                {airdata.airport}
                <br />({airdata.airportCode})
              </h3>
            </div>
            <div className={style.middlebox}>
              <div className={style.infobox}>
                <h4>항공사</h4>
                <p>{airdata.airline}</p>
              </div>
              <div className={style.infobox}>
                <h4>출발 예정시간</h4>
                <p>{airdata.scheduleDateTime}</p>
              </div>
              <div className={style.infobox}>
                <h4>출발 변경시간</h4>
                <p>{airdata.estimatedDateTime}</p>
              </div>
              <div className={style.infobox}>
                <h4>편명</h4>
                <p>{airdata.flightId}</p>
              </div>
            </div>
            <div className={style.lastbox}>
              <div className={style.subbox}>
                <h4>탑승구</h4>
                <p>{airdata.gatenumber}</p>
              </div>
              <div className={style.subbox}>
                <h4>터미널</h4>
                <p>{airdata.terminalId}</p>
              </div>
            </div>
          </div>
          <div className={style.BarcodeBox}>
            <QRCode className={style.barcode} value={"test"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AirLineList;
