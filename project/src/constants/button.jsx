import React, { Fragment } from "react";
import style from "../styles/button.module.css";
const Button = ({ name, icon, ClickClass }) => {
  return (
    <Fragment>
      <div onClick={ClickClass} className={`${style.button} ${name}`}>
        {icon}
      </div>
    </Fragment>
  );
};
export default Button;
