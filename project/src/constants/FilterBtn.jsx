import { React, Fragment } from "react";
import style from "../styles/FilterBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FilterBtn = ({ ShowCheckBox }) => {
  return (
    <Fragment>
      <button onClick={ShowCheckBox} className={style.Filter}>
        <FontAwesomeIcon icon={faFilter} />
        Filter
      </button>
    </Fragment>
  );
};

export default FilterBtn;
