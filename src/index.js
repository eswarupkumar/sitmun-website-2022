import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/landing";
import TeamPage from "./pages/ebandteam";
import CommitteePage from "./pages/committee";

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
