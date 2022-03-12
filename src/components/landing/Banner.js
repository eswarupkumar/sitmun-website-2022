import React, { useState } from "react";
import banner from "../../img/banner.svg";
import "../../css/banner.css";

function Banner() {
  const [scroll, setScroll] = useState(false);
  const setBanner = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", setBanner);
  return (
    <>
      {scroll !== true && (
        <div className="banner-div">
          <img src={banner} alt="banner" />
          <div className="banner-img-div">
            <p> SITMUN 2022 is LIVE 🤩! </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
