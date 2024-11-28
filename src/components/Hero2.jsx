import React from "react";
import { LargerDiamondIcon } from "./icon";

const Hero2 = () => {
  return (
    <div>
      <div>
        <div className="d-flex">
          <img
            className="hero-half-section-image"
            src="./public/images/main img.png"
            alt="hero-half-section-image"
          />
          <img
            className="big-sale-img"
            src="../public/images/BigSale.png"
            alt="big-sale-img"
          />
          <img src="./public/images/70% Off.png" alt="" />
          <div className="large-dimond">
            {" "}
            <LargerDiamondIcon color="black"></LargerDiamondIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
