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
                <h1>Upload Image</h1>
              </div>
              <div className={style.OptionBox}>
                <div className={style.OptionInput}>
                  <label>Title</label>
                  <br />
                  <br />
                  <input type="text" name="title" id="title" />
                </div>
                <div className={style.OptionInput}>
                  <label>Information</label>
                  <br />
                  <br />
                  <input type="text" name="info" id="info" />
                </div>
                <div className={style.OptionInput}>
                  <label>Location</label>
                  <br />
                  <br />
                  <input type="text" name="info" id="info" />
                </div>
                <div className={style.OptionInput}>
                  <label>Youtube</label>
                  <br />
                  <br />
                  <input type="text" name="info" id="info" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddContent;
