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
    </div>
  );
}

export default App;
