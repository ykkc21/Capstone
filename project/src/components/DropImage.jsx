import { React, Fragment } from "react";
import style from "../styles/DropImage.module.css";

const DropImage = ({ DropEvent, DrageMove, background }) => {
  const ChangeImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/img/" + background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "150% 100%",
  };

  // console.log(ChangeImage);

  return (
    <Fragment>
      <div
        onDragOver={DrageMove}
        onDrop={DropEvent}
        className={style.ImageBox}
        style={ChangeImage}
        id="ImageBox"
      >
        <h1>Upload Image</h1>
        <div className={style.back}></div>
      </div>
    </Fragment>
  );
};

export default DropImage;
