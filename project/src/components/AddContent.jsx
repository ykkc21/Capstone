import { React, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/AddContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faFile,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const AddContent = ({ CloseBox, AddContentBox }) => {
  const [selectFile, setSelectFile] = useState(null); // 이미지 파일 값
  const [classinfo, setClassInfo] = useState(""); // 분류 이름
  const [title, setTitle] = useState(""); // 제목 이름
  const [information, setInformation] = useState(""); // 상세정보 내용
  const [location, setLocation] = useState(""); // 위치 내용
  const [youtubeId, setYoutubeId] = useState(""); // 유튭아이디 내용
  const [array, setArray] = useState([]); // 유튭아이디 내용
  const navigate = useNavigate();

  console.log(`분류: ${classinfo}, 제목:${title}, 
상세내용:${information}, 위치:${location}, 유튭아이디:${array}`);

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

  const ClickUpload = async () => {
    if (
      (classinfo === "" ||
        classinfo === null ||
        title === "" ||
        information === "" ||
        location === "" ||
        array.length === 0,
      selectFile == null)
    ) {
      alert("데이터를 정확하게 작성해주세요!");
    } else {
      if (selectFile) {
        const formData = new FormData();

        formData.append("classinfo", classinfo);
        formData.append("title", title);
        formData.append("information", information);
        formData.append("location", location);
        formData.append("array", JSON.stringify(array));
        formData.append("file", selectFile); // "file"은 서버에서 받을 파일 필드 이름

        const uploadData = await axios.post(
          "http://localhost:9000/Content/AddContent",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (uploadData.data.msg === "OK") {
          alert("업로드 완료했습니다.");
          CloseBox();
        } else {
          alert("콘텐츠 업로드 실패");
          AddContentBox();
        }
      }
    }
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
      <div className={style.wrap}>
        <div className={style.Main}>
          <div className={style.InputBox}>
            <div className={style.titlebox}>
              <h2>Content Upload</h2>
              <label onClick={CloseBox}>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </label>
            </div>
            <div className={style.InfoBox}>
              <div className={style.SideBar}>
                <ul>
                  <li>분류</li>
                  <li>제목</li>
                  <li>상세정보</li>
                  <li>위치</li>
                  <li>YoutubeId</li>
                  <li>이미지 및 영상</li>
                </ul>
              </div>
              <select
                onChange={(e) => {
                  setClassInfo(e.target.value);
                }}
                name="Classification"
                id="Classification"
              >
                <option value="No">선택해주세요.</option>
                <option value="NorthAmerica">북아메리카</option>
                <option value="Asia">아시아</option>
                <option value="Europe">유럽</option>
              </select>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                name="title"
                id="title"
              />
              <input
                type="text"
                onChange={(e) => {
                  setInformation(e.target.value);
                }}
                name="information"
                id="information"
              />
              <input
                type="text"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                name="location"
                id="location"
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
              <div id="IdList" className={style.Idlist}>
                {array.map((item, idx) => {
                  return (
                    <div key={idx} idx={idx} className={style.Idlist_item}>
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
              <div onClick={FileStart} className={style.Files}>
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
                id="UploadBtn"
                className={style.UploadBtn}
                onClick={ClickUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddContent;
