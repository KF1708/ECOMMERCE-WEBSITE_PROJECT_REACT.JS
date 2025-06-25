import { Button } from "antd";
import React from "react";

const CatagoryProduct = () => {
  return (
    <div>
      <div className="catagory-product bg-body-secondary">
        <div className=" container">
          <div className="catagory-product-section d-flex py-5">
            <div className=" m-2 p-4">
              <h4 className=" fw-bold">
                50+Beautiful & Modern <br />
                Category Product
              </h4>
              <p className="" style={{ fontSize: "13px" }}>
                Our designer already made a lot of beautiful <br /> prototipe of
                rooms that inspire you
              </p>
              <Button
                className="text-center p-2 m-2"
                style={{ fontSize: "12px" }}
                type="primary"
              >
                Explore More
              </Button>
            </div>
            <div className="p-3 ">
              <img
                className="modern-img"
                src="/images/mordern1.png"
                alt="modern-img"
              />
              <img
                className="modern-img"
                src="/images/mordern2.png"
                alt="modern-img"
              />
              <img
                className="modern-img"
                src="/images/mordern3.png"
                alt="modern-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoryProduct;
