import { React, Fragment } from "react";
import Header from "../components/header";
import style from "../styles/Admin.module.css";
import Button from "../constants/button";
const admin = () => {
  const items = ["User", "Content", "Bulletin"];

  const Check = (e) => {
    const dom = e.target;
    console.log(dom);
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
      <Header />
      <div className={style.AdminContainer}>
        <h1>Home</h1>
        <div className={style.ControllBox}>
          <div className={style.btnbox}>
            {items.map((item, index) => {
              return <Button key={index} name={item} ClickFun={Check} />;
            })}
          </div>

          <div className={style.MainListBox}>
            <div id="user" className={`${style.UserList} ${style.List}`}>
              <h1>User</h1>
            </div>
            <div id="content" className={`${style.ContentList} ${style.List}`}>
              <h1>Content</h1>
            </div>
            <div
              id="bulletin"
              className={`${style.BulletinList} ${style.List}`}
            >
              <h1>Bulletin</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default admin;
