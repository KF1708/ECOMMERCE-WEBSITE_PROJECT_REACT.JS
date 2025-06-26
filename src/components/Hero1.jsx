import { Button } from "antd";
import { Gem } from "lucide-react";
import { Diamond } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="firstpart-herohalf-section">
      <p style={{ color: "coral", fontWeight: "bold" }}>
        {" "}
        <Diamond /> New Arrival <Diamond />
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
            <hr />
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
          <Gem />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
