import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/SearchBar.module.css";
const SearchBar = ({
  title,
  nickname,
  ChangeText,
  ShowContent,
  CloseContent,
}) => {
  if (title == "Content") {
    console.log("이 부분은 Content 부분입니다.");
  }

  return (
    <Fragment>
      {title == "Content" ? (
        <div className={style.SearchBarBox_Content}>
          <input
            className={style.search_content}
            nickname={nickname}
            type="search"
            name="search"
            autoComplete="off"
            onChange={(e) => {
              ChangeText(e.target.value, e.target);
            }}
          />
          <button onClick={ShowContent}>Add Content</button>
        </div>
      ) : (
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
      )}
    </Fragment>
  );
};

export default SearchBar;
