import { React, Fragment } from "react";
import Header from "../components/header";
import style from "../styles/Admin.module.css";
const admin = () => {
  return (
    <Fragment>
      <Header />
      <div className={style.AdminContainer}>
        <h1>Home</h1>
        <div className={style.ControllBox}></div>
      </div>
    </Fragment>
  );
};

export default admin;
