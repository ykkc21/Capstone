import style from "../src/styles/App.module.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import React, { useEffect, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
