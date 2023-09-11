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
        <h1 className={style.header_logo}>LOGO</h1>
        <ul className={style.header_ul}>
          <li className={style.header_li}>
            <a className={style.header_a} href="https://www.naver.com">
              텍스트
            </a>
          </li>
          <li className={style.header_li}>
            <a className={style.header_a} href="/">
              텍스트
            </a>
          </li>
          <li className={style.header_li}>
            <a className={style.header_a} href="/">
              텍스트
            </a>
          </li>
          <li className={style.header_li}>
            <a className={style.header_a} href="/">
              텍스트
            </a>
          </li>
          <li className={style.header_li}>
            <a className={style.header_a} href="/">
              텍스트
            </a>
          </li>
        </ul>
      </header>
      <section className={style.View}></section>
    </Fragment>
  );
}

export default App;
