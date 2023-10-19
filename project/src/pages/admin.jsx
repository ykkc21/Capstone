import { React, Fragment, useState, useEffect } from "react";
import Header from "../components/header";
import AddContent from "../components/AddContent";
import AdminControll from "../constants/AdminControll";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe, faComment } from "@fortawesome/free-solid-svg-icons";

const Admin = ({ userData }) => {
  const [showContent, setShowContent] = useState(false);
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

  // ["User", "Content", "Bulletin"]

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 순차적으로 실행되도록 async/await을 사용
        const usersResponse = await axios.get("/users");
        const contentsResponse = await axios.get("/contents");

        const usersData = usersResponse.data;
        const contentsData = contentsResponse.data;

        console.log("유저 데이터:", usersData);
        console.log("콘텐츠 데이터:", contentsData);
      } catch (error) {
        console.error("데이터 요청 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);
  const UserList = [
    {
      Name: "User1",
      Address: "테스트 중입니다.",
      Phone: "010-1234-5678",
      Email: "test@test.com",
    },
    {
      Name: "User2",
      Address: "테스트 중입니다.",
      Phone: "010-1234-5678",
      Email: "test@test.com",
    },
    {
      Name: "User3",
      Address: "테스트 중입니다.",
      Phone: "010-1234-5678",
      Email: "test@test.com",
    },
    {
      Name: "User4",
      Address: "테스트 중입니다.",
      Phone: "010-1234-5678",
      Email: "test@test.com",
    },
    {
      Name: "User5",
      Address: "테스트 중입니다.",
      Phone: "010-1234-5678",
      Email: "test@test.com",
    },
  ];

  const AddContentBox = () => {
    setShowContent(true);
  };

  const CloseContentBox = () => {
    setShowContent(false);
  };

  // console.log(selectedItem);

  const ShowIdBox = (e) => {
    const domName = e.target.className.split(" ");
    const user = document.getElementById("user");
    const content = document.getElementById("content");
    const bulletin = document.getElementById("bulletin");

    console.log(domName);

    // if (domName[1] == "User") {
    //   console.log("User 입니다.");
    //   user.style.display = "block";
    //   content.style.display = "none";
    //   bulletin.style.display = "none";
    // } else if (domName[1] == "Content") {
    //   console.log("Content 입니다.");
    //   user.style.display = "none";
    //   content.style.display = "block";
    //   bulletin.style.display = "none";
    // } else if (domName[1] == "Bulletin") {
    //   console.log("Bulletin 입니다.");
    //   user.style.display = "none";
    //   content.style.display = "none";
    //   bulletin.style.display = "block";
    // }
  };
  return (
    <Fragment>
      <Header userData={userData} />
      {showContent == true ? (
        <AddContent CloseBox={CloseContentBox} />
      ) : (
        <AdminControll
          BtnList={menu}
          ShowContent={AddContentBox}
          UserList={UserList}
          ShowIdBox={ShowIdBox}
        />
      )}
    </Fragment>
  );
};

export default Admin;
