import { React, Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../styles/DetailView.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import YoutubeCard from "./YoutubeCard";

const DetailView = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [D_data, setDData] = useState([]);
  const [Youtube, setYoutube] = useState([]);

  useEffect(() => {
    const DetailData = async () => {
      const Detail_Data = await axios.post(
        `http://localhost:9000/Content/ListDetail`,
        {
          id,
        }
      );
      if (Detail_Data.data.mes === "OK") {
        const Newdata = Detail_Data.data.content;
        const YoutubeData = JSON.parse(Detail_Data.data.content.c_youtubeId);
        setDData(Newdata);
        setYoutube(YoutubeData);
      } else {
        setDData(Detail_Data.data);
        console.log(Detail_Data.data.text);
      }
    };

    DetailData();
  }, [id]);

  const Text = () => {
    navigate("/traveList");
  };
  return (
    <Fragment>
      {D_data.mes === "NO" ? (
        <div className={style.NoData}>
          <h1 className={style.NoData_text}>{D_data.text}</h1>
        </div>
      ) : (
        <div className={style.DetailViewBox}>
          <div className={style.container}>
            <div className={style.SiedMenu}>
              <div className={style.BackPageBtn}>
                <FontAwesomeIcon onClick={Text} icon={faArrowLeftLong} />
              </div>
              <div className={style.ImageBox}>
                <img src={D_data.c_lens} alt="DetailImage" />
              </div>
            </div>
            <div className={style.DetailBox}>
              <div className={style.TitleBox}>
                <h1>{D_data.c_title}</h1>
              </div>
              <div className={style.InfoBox}>
                <p>{D_data.c_information}</p>
              </div>
              <div className={style.YoutubeBox}>
                <h1>Related Video</h1>
                <div className={style.VideoBox}>
                  {Youtube.map((item, idx) => {
                    return <YoutubeCard VideoId={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DetailView;
