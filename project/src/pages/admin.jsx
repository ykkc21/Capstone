import { React, Fragment } from "react";
import Header from "../components/header";
import style from "../styles/Admin.module.css";
const admin = () => {
  return (
    <Fragment>
      <Header />
      <div className={style.AdminContainer}>
        <div className={style.CountBox}>
          <h1>Content</h1>
          <div className={style.s_countbox}>
            <div className={style.s_box}></div>
            <div className={style.s_box}></div>
            <div className={style.s_box}></div>
            <div className={style.s_box}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default admin;
