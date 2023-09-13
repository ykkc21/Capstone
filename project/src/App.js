import style from "../src/styles/App.module.css";
import React, { useEffect, Fragment } from "react";
function App() {
  // useEffect(() => {
  //   fetch("http://localhost:8080/api")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  return (
    <Fragment>
      <header className={style.Header}>
        <div className={style.Header_container}>
          <div className={style.Header_Logo}>
            <a className={style.Header_Logo_a} href="/">
              LOGO
            </a>
          </div>
          <ul className={style.Header_ul}>
            <li className={style.Header_li}>
              <a href="/" className={style.Header_a}>
                TraveList
              </a>
            </li>
            <li className={style.Header_li}>
              <a href="/" className={style.Header_a}>
                Hotel
              </a>
            </li>
            <li className={style.Header_li}>
              <a href="/" className={style.Header_a}>
                AirlineTicket
              </a>
            </li>
          </ul>
          <a href="/" className={style.Header_Login}>
            Sing in
          </a>
        </div>
      </header>
      <section className={style.View}>
        <div className={style.View_Shadow}></div>
      </section>
    </Fragment>
  );
}

export default App;
