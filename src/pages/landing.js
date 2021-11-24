import Navbar from "../components/common/navbar";
import AboutUs from "../components/landing/AboutUs";
import HeroSection from "../components/landing/hero";
import WhyUs from "../components/landing/WhyUs";

function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Mun Website</h1> */}
      <Navbar />
      <HeroSection />

      <WhyUs />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
