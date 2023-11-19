import { React, Fragment } from "react";
import style from "../styles/AirLineView.module.css";

const AirLineView = ({}) => {
  return (
    <Fragment>
      <div className={style.AirLineViewBox}>
        <div className={style.container}>
          <div className={style.ItemBox}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default AirLineView;
