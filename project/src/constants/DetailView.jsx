import { React, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/DetailView.module.css";
import axios from "axios";

const DetailView = () => {
  const id = useParams();

  useEffect(() => {
    const DetailData = async () => {
      const Detail_Data = await axios.get(`/ListDetail/${id}`);
      console.log(Detail_Data.data.mes);
    };
    DetailData();
  }, []);

  return (
    <Fragment>
      <div className={style.DetailViewBox}>
        <div className={style.container}>
          <div className={style.SiedMenu}></div>
          <div className={style.DetailBox}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailView;
