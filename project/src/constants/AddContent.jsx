import { React, Fragment, useState } from "react";
import DropImage from "./DropImage";
import style from "../styles/AddContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const AddContent = () => {
  const [imgname, setImageName] = useState("");
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [location, setLocation] = useState("");
  const [youtubeId, setYoutubeId] = useState("");
  const [array, setArray] = useState([]);

  const DragOverHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const DropHandler = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    const fileName = files.name;
    setImageName(fileName);
  };

  const getYoutubeId = (e) => {
    const IdListbox = document.getElementById("IdList");
    if (e.code === "Enter") {
      const newArray = [...array, youtubeId];
      const FilterArray = [...new Set(newArray)];
      //중복 제거된 배열상태를 저장
      setArray(FilterArray);

      setYoutubeId("");

      IdListbox.style.top = "150%";
      IdListbox.style.opacity = 1;
      IdListbox.style.transition = "0.5s";
      IdListbox.style.zIndex = 10;
    }
  };

  const deleteData = (idx) => {
    const IdListbox = document.getElementById("IdList");
    const updateArray = array.filter((_, index) => index !== idx);
    setArray(updateArray);
    if (array.length === 1) {
      IdListbox.style.top = "68%";
      IdListbox.style.opacity = 0;
      IdListbox.style.transition = "0.5s";
      IdListbox.style.zIndex = -1;
    }
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
              <DropImage
                background={imgname}
                DropEvent={DropHandler}
                DrageMove={DragOverHandler}
              />
              <div className={style.OptionBox}>
                <div className={style.OptionInput}>
                  <label>Title</label>
                  <br />
                  <br />
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    type="text"
                    name="title"
                    id="title"
                  />
                </div>
                <div className={style.OptionInput}>
                  <label>Information</label>
                  <br />
                  <br />
                  <input
                    type="text"
                    value={information}
                    onChange={(e) => {
                      setInformation(e.target.value);
                    }}
                    name="info"
                    id="info"
                  />
                </div>
                <div className={style.OptionInput}>
                  <label>Location</label>
                  <br />
                  <br />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    name="location"
                    id="location"
                  />
                </div>
                <div className={style.OptionInput}>
                  <label>Youtube</label>
                  <br />
                  <br />
                  <input
                    type="text"
                    value={youtubeId}
                    onChange={(e) => {
                      if (e.target.value.length > 12) {
                        alert("12자리보다 크면 안됩니다.");
                      } else {
                        if (e.target.value == "") {
                          alert("빈값이 있으면 안됩니다.");
                        } else {
                          setYoutubeId(e.target.value);
                        }
                      }
                    }}
                    onKeyUp={getYoutubeId}
                    name="youtube"
                    id="youtube"
                  />
                  <div id="IdList" className={style.Idlist}>
                    {array.map((item, idx) => {
                      return (
                        <div key={idx} idx={idx} className={style.Idlist_item}>
                          {item}
                          <div
                            id="deleteBtn"
                            onClick={() => deleteData(idx)}
                            idx={idx}
                            className={style.delete}
                          >
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button className={style.UploadBtn}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddContent;
