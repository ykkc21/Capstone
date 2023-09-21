import { React, Fragment } from "react";
import style from "../styles/SubAbout.module.css";

const SubAbout = () => {
  return (
    <Fragment>
      <div className={style.SubAbout}>
        <div className={style.mainbox}>
          <h1></h1>
          <div className={`${style.black}`}></div>
        </div>
        <div className={style.mainbox}>
          <div className={`${style.white}`}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubAbout;
