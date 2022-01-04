import React from "react";
import "../../css/hero.css";
import heroVideo from "../../img/hero-video.mp4";
// import video from "../../img/recap.mp4";
// import hero_bg from "../../img/Blob Group.svg";
// // import img1 from "../../img/Italy.png";
// import bg from "../../img/descend-sun@3000x2000px.png";
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
// SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);
SwiperCore.use([EffectFlip]);

function HeroSection() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className="hero-section">
      <div className="hero-wrap"></div>
      <video preload="auto" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
}
//   return (
//     <div data-aos="zoom-in-up" className="hero_page_wrapper">
//       {/* <img src={hero_bg} className="hero_bg" alt="hero_bg" /> */}
//       <div className="hero_page_main">
//         <div className="hero_title_wrapper">
//           <div className="event_name">
//             <p>
//               SITMUN <span className="event_year">2022</span>
//             </p>
//           </div>
//           <div className="why_us">
//             <p>
//               A Place where you
//               <span className="typewriter_class">
//                 <Typewriter
//                   options={{
//                     strings: [
//                       "<b>GET INSPIRED</b>",
//                       "<b>MEET NEW FACES</b>",
//                       "<b>KNOW THE WORLD</b>",
//                     ],
//                     autoStart: true,
//                     loop: true,
//                     pauseFor: 1000,
//                     skipAddStyles: true,
//                   }}
//                 />
//               </span>
//             </p>
//           </div>
//         </div>
//         {/* <Swiper
//           effect={"cards"}
//           grabCursor={true}
//           className="mySwiper"
//           autoplay={{ delay: 1000 }}
//           pagination={{
//             clickable: true,
//           }}
//         >
//           <SwiperSlide>
//             <img
//               className="images"
//               alt="mun_image"
//               src="https://swiperjs.com/demos/images/nature-1.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className="images"
//               alt="mun_image"
//               src="https://swiperjs.com/demos/images/nature-2.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className="images"
//               alt="mun_image"
//               src="https://swiperjs.com/demos/images/nature-3.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className="images"
//               alt="mun_image"
//               src="https://swiperjs.com/demos/images/nature-4.jpg"
//             />
//           </SwiperSlide>
//         </Swiper> */}
//       </div>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#29a0d3"
//           fillOpacity="1"
//           d="M0,224L21.8,229.3C43.6,235,87,245,131,256C174.5,267,218,277,262,282.7C305.5,288,349,288,393,266.7C436.4,245,480,203,524,208C567.3,213,611,267,655,272C698.2,277,742,235,785,218.7C829.1,203,873,213,916,202.7C960,192,1004,160,1047,144C1090.9,128,1135,128,1178,138.7C1221.8,149,1265,171,1309,176C1352.7,181,1396,171,1418,165.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
//         ></path>
//       </svg>
//     </div>
//     // <>
//     //   <video className="videoTag" autoPlay loop muted>
//     //     <source src={video} type="video/mp4" />
//     //   </video>
//     // </>
//   );
// }

export default HeroSection;
