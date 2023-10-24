import { React, Fragment } from "react";
import style from "../styles/ShowUpList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ShowUpList = () => {
  const TestClick = () => {
    console.log(132);
  };
  return (
    <Fragment>
      <div className={style.SHowUpMain}>
        <FontAwesomeIcon
          icon={faChevronUp}
          onClick={TestClick}
          className={style.iconUp}
        />
      </div>
    </Fragment>
  );
};

export default ShowUpList;
