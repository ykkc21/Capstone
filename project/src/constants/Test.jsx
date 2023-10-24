import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/Test.module.css";
import axios from "axios";

const Test = () => {
  const [YoutubeId, setYouTube] = useState("");
  useEffect(() => {
    const Video = axios
      .get("/youtubeVideo")
      .then((res) => {
        setYouTube(res.data.video.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Fragment>
      <iframe src={`https://www.youtube.com/embed/${YoutubeId}`}></iframe>
    </Fragment>
  );
};
export default Test;
