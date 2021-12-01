import NavbarSection from "../components/common/navbar";
import HeroSection from "../components/landing/hero";
import AboutUs from "../components/landing/AboutUs";
import Faq from "../components/landing/Faq";
import Footer from "../components/common/Footer";

function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Mun Website</h1> */}
      <NavbarSection />
      <HeroSection />


      <AboutUs />
      <Faq />
      <Footer />

    </div>
  );
}

export default LandingPage;
