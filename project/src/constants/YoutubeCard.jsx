import { React, Fragment } from "react";
import style from "../styles/YoutubeCard.module.css";

const YoutubeCard = ({ VideoId }) => {
  return (
    <Fragment>
      <iframe
        className={style.YoutubeCard}
        width="370"
        height="250"
        src={`https://www.youtube.com/embed/${VideoId}`}
        allowFullScreen
      ></iframe>
    </Fragment>
  );
};
export default YoutubeCard;
