import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/SearchBar.module.css";
const SearchBar = ({ title, nickname, ChangeText }) => {
  return (
    <Fragment>
      <div className={style.SearchBarBox}>
        <input
          className={style.search}
          nickname={nickname}
          type="search"
          name="search"
          autoComplete="off"
          onChange={(e) => {
            ChangeText(e.target.value, e.target);
          }}
        />
      </div>
    </Fragment>
  );
};

export default SearchBar;
