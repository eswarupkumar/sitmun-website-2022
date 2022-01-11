import React from "react";
import TinySlider from "tiny-slider-react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "react-bootstrap";

import img1 from "../../img/gallery/66.jpg";
import img2 from "../../img/gallery/DSC05175.JPG";
import img3 from "../../img/gallery/DSC05211.JPG";
import img4 from "../../img/gallery/DSC05412.JPG";
import img5 from "../../img/gallery/DSC05453.JPG";
import img6 from "../../img/gallery/DSC05760.JPG";
import img7 from "../../img/gallery/DSC05767.JPG";
import img8 from "../../img/gallery/DSC06129.JPG";
import img9 from "../../img/gallery/DSC_7099.JPG";
import img10 from "../../img/gallery/IMG_0261.JPG";
import img11 from "../../img/gallery/IMG_0523.JPG";

import UnderLine from "../common/UnderLine";
import Heading from "../common/Heading";

import "../../css/gallery.css";
import SlantDiv from "../common/SlantDiv";

function Gallery() {
  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img6,
    img5,
    img7,
    img10,
    img8,
    img9,
    img11,
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
    items: 4,
    autoplay: true,
    autoplayTimeout: 10000,
    controls: true,
    swipeAngle: false,
    speed: 1000,

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
    <div style={{ position: "relative" }}>
      <SlantDiv alt={false} />
      <Container className="container" id="gallery">
        <Heading head="GALLERY" col="light" />
        <ul className="control" id="custom-control">
          <li className="prev">
            <ArrowBackIosNewIcon fontSize="large" />
          </li>
          <li className="next">
            <ArrowForwardIosIcon fontSize="large" />
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
      </Container>
    </div>
  );
}

export default Gallery;
