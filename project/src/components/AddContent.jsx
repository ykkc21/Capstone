import { React, Fragment, useState } from "react";
import DropImage from "../components/DropImage";
import style from "../styles/AddContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddContent = ({ CloseBox }) => {
  const [lensname, setLensName] = useState("");
  const [lens, setLens] = useState(null);
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [location, setLocation] = useState("");
  const [youtubeId, setYoutubeId] = useState("");
  const [array, setArray] = useState([]);

  // const DragOverHandler = (e) => {
  //   e.preventDefault();
  // };

  // const DropHandler = (e) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files[0];
  //   if (files) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const Databuffer = e.target.result;
  //       const uint8Array = new Uint8Array(Databuffer);
  //       setLens(uint8Array);
  //     };
  //     reader.readAsArrayBuffer(files);
  //   }
  //   const filename = files.name;
  //   setLensName(filename);
  // };

  const getYoutubeId = (e) => {
    const IdListbox = document.getElementById("IdList");
    const BtnUpload = document.getElementById("UploadBtn");
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

      BtnUpload.style.top = "95%";
      BtnUpload.style.transition = "0.5s";
    }
  };

  const deleteData = (idx) => {
    const IdListbox = document.getElementById("IdList");
    const BtnUpload = document.getElementById("UploadBtn");
    const updateArray = array.filter((_, index) => index !== idx);
    setArray(updateArray);
    if (array.length === 1) {
      IdListbox.style.top = "68%";
      IdListbox.style.opacity = 0;
      IdListbox.style.transition = "0.5s";
      IdListbox.style.zIndex = -1;

      BtnUpload.style.top = "88%";
      BtnUpload.style.transition = "0.5s";
    }
  };

  const ClickUpload = () => {
    if (
      lensname == "" ||
      title == "" ||
      information == "" ||
      location == "" ||
      array.length == 0 ||
      lens == ""
    ) {
      alert("데이터를 정확하게 작성해주세요!");
    } else {
      const uploadData = axios
        .post("http://localhost:8080/AddContent", {
          title,
          information,
          location,
          array,
          lens,
          lensname,
        })
        .then((result) => {
          if (result.data.msg == "OK") {
            alert("데이터 전송이 완료되었습니다.");
            CloseBox();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  console.log(
    "이미지 이름:",
    lensname,
    "제목:",
    title,
    "정보:",
    information,
    "장소:",
    location,
    "유튜브 아이디:",
    array,
    "이미지 버퍼",
    lens
  );

  return (
    <Fragment>
      <div className={style.wrap}>
        <div className={style.InputBox}></div>
      </div>
    </Fragment>
  );
};

export default AddContent;
