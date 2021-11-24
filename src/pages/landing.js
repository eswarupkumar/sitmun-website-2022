import NavbarSection from "../components/common/navbar";
import HeroSection from "../components/landing/hero";
import WhyUs from "../components/landing/WhyUs";
import AboutUs from "../components/landing/AboutUs";

function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Mun Website</h1> */}
      <NavbarSection />
      <HeroSection />

      <WhyUs />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
