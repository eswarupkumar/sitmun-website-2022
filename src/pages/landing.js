import NavbarSection from "../components/common/navbar";
import HeroSection from "../components/landing/hero";
import AboutUs from "../components/landing/AboutUs";
import Faq from "../components/landing/Faq";
import Footer from "../components/common/Footer";
import Sponsor from "../components/landing/Sponsor";

function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Mun Website</h1> */}
      <NavbarSection />
      <HeroSection />


      <AboutUs />
      <Faq />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default LandingPage;
