import { React, Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../styles/DetailView.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const DetailView = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [D_data, setDData] = useState([]);

  useEffect(() => {
    const DetailData = async () => {
      const Detail_Data = await axios.post(`/ListDetail`, {
        id,
      });
      if (Detail_Data.data.mes === "OK") {
        const Newdata = Detail_Data.data.content;
        setDData(Newdata);
      }
    };
    DetailData();
  }, []);

  const Text = () => {
    navigate("/traveList");
  };

  return (
    <Fragment>
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
            <div className={style.TitleBox}></div>
            <div className={style.InfoBox}></div>
            <div className={style.TitleBox}></div>
            <div className={style.InfoBox}></div>
            <div className={style.TitleBox}></div>
            <div className={style.InfoBox}></div>
            <div className={style.TitleBox}></div>
            <div className={style.InfoBox}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailView;
