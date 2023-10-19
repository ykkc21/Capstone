import React, { Fragment } from "react";
import style from "../styles/button.module.css";
const Button = ({ name, icon }) => {
  console.log(icon);
  return (
    <Fragment>
      <div className={`${style.button} ${name}`}>
        {icon}
        {name}
      </div>
    </Fragment>
  );
};
export default Button;
