import { React, Fragment, useState } from "react";
import style from "../styles/HotelSideBar.module.css";

const HotelSideBar = ({ ChangeInput }) => {
  const [TypeName, setTypeName] = useState("");
  const [AreaName, setAreaName] = useState("");

  return (
    <Fragment>
      <div className={style.HotelSideBarBox}>
        <div className={style.ChangeSeletBox}>
          <label>Type of room</label>
          <select
            onChange={(e) => {
              setTypeName(e.target.value);
            }}
            className={style.SelectBox}
            id="RoomBox"
          >
            <option value="">선택해주세요</option>
            <option value="Hotel">Hotel</option>
            <option value="Motel">Motel</option>
          </select>
        </div>
        <div className={style.ChangeSeletBox}>
          <label>The Desired Location</label>
          <select
            onChange={(e) => {
              setAreaName(e.target.value);
            }}
            className={style.SelectBox}
            id="AreaBox"
          >
            <option value="">선택해주세요</option>
            <option value="NorthAmerica">NorthAmerica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
        <button
          onClick={() => ChangeInput(TypeName, AreaName)}
          className={style.SearchBtn}
        >
          Search
        </button>
      </div>
    </Fragment>
  );
};
export default HotelSideBar;
