import { React, Fragment } from "react";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <Fragment>
      <div className={style.Footer}>
        <div className={style.FooterConainer}>
          <p>&copy; 2023 인하공업전문대학.202145024_간영훈</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
