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
      <header className={style.Header}></header>
      <section className={style.View}></section>
    </Fragment>
  );
}

export default App;
