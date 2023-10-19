import { React, Fragment, useEffect } from "react";
import style from "../styles/Admin.module.css";
import Button from "../constants/button";
import ItemList from "../constants/ItemList";
import SideMenuBar from "../constants/SideMenuBar";

const AdminControll = ({ BtnList, UserList, ShowContent, ShowIdBox }) => {
  return (
    <Fragment>
      <div className={style.warp}>
        <SideMenuBar ShowIdBox={ShowIdBox} BtnTitle={BtnList} />
      </div>
    </Fragment>
  );
};
export default AdminControll;
