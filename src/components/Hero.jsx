import React from "react";

import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container ">
        <div className="hero-half-section">
          <Hero1 />

          <div className=" hero-half-section">
            <Hero2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
