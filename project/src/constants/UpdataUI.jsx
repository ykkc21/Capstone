import { React, Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/UpdateUI.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faFile,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const UpdateUI = ({ ContentId, CloseUpdateUI }) => {
  const [selectFile, setSelectFile] = useState(null); // 이미지 파일 값
  const [classinfo, setClassInfo] = useState(""); // 분류 이름
  const [title, setTitle] = useState(""); // 제목 이름
  const [information, setInformation] = useState(""); // 상세정보 내용
  const [location, setLocation] = useState(""); // 위치 내용
  const [youtubeId, setYoutubeId] = useState(""); // 유튭아이디 내용
  const [array, setArray] = useState([]); // 유튭아이디 내용
  useEffect(() => {
    const SelectContent = async () => {
      try {
        const SelectContentData = await axios.get("/SelectData", {
          params: { ContentId: ContentId },
        });
        console.log(SelectContentData.data);
      } catch (err) {
        console.error(err);
      }
    };
    SelectContent();
  }, []);

  const getYoutubeId = (e) => {
    const IdListbox = document.getElementById("IdList");
    // const BtnUpload = document.getElementById("UploadBtn");
    if (e.code === "Enter") {
      const newArray = [...array, youtubeId];
      const FilterArray = [...new Set(newArray)];
      //중복 제거된 배열상태를 저장
      setArray(FilterArray);

      setYoutubeId("");

      IdListbox.style.top = "65%";
      IdListbox.style.opacity = 1;
      IdListbox.style.transition = "0.5s";
      IdListbox.style.zIndex = 10;
    }
  };

  const deleteData = (idx) => {
    const IdListbox = document.getElementById("IdList");
    // const BtnUpload = document.getElementById("UploadBtn");
    const updateArray = array.filter((_, index) => index !== idx);
    setArray(updateArray);
    if (array.length === 1) {
      IdListbox.style.top = "58%";
      IdListbox.style.opacity = 0;
      IdListbox.style.transition = "0.5s";
      IdListbox.style.zIndex = -1;
    }
  };

  const ClickUpdate = async () => {
    console.log("Click");
    //   if (
    //     (classinfo === "" ||
    //       classinfo === null ||
    //       title === "" ||
    //       information === "" ||
    //       location === "" ||
    //       array.length === 0,
    //     selectFile == null)
    //   ) {
    //     alert("데이터를 정확하게 작성해주세요!");
    //   } else {
    //     if (selectFile) {
    //       const formData = new FormData();
    //       formData.append("classinfo", classinfo);
    //       formData.append("title", title);
    //       formData.append("information", information);
    //       formData.append("location", location);
    //       formData.append("array", JSON.stringify(array));
    //       formData.append("file", selectFile); // "file"은 서버에서 받을 파일 필드 이름
    //       const uploadData = await axios.post(
    //         "http://localhost:9000/Content/AddContent",
    //         formData,
    //         { headers: { "Content-Type": "multipart/form-data" } }
    //       );
    //       if (uploadData.data.msg === "OK") {
    //         alert("업로드 완료했습니다.");
    //         CloseBox();
    //       } else {
    //         alert("콘텐츠 업로드 실패");
    //         AddContentBox();
    //       }
    //     }
    //   }
  };

  const ChangeFile = (target) => {
    setSelectFile(target.files[0]);
  };

  const FileStart = () => {
    const dom = document.getElementById("InputFile");
    dom.click();
  };
  return (
    <Fragment>
      <div id="UpdateBox" className={style.UpdateBox}>
        <div className={style.UpdateForm}>
          <div className={style.UpdateTitleBox}>
            <h2>Update Content</h2>
            <FontAwesomeIcon
              onClick={CloseUpdateUI}
              className={style.updateIcon}
              icon={faXmark}
            />
          </div>
          <div className={style.UpdateInputBox}>
            <div className={style.UpdataSidebar}>
              <ul>
                <li>분류</li>
                <li>제목</li>
                <li>상세정보</li>
                <li>위치</li>
                <li>YoutubeId</li>
                <li>이미지 및 영상</li>
              </ul>
            </div>
            <div className={style.UpdataItems}>
              <select name="UpdateClassification" id="UpdateClassification">
                <option value="No">선택해주세요.</option>
                <option value="NorthAmerica">북아메리카</option>
                <option value="Asia">아시아</option>
                <option value="Europe">유럽</option>
              </select>
              <input type="text" name="UpdateTitle" id="UpdateTitle" />
              <input
                type="text"
                name="UpdateInformation"
                id="UpdateInformation"
              />
              <input
                type="text"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                name="UpdateLocation"
                id="UpdateLocation"
              />
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
                name="YoutubeId"
                id="YoutubeId"
              />
              <div id="UpdateIdlist" className={style.UpdateIdlist}>
                {array.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      idx={idx}
                      className={style.update_Idlist_item}
                    >
                      <FontAwesomeIcon
                        className={style.youtubeIcon}
                        icon={faYoutube}
                      />
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
              <div className={style.Files} onClick={FileStart}>
                <div className={style.Circle}>
                  <FontAwesomeIcon
                    className={style.CircleIcon}
                    icon={faCloudArrowUp}
                  />
                </div>
                <button className={style.Btn}>Upload</button>
              </div>
              <input
                onChange={(e) => {
                  ChangeFile(e.target);
                }}
                id="InputFile"
                type="file"
                name="Image"
              />
              <button
                id="UpdateBtn"
                className={style.UpdateBtn}
                onClick={ClickUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default UpdateUI;
