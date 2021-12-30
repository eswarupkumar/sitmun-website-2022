import React from "react";
import TinySlider from "tiny-slider-react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "react-bootstrap";
import Italy from "../../img/Italy.png";
import mountain from "../../img/mountain.jpg";
import mountain2 from "../../img/mountain2.jpg";
import mountain3 from "../../img/mountain3.jpg";
import mountain4 from "../../img/mountain4.webp";
import mountain5 from "../../img/mountain5.jpg";
import mountain6 from "../../img/mountain6.jpg";
import mountain7 from "../../img/mountain7.webp";
import mountain8 from "../../img/mountain8.jpg";
import mountain9 from "../../img/mountain9.jpeg";
import mountain10 from "../../img/mountain10.jpg";
import UnderLine from "../common/UnderLine";

import "../../css/gallery.css";

function Gallery() {
  const imgs = [
    Italy,
    mountain,
    mountain2,
    mountain3,
    mountain4,
    mountain5,
    mountain6,
    mountain7,
    mountain8,
    mountain9,
    mountain10,
  ];
  const loadingImage =
    "data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

  const settings = {
    gutter: 2,
    edgePadding: 29,
    slideBy: 1,
    center: true,
    lazyload: true,
    arrowKeys: true,
    mouseDrag: true,
    container: ".slider",
    controlsPosition: "bottom",
    nav: true,
    navPosition: "bottom",
    // navContainer: "#customize_thumbnails",
    navAsThumbnails: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    autoWidth: true,
    container: ".silder",
    controlsContainer: "#custom-control",
    items: 3,
    autoplay: true,
    autoplayTimeout: 2000,
    controls: true,
    swipeAngle: false,
    speed: 400,

    responsive: {
      300: {
        items: 1,
      },
      450: {
        items: 1,
        autoWidth: false,
      },
      700: {
        items: 2,
        center: true,
      },
      800: {
        items: 5,
      },
    },
  };
  const clickEvent = (slide) => {
    console.log(slide);
  };
  return (
    <>
      <div className="heading" id="gallary">
        <h2>GALLERY</h2>
        <UnderLine />
      </div>
      <Container className="container">
        <ul className="control" id="custom-control">
          <li className="prev">
            <ArrowBackIosNewIcon />
          </li>
          <li className="next">
            <ArrowForwardIosIcon />
          </li>
        </ul>

        <div className="sponsor-slider slider">
          <TinySlider settings={settings} onInit={clickEvent}>
            {imgs.map((el, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  className={`tns-lazy-img`}
                  src={loadingImage}
                  data-src={el}
                  alt="gallery"
                />
              </div>
            ))}
          </TinySlider>
        </div>
        {/* <div className="thumbnail_img ">
          <ul>
            <img src={Italy} />
            <img src={mountain} />
            <img src={mountain2} />
            <img src={mountain3} />
            <img src={mountain4} />
            <img src={mountain5} />
            <img src={mountain6} />
            <img src={mountain7} />
            <img src={mountain8} />
            <img src={mountain9} />
            <img src={mountain10} />
          </ul>
        </div> */}
      </Container>
    </>
  );
}

export default Gallery;
