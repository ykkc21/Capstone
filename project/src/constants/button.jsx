import React, { Fragment } from "react";
import style from "../styles/button.module.css";
const Button = (props) => {
  return (
    <Fragment>
      <div className={`${style.button} ${props.name}`} onClick={props.ClickFun}>
        {(document.write = props.name)}
      </div>
    </Fragment>
  );
};
export default Button;
