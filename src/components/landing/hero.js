import React from "react";
import "../../css/hero.css";
import video from "../../img/recap.mp4";
// import img from "../../img/logo.png";
// import img1 from "../../img/Italy.png";
import bg from "../../img/descend-sun@3000x2000px.png";
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Typewriter from "typewriter-effect";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
// SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);
SwiperCore.use([EffectFlip]);

function HeroSection() {
  return (
    <div className="hero_page_wrapper">
      <div className="hero_page_main">
        <div className="hero_title_wrapper">
          <div className="event_name">
            <p>
              SITMUN <span className="event_year">2022</span>
            </p>
          </div>
          <div className="why_us">
            <p>
              A Place where you
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "<b>GET INSPIRED</b>",
                      "<b>MEET NEW FACES</b>",
                      "<b>KNOW THE WORLD</b>",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 1000,
                    skipAddStyles: true,
                  }}
                />
              </span>
            </p>
          </div>
        </div>
        {/* <Swiper
          effect={"cards"}
          grabCursor={true}
          className="mySwiper"
          autoplay={{ delay: 1000 }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <img
              className="images"
              alt="mun_image"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="images"
              alt="mun_image"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="images"
              alt="mun_image"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="images"
              alt="mun_image"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
    // <>
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={video} type="video/mp4" />
    //   </video>
    // </>
  );
}

export default HeroSection;
