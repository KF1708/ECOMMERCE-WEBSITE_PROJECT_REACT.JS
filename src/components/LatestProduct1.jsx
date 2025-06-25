import React from "react";
import { HeartIcon } from "./icon";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LatestProduct1 = () => {
  return (
   
        <div className=" latest-product-list">
          <div className=" position-relative ">
            <div className=" d-grid justify-content-around position-absolute p-3">
              <HeartIcon className="heart-icon-latest-product "></HeartIcon>
              <div className=" text-white hawaiian-details position-absolute  top-25">
                <h4 className=" fw-bold">
                  Hawaiian <br /> Shirts
                </h4>
                <small>
                  <p> Dress up in summmer vibe</p>
                </small>
                <h6 className=" fw-bold">UPTO 50% OFF</h6>
                <ArrowDownOutlined className=" p-3" />

                <br />
                <Button ghost>Shop Now</Button>
              </div>
            </div>
            <img
              className="latest-product-img"
              src="./public/images/HawaiianShirt.png"
              alt="Hawaiian Shirt img"
            />
          </div>
          <div className=" position-relative ">
            <div className=" d-grid justify-content-around  position-absolute p-3">
              <HeartIcon className="heart-icon-latest-product "></HeartIcon>

              <div className=" text-white hawaiian-details">
                <Button
                  style={{ backgroundColor: "rgb(58, 56, 56)" }}
                  className=""
                  type="primary"
                >
                  Limited Stock
                </Button>

                <h4 className=" fw-bold">
                  Raven Hoodie <br /> Design
                </h4>
                <small>
                  <p> New Desgnis Every Week</p>
                </small>
                <h6 className=" fw-bold">UPTO 40% OFF</h6>

                <ArrowDownOutlined className=" p-3" />

                <br />
                <Button ghost>Shop Now</Button>
              </div>
            </div>
            <img
              className="latest-product-img"
              src="./public/images/HoodieDesign.png"
              alt="HoodieDesign img"
            />
          </div>
          <div className=" position-relative ">
            <div className=" d-grid justify-content-around position-absolute p-3">
              <HeartIcon className="heart-icon-latest-product "></HeartIcon>
              <div className="  hawaiian-details">
                <h4 className=" fw-bold">
                  Cargo <br /> Joggers
                </h4>
                <small>
                  <p>Move with style & comfort </p>
                </small>
                <h6 className=" fw-bold">UPTO 50% OFF</h6>
                <ArrowDownOutlined className=" p-3" />
                <br />

                <Button
                  style={{
                    color: "black",
                    border: " solid black",
                  }}
                  ghost
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <img
              className="latest-product-img"
              src="./public/images/CargoJoggers.png"
              alt="CargoJoggers.png img"
            />
          </div>
        </div>
      
  );
};

export default LatestProduct1;
