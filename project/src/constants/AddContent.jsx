import { React, Fragment } from "react";
import style from "../styles/AddContent.module.css";
const AddContent = () => {
  return (
    <Fragment>
      <div className={style.wrap}>
        <div className={style.container}>
          <div className={style.Main}>
            <div className={style.AddContentBox}>
              <div className={style.titlebox}>
                <h1>Upload Content</h1>
              </div>
              <div className={style.ImageBox}>
                <div className={style.UploadImage}></div>
              </div>
              <div className={style.OptionBox}></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddContent;
