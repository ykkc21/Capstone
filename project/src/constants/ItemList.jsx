import React, { Fragment, useEffect, useState } from "react";
import style from "../styles/ItemList.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const ItemList = (props) => {
  const UserDelete = async (user) => {
    try {
      const DeleteUser = await axios.post("http://localhost:8080/DeleteUser", {
        userid: user,
      });

      if (DeleteUser.data.msg === "Delete_User") {
        alert("계정을 삭제했습니다.");
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <div className={style.itemlist} id="List">
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
