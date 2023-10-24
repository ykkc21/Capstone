import { React, Fragment } from "react";
import style from "../styles/TravelSideBar.module.css";
const TravelSideBar = () => {
  return (
    <Fragment>
      <div className={style.SideBarWarp}>
        <h1>TravelDetination</h1>
        <div className={style.NorthAmerica}>
          <h1>NorthAmerica</h1>
          <h2>17</h2>
        </div>
        <div className={style.Asia}>
          <h1>Asia</h1>
          <h2>10</h2>
        </div>
        <div className={style.Europe}>
          <h1>Europe</h1>
          <h2>8</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default TravelSideBar;
