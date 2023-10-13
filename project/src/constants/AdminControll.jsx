import { React, Fragment } from "react";
import style from "../styles/Admin.module.css";
import Button from "../constants/button";
import ItemList from "../constants/ItemList";

const AdminControll = ({ BtnList, UserList, ShowContent, ShowIdBox }) => {
  return (
    <Fragment>
      <div className={style.AdminContainer}>
        <button onClick={ShowContent} className={style.AddContent}>
          Add Content
        </button>
        <h1>Home</h1>
        <div className={style.ControllBox}>
          <div className={style.btnbox}>
            {BtnList.map((item, index) => {
              return <Button key={index} name={item} ClickFun={ShowIdBox} />;
            })}
          </div>

          <div className={style.MainListBox}>
            <div id="user" className={`${style.UserList} ${style.List}`}>
              <table border={1}>
                <tbody>
                  <tr>
                    <th>idx</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Emaile</th>
                  </tr>
                </tbody>
              </table>
              {UserList.map((items, index) => {
                return (
                  <ItemList
                    key={index}
                    idx={index}
                    name={items.Name}
                    address={items.Address}
                    phone={items.Phone}
                    email={items.Email}
                  />
                );
              })}
            </div>
            <div
              id="content"
              className={`${style.ContentList} ${style.List}`}
            ></div>
            <div
              id="bulletin"
              className={`${style.BulletinList} ${style.List}`}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AdminControll;
