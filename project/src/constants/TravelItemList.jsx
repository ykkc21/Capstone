import { React, Fragment } from "react";
import style from "../styles/TravelItemList.module.css";
import TravelItemCard from "./TravelItemCard";

const TravelItemList = ({ TitleData }) => {
  return (
    <Fragment>
      <div className={style.ItemListBox}>
        <div className={style.container}>
          <div className={style.ListBox}>
            <h1>A List of Destinations</h1>
            <div className={style.ItemBox}>
              {TitleData.map((item, idx) => {
                return <TravelItemCard key={idx} elementData={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TravelItemList;
