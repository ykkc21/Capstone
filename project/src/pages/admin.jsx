import { React, Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import AddContent from "../components/AddContent";
import AdminControll from "../constants/AdminControll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe, faComment } from "@fortawesome/free-solid-svg-icons";

const Admin = ({ userData }) => {
  const [showContent, setShowContent] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
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

  useEffect(() => {
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
  });

  const AddContentBox = () => {
    setShowContent(true);
  };

  const CloseContentBox = () => {
    setShowContent(false);
  };

  const ShowIdBox = (e) => {
    const domName = e.target.className.split(" ");
    const user = document.getElementById("User");
    const content = document.getElementById("Content");
    const bulletin = document.getElementById("Bulletin");

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
      console.log("User 입니다.");
      user.style.display = "block";
      content.style.display = "none";
      bulletin.style.display = "none";
    } else if (domName[1] == "Content") {
      console.log("Content 입니다.");
      user.style.display = "none";
      content.style.display = "block";
      bulletin.style.display = "none";
    } else if (domName[1] == "Bulletin") {
      console.log("Bulletin 입니다.");
      user.style.display = "none";
      content.style.display = "none";
      bulletin.style.display = "block";
    }

    setTimeout(() => {
      e.target.style.backgroundColor = "initial";
      e.target.style.color = "initial";
      e.target.style.transition = "0.5s";
      setSelectedButton(null); // null 또는 초기화된 값으로 설정
      setSelectedText(null); // null 또는 초기화된 값으로 설정
    }, 3000);
  };
  return (
    <Fragment>
      <Header userData={userData} />
      {showContent == true ? (
        <AddContent CloseBox={CloseContentBox} />
      ) : (
        <AdminControll
          BtnList={menu}
          AddContentBox={AddContentBox}
          CloseContentBox={CloseContentBox}
          ShowIdBox={ShowIdBox}
        />
      )}
    </Fragment>
  );
};

export default Admin;
