import { React, Fragment, useState } from "react";
import style from "../styles/AddContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const AddContent = () => {
  const [imgname, setImageName] = useState("");

  const DragOverHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const DropHandler = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setImageName(files.name);
    console.log(imgname);
  };

  return (
    <Fragment>
      <div className={style.wrap}>
        <div className={style.container}>
          <div className={style.Main}>
            <div className={style.AddContentBox}>
              <div className={style.titlebox}>
                <h1>Upload Content</h1>
                <label>
                  <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </label>
              </div>
              <div
                onDragOver={DragOverHandler}
                onDrop={DropHandler}
                className={style.ImageBox}
              >
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
                  <input type="text" name="location" id="location" />
                </div>
                <div className={style.OptionInput}>
                  <label>Youtube</label>
                  <br />
                  <br />
                  <input type="text" name="youtube" id="youtube" />
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
