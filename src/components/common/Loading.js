import React from "react";
// import loading from "../../img/Bean Eater-1.2s-200px.svg";
import loading from "../../img/munkee.png";
import "../../css/loading.css";

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Loading;
