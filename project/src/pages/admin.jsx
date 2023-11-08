import { React, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import AddContent from "../components/AddContent";
import AdminControll from "../constants/AdminControll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe, faComment } from "@fortawesome/free-solid-svg-icons";
import UpdateUI from "../constants/UpdataUI";

const Admin = ({ userData }) => {
  const [showContent, setShowContent] = useState(false);
  const [updateui, setUpdateUI] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [contentUpdateId, setContentUpdateId] = useState(Number(0));

  const menu = [
    { title: "User", icon: <FontAwesomeIcon id="UserIcon" icon={faUser} /> },
    {
      title: "Content",
      icon: <FontAwesomeIcon id="ContentIcon" icon={faGlobe} />,
    },
    {
      title: "Bulletin",
      icon: <FontAwesomeIcon id="BulletinIcon" icon={faComment} />,
    },
  ];
  const navigate = useNavigate();

  const state = Array.from(userData);
  state.forEach((item, idx) => {
    if (item[idx].state == "User") {
      alert("일반회원은 사용 불가합니다.");
      navigate("/");
    }
    if (item[idx].msg == "NO") {
      alert("로그인을 하지 않았습니다.");
      navigate("/");
    }
  });
  // 콘텐츠 추가 UI 보여주기
  const AddContentBox = () => {
    setShowContent(true);
  };
  // 콘텐츠 추가 UI 닫기
  const CloseContentBox = () => {
    setShowContent(false);
  };
  //콘텐츠 업데이트 UI 보여주기
  const ShowUpdateUI = (idx) => {
    const dom = document.getElementById("UpdateBox");
    console.log(dom);
    dom.style.display = "block";
    setUpdateUI(true);
    setContentUpdateId(idx);
  };
  //콘텐츠 업데이트 UI 닫기
  const CloseUpdateUI = () => {
    const dom = document.getElementById("UpdateBox");
    console.log(dom);
    dom.style.display = "none";
  };

  const ShowIdBox = (e) => {
    const domName = e.target.className.split(" ");
    const user = document.getElementById("User");
    const content = document.getElementById("Content");
    const bulletin = document.getElementById("Bulletin");
    const Card = document.getElementsByClassName("Card");

    console.log(Card);
    if (selectedButton && selectedText) {
      selectedButton.style.backgroundColor = "initial";
      selectedText.style.color = "initial";
      e.target.style.transition = "0.5s";
    }

    e.target.style.backgroundColor = "#7650e0";
    e.target.style.color = "#fff";
    e.target.style.transition = "0.5s";
    setSelectedButton(e.target);
    setSelectedText(e.target);

    if (domName[1] == "User") {
      user.style.display = "block";
      content.style.display = "none";
      bulletin.style.display = "none";
    } else if (domName[1] == "Content") {
      user.style.display = "none";
      content.style.display = "block";
      bulletin.style.display = "none";
    } else if (domName[1] == "Bulletin") {
      user.style.display = "none";
      content.style.display = "none";
      bulletin.style.display = "block";
    }
  };
  return (
    <Fragment>
      <Header userData={userData} />
      {showContent == true ? (
        <AddContent AddContentBox={AddContentBox} CloseBox={CloseContentBox} />
      ) : (
        <AdminControll
          BtnList={menu}
          AddContentBox={AddContentBox}
          CloseContentBox={CloseContentBox}
          ShowIdBox={ShowIdBox}
          ShowUpdateUI={ShowUpdateUI}
        />
      )}

      <UpdateUI ContentId={contentUpdateId} CloseUpdateUI={CloseUpdateUI} />
    </Fragment>
  );
};

export default Admin;
