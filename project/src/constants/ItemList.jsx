import React, { Fragment } from "react";
import style from "../styles/ItemList.module.css";

const ItemList = (props) => {
  return (
    <Fragment>
      <div className={style.itemlist}>
        <table>
          <tbody>
            {props.state == "User" ? (
              <tr>
                <td>{props.idx}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.bd}</td>
                <td>{props.state}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ItemList;
