import React, { Fragment } from "react";
import style from "../styles/button.module.css";
const Button = (props) => {
  const Check = (e) => {
    console.log();
  };
  return (
    <Fragment>
      <div className={`${style.button} ${props.name}`} onClick={Check}>
        {(document.write = props.name)}
      </div>
    </Fragment>
  );
};
export default Button;
