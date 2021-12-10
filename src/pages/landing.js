import NavbarSection from "../components/common/navbar";
import HeroSection from "../components/landing/hero";
import Countdown from "../components/landing/Countdown";
import AboutUs from "../components/landing/AboutUs";
import Faq from "../components/landing/Faq";
import Footer from "../components/common/Footer";
import WhenWhere from "../components/landing/WhenWhere";
import Gallery from "../components/landing/Gallery";
import Sponsor from "../components/landing/Sponsor";

function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Mun Website</h1> */}
      <NavbarSection />
      <HeroSection />
      <Countdown />
      {/* <div style={{height: '100vh'}}></div> */}
      <AboutUs />
      <WhenWhere/>
      <Gallery/>
      <Faq />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default LandingPage;
