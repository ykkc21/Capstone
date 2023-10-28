import React, { Fragment } from "react";
import style from "../styles/button.module.css";
const Button = ({ name, icon, ClickClass }) => {
  return (
    <Fragment>
      <div onClick={ClickClass} className={`${style.button} ${name}`}>
        {icon}
        <p>{name}</p>
      </div>
    </Fragment>
  );
};
export default Button;
