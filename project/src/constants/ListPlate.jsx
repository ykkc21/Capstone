import { React, Fragment } from "react";
import style from "../styles/ListPlate.module.css";
import SearchBar from "../components/SearchBar";

const ListPlate = () => {
  return (
    <Fragment>
      <div className={style.Plate}>
        <div id="user" className={style.board}>
          <SearchBar />
        </div>
        <div id="content" className={style.board}>
          <h1>content</h1>
        </div>
        <div id="bulletin" className={style.board}>
          <h1>bulletin</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default ListPlate;
