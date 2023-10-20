import { React, Fragment } from "react";
import style from "../styles/CheckBox.module.css";

const CheckBox = () => {
  return (
    <Fragment>
      <div className={style.CheckBox}>
        <label htmlFor="user">U:</label>
        <input type="radio" name="user" id="c_user" />
        <label htmlFor="content">C:</label>
        <input type="radio" name="content" id="c_user" />
        <label htmlFor="bulletin">B:</label>
        <input type="radio" name="bulletin" id="c_user" />
      </div>
    </Fragment>
  );
};

export default CheckBox;
