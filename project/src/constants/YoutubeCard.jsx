import { React, Fragment } from "react";
import style from "../styles/YoutubeCard.module.css";

const YoutubeCard = ({ VideoId }) => {
  console.log(VideoId);
  return (
    <Fragment>
      <iframe
        className={style.YoutubeCard}
        src={`https://www.youtube.com/embed/${VideoId}`}
        allowFullScreen
      ></iframe>
    </Fragment>
  );
};
export default YoutubeCard;
