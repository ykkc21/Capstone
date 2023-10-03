import React, { Fragment } from "react";
import style from "../styles/ItemList.module.css";
const ItemList = (props) => {
  return (
    <Fragment>
      <div className={style.itemlist}>
        <table>
          <tr>
            <th>{props.idx}</th>
            <th>{props.name}</th>
            <th>{props.address}</th>
            <th>{props.phone}</th>
            <th>{props.email}</th>
          </tr>
        </table>
      </div>
    </Fragment>
  );
};
export default ItemList;
