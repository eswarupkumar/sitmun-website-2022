import React from "react";
// import loading from "../../img/Bean Eater-1.2s-200px.svg";
import loading from "../../img/munkee.png";
import "../../css/loading.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loader">
        <img src={loading} alt="loading" />
        <h4>Keep Calm !<br/> MUNKEE is loading the page for you.....</h4>
      </div>
    </div>
  );
}

export default Loading;
