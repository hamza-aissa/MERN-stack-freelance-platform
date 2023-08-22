import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features/Features";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
const LandingPage = () => {
  return (
    <div className="bg-black">
      <div className=" mx-[50px] ">
        <Hero />

        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
