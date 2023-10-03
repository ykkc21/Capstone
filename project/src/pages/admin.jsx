import { React, Fragment } from "react";
import Header from "../components/header";
import style from "../styles/Admin.module.css";
import Button from "../constants/button";
const admin = () => {
  const items = ["User", "Content", "Bulletin"];
  return (
    <Fragment>
      <Header />
      <div className={style.AdminContainer}>
        <h1>Home</h1>
        <div className={style.ControllBox}>
          <div className={style.btnbox}>
            {items.map((item, index) => {
              return <Button key={index} name={item} />;
            })}
          </div>

          <div className={style.MainListBox}>
            <div className={style.Userlist}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default admin;
