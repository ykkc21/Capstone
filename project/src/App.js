import "../src/styles/App.css";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>React Start</h1>
      <h2>내일 할일 메인 페이지 디자인 틀 짜기</h2>
      <h2>나머지 웹 서비스 정의하기</h2>
    </div>
  );
}

export default App;
