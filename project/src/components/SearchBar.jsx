import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/SearchBar.module.css";
const SearchBar = () => {
  const [showfilter, setShowFilter] = useState(false);
  const ShowCheckBox = () => {
    setShowFilter(true);
  };
  return (
    <Fragment>
      <div className={style.SearchBarBox}>
        <input
          className={style.search}
          type="search"
          name="search"
          id="search"
          autoComplete="off"
        />
      </div>
    </Fragment>
  );
};

export default SearchBar;
