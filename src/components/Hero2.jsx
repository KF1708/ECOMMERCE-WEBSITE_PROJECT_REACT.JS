import { LargerDiamondIcon } from "./Icon";

const Hero2 = () => {
  return (
    <div className=" d-flex">
      <img
        className="hero-half-section-image"
        src="/images/main img.png"
        alt="hero-half-section-image"
      />
      <img
        className="big-sale-img"
        src="./images/BigSale.png"
        alt="big-sale-img"
      />
      <img src="/images/70% Off.png" alt="" />
      <div className="large-dimond">
        {" "}
        <LargerDiamondIcon color="black"></LargerDiamondIcon>
      </div>
    </div>
  );
};

export default Hero2;
