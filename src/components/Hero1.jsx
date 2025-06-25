import React from "react";
import { MediumDimondIcon, SmallDimondIcon, VerticalLine } from "./icon";
import { Button } from "antd";

const Hero1 = () => {
  return (
    
        <div className="firstpart-herohalf-section">
          <p style={{ color: "coral", fontWeight: "bold" }}>
            {" "}
            <SmallDimondIcon /> New Arrival <SmallDimondIcon />
          </p>

          <h1 className="primary-heading">
            Shop with Confidence:
            <br /> Trusted Source for, Quality <br /> Products.
          </h1>
          <small>
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              <br />
              incidunt, mollitia corrupti facilis neque blanditiis!
            </p>
          </small>
          <Button
            className="p-3"
            type="primary"
            style={{ backgroundColor: "coral", fontWeight: "600" }}
          >
            Shop Now
          </Button>
          <br />
          <br />
          <div className="d-flex">
            <div className="d-flex gap-4">
              <div>
                <h3>200+</h3>
                <small>
                  <p>Internanational Brands</p>
                </small>
              </div>
              <div>
                <VerticalLine></VerticalLine>
              </div>
              <div className="d-flex gap-4">
                <div>
                  <h3>2,000+</h3>
                  <small>
                    <p>High-Quality Products</p>
                  </small>
                </div>
                <div>
                  <VerticalLine></VerticalLine>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div>
                  <h3>30,000+</h3>
                  <small>
                    <p>Happy Customers</p>
                  </small>
                </div>
                <div>
                  <VerticalLine></VerticalLine>
                </div>
              </div>
            </div>
            <div className="medium-dimond">
              <MediumDimondIcon color="black"></MediumDimondIcon>
            </div>
          </div>
        </div>
  
  );
};

export default Hero1;
