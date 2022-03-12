import React, { useState, useEffect } from "react";
import NavbarSection from "../components/common/navbar";
import HeroSection from "../components/landing/hero";
import Countdown from "../components/landing/Countdown";
import AboutUs from "../components/landing/AboutUs";
import Faq from "../components/landing/Faq";
import Footer from "../components/common/Footer";
import Sponsor from "../components/landing/Sponsor";
import Gallery from "../components/landing/Gallery";
import WhenWhere from "../components/landing/WhenWhere";
import ScrollTop from "../components/common/ScrollTop";
import RegisterBtn from "../components/landing/Register";
import Banner from "../components/landing/Banner";
import Testimonial from "../components/landing/Testimonial";
import MsgfromSG from "../components/landing/MsgfromSG";
import Query from "../components/common/Query";
import Loading from "../components/common/Loading";
import Advertisement from "../components/landing/Advertisement";
// import Toast from "../components/landing/Toast";
import ConfettiGenerator from "confetti-js";

function LandingPage() {
  React.useEffect(() => {
    const confettiSettings = {
      target: "my-canvas",
      respawn: false,
      max: 270,
      clock: 13,
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    setTimeout(() => {
      confetti.render();
    }, 10000);

    return () => confetti.clear();
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    document.body.style.overflowY = "scroll";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "scroll";
    }, 10000);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* <h1>Welcome to Mun Website</h1> */}
      <canvas
        id="my-canvas"
        style={{ position: "absolute", zIndex: "9" }}
      ></canvas>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Advertisement /> */}
          <NavbarSection />
          {/* <Toast /> */}
        </>
      )}
      <Banner />
      <Query />
      <ScrollTop />
      <HeroSection />
      {/* <Countdown /> */}
      <AboutUs />
      <MsgfromSG />
      <WhenWhere />
      <Gallery />
      <Testimonial />
      <Faq />
      <RegisterBtn />
      <Sponsor />
      <Footer />
    </>
  );
}

export default LandingPage;
