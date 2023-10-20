import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/SearchBar.module.css";
import FilterBtn from "../constants/FilterBtn";
import CheckBox from "../constants/CheckBox";
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
        />

        {showfilter == false ? (
          <FilterBtn ShowCheckBox={ShowCheckBox} />
        ) : (
          <CheckBox />
        )}
      </div>
    </Fragment>
  );
};

export default SearchBar;
