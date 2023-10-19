import { React, Fragment } from "react";
import style from "../styles/SideMenuBar.module.css";
import Button from "../constants/button";

const SideMenuBar = ({ BtnTitle }) => {
  return (
    <Fragment>
      <div className={style.SideMenuBar}>
        {BtnTitle.map((item, idx) => {
          return <Button key={idx} name={item.title} icon={item.icon} />;
        })}
      </div>
    </Fragment>
  );
};

export default SideMenuBar;
