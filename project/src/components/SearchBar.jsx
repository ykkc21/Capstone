import { React, Fragment } from "react";
import style from "../styles/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const CheckBox = () => {};
  return (
    <Fragment>
      <div className={style.SearchBarBox}>
        <input
          className={style.search}
          type="search"
          name="search"
          id="search"
        />
        <button className={style.Filter}>
          <FontAwesomeIcon icon={faFilter} />
          Filter
        </button>
      </div>
    </Fragment>
  );
};

export default SearchBar;
