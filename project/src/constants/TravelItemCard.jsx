import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "../styles/TravelItemCard.module.css";
import IconImage from "../assets/img/pack.png";
const TravelItemCard = ({ elementData }) => {
  console.log(elementData);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };
  return (
    <Fragment>
      <Link to={`/listdetail/${elementData.c_idx}`}>
        <div className={style.ItemCard}>
          <img src={elementData.c_lens} alt="ListImage" />
          <div className={style.CardTextBox}>
            <img src={IconImage} alt="IconImage" />
            <h2>{elementData.c_title}</h2>
            <p>{truncateText(elementData.c_information, 20)}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default TravelItemCard;
