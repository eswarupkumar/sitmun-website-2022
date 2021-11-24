import React from "react";
import "../../css/hero.css";
// import video from "../../img/video.mp4";
import img from "../../img/logo.png";
import img1 from "../../img/Italy.png";
import img2 from "../../img/logo.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
// import "swiper/modules/pagination/pagination.scss";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

function HeroSection() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSection;
