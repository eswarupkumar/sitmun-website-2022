import NavbarSection from "../components/common/navbar";
import HeroSection from "../components/landing/hero";
import Countdown from "../components/landing/Countdown";
import AboutUs from "../components/landing/AboutUs";
import Faq from "../components/landing/Faq";
import Footer from "../components/common/Footer";
import Sponsor from "../components/landing/Sponsor";
import Gallery from "../components/landing/Gallery";
import WhenWhere from "../components/landing/WhenWhere";
import WhyChooseUs from "../components/landing/WhyChooseUs";
function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Mun Website</h1> */}
      <NavbarSection />
      <HeroSection />
      <Countdown />
      <AboutUs />
      <WhenWhere/>
      <Gallery/>
      {/* <WhyChooseUs/> */}
      <Faq />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default LandingPage;
