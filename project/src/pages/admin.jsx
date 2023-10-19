import { React, Fragment, useState } from "react";
import Header from "../components/header";
import AddContent from "../components/AddContent";
import AdminControll from "../constants/AdminControll";

const Admin = ({ userData }) => {
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState("User");
  const items = ["User", "Content", "Bulletin"];
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

  console.log(selectedItem);

  const ShowIdBox = (e) => {
    const dom = e.target;

    const domName = e.target.className.split(" ");
    const user = document.getElementById("user");
    const content = document.getElementById("content");
    const bulletin = document.getElementById("bulletin");

    console.log(user, content, bulletin);

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
  };
  return (
    <Fragment>
      <Header userData={userData} />
      {showContent == true ? (
        <AddContent CloseBox={CloseContentBox} />
      ) : (
        <AdminControll
          BtnList={items}
          ShowContent={AddContentBox}
          UserList={UserList}
          ShowIdBox={ShowIdBox}
        />
      )}
    </Fragment>
  );
};

export default Admin;
