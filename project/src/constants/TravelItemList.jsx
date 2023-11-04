import { React, Fragment } from "react";
import style from "../styles/TravelItemList.module.css";

const TravelItemList = ({ TitleData }) => {
  console.log("아이템 리스트 뿌려주기:", TitleData);
  return (
    <Fragment>
      <div className={style.ItemListBox}>
        <div className={style.container}>
          <div className={style.ListBox}>
            <h1>A List of Destinations</h1>
            <div className={style.ItemBox}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TravelItemList;
