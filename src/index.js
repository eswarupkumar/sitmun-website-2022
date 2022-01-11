import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// const LandingPage = lazy(()=>import("./pages/landing"))
// const TeamPage = lazy(()=>import("./pages/ebandteam"))
// const CommitteePage = lazy(()=>import("./pages/committee"))
import LandingPage from "./pages/landing";
import TeamPage from "./pages/ebandteam";
import CommitteePage from "./pages/committee";

// const loadcss = css'display: flex';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/team" element={<TeamPage />} />

      <Route path="/committee" element={<CommitteePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
