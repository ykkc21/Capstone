import React, { Fragment, useEffect } from "react";
import style from "../styles/ItemList.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const ItemList = (props) => {
  console.log(props);
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
      <div className={style.itemlist}>
        <div className={style.IconBox}>
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
        <div className={style.InfoBox}>
          <h2>{props.name.toUpperCase()}</h2>
          <h5>{props.email.toUpperCase()}</h5>
        </div>
        <div className={style.DeleteBox}></div>
        {/* <table>
          <tbody>
            {props.state == "User" ? (
              <tr>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.bd}</td>
                <td>{props.state}</td>
                <td>
                  <button
                    onClick={(e) => {
                      UserDelete(props.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table> */}
      </div>
    </Fragment>
  );
};

export default ItemList;
