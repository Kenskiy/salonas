import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import './App.css';
import Navbar from "./components/Navbar";
import { RenderContext } from './components/RenderContext';
import ErrorPage from "./components/ErrorPage";
const App = () => {
  const [render, setRender] = useState(false);

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <RenderContext.Provider value={{ render, setRender }}>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </RenderContext.Provider>
    </>
  );
};
export default App;
