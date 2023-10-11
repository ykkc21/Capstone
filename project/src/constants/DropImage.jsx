import { React, Fragment } from "react";
import style from "../styles/DropImage.module.css";

const DropImage = () => {
  return (
    <Fragment>
      <div
        // onDragOver={DragOverHandler}
        // onDrop={DropHandler}
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
