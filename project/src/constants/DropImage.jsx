import { React, Fragment } from "react";
import style from "../styles/DropImage.module.css";

const DropImage = ({ DropEvent, DrageMove }) => {
  return (
    <Fragment>
      <div
        onDragOver={DrageMove}
        onDrop={DropEvent}
        className={style.ImageBox}
        id="ImageBox"
      >
        <h1>Upload Image</h1>
        <div className={style.back}></div>
      </div>
    </Fragment>
  );
};

export default DropImage;
