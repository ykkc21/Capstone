import { React, Fragment } from "react";
import style from "../styles/TravelItemList.module.css";

const TravelItemList = () => {
  return (
    <Fragment>
      <div className={style.ItemListBox}>
        <div className={style.container}>
          <h1>A List of Destinations</h1>
        </div>
      </div>
    </Fragment>
  );
};
export default TravelItemList;
