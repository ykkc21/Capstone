import style from "../src/styles/App.module.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Join from "./pages/join";
import React, { useEffect, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
