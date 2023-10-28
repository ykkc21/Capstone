import React, { Fragment, useEffect, useState } from "react";
import style from "../styles/ItemList.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const ItemList = (props) => {
  const MouseOverHandle = (e) => {
    e.style.transform = "scale(1.1)";
    e.style.transition = "0.5s";
  };

  const MouseLeaveHandle = (e) => {
    e.style.transform = "scale(1)";
    e.style.transition = "0.5s";
  };

  const UserDelete = (user) => {
    console.log(user);
    const test = axios
      .post("http://localhost:8080/userDelete", {
        userid: user,
      })
      .then((res) => {
        console.log(res);
        if (res.data.msg === "Delete_User") {
          alert("계정을 삭제했습니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <div
        onMouseOver={(e) => {
          MouseOverHandle(e.target);
        }}
        onMouseLeave={(e) => {
          MouseLeaveHandle(e.target);
        }}
        className={style.itemlist}
        id="List"
      >
        <div className={style.IconBox}>
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
        <div className={style.InfoBox}>
          <h2>{props.name.toUpperCase()}</h2>
          <h5>{props.email.toUpperCase()}</h5>
          <h6>{props.bd}</h6>
          <h6>{props.state}</h6>
        </div>
        <div className={style.DeleteBox}>
          <button
            onClick={(e) => {
              UserDelete(props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemList;
