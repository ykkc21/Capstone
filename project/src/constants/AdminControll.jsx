import { React, Fragment, useEffect } from "react";
import style from "../styles/AdminControl.module.css";
import SideMenuBar from "../constants/SideMenuBar";
import ListPlate from "./ListPlate";

const AdminControll = ({ BtnList, UserList, ShowContent, ShowIdBox }) => {
  return (
    <Fragment>
      <div className={style.warp}>
        <SideMenuBar ShowIdBox={ShowIdBox} BtnTitle={BtnList} />
        <ListPlate />
        {/* <div className={style.MainPlate}>

        </div> */}
      </div>
    </Fragment>
  );
};
export default AdminControll;
