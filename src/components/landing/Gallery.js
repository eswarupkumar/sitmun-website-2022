import React from "react";
import TinySlider from "tiny-slider-react";
import { Container, Button } from "react-bootstrap";
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
    // loop: true,
    // items: 1,
    // gutter: 15,
    // speed: 200,
    slideBy: 1,
    center: true,
    // autoplay: true,
    lazyload: true,
    arrowKeys: true,
    mouseDrag: true,
    // // container: "#customize",
    // // controlsContainer: "#customize-controls",
    // // navContainer: "#customize-thumbnails",
    // navAsThumbnails: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    // autoplayTimeout: 2000,
    autoWidth: true,
    container: "customize",
    items: 3,
    controls: false,
    navAsThumbnails: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayButton: false,
    swipeAngle: false,
    speed: 400,
    responsive: {
      300: {
        items: 1,
      },
      450: {
        items: 1,
        // center:true,
        autoWidth: false,
      },
      700: {
        items: 2,
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
      <div class="heading">
        <h2>GALLERY</h2>
        <UnderLine />
      </div>
      <Container className="sponsor-div">
        <div className="sponsor-slider slider">
          {/* <Button className="btn btn-primary">prev</Button> */}
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

          {/* <button type="button" onClick={() => this.onGoTo("prev")}>
            Previous
          </button>
          <button type="button" onClick={() => this.onGoTo("next")}>
            Next
          </button> */}
        </div>
      </Container>
    </>
  );
}

export default Gallery;
