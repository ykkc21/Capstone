import { React, Fragment } from "react";
import style from "../styles/AdminControl.module.css";
import SideMenuBar from "../constants/SideMenuBar";
import ListPlate from "./ListPlate";

const AdminControll = ({
  BtnList,
  AddContentBox,
  CloseContentBox,
  ShowIdBox,
  ShowUpdateUI,
}) => {
  return (
    <Fragment>
      <div className={style.warp}>
        <SideMenuBar ShowIdBox={ShowIdBox} BtnTitle={BtnList} />
        <ListPlate
          title={BtnList}
          ShowContent={AddContentBox}
          CloseContent={CloseContentBox}
          ShowUpdateUI={ShowUpdateUI}
        />
      </div>
    </Fragment>
  );
};
export default AdminControll;
