import React from "react";
import style from "../styles/Main_View.module.css";

const View = () => {
  return (
    <section className={style.View}>
      <div className={style.ViewContainer}>
        <h1 className={style.View_h1}>Information About Travel At Once</h1>
        <div className={style.View_box}></div>
      </div>
      <div className={style.View_Shadow}></div>
    </section>
  );
};
export default View;
