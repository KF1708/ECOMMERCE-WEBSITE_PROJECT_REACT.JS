import { HeartIcon } from "./icon.jsx";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LatestProduct2 = () => {
  return (
    <div className="latest-product-lastpart gap-4">
      <div className=" position-relative ">
        <div className=" d-flex justify-content-around position-absolute p-3">
          <HeartIcon className="heart-icon-latest-product "></HeartIcon>
          <div className="  latest-product-lastpart-details">
            <h4 className=" fw-bold">
              Urban <br /> Shirts
            </h4>
            <small>
              <p>Live in Comfort</p>
            </small>
            <h6 className=" ">FLAT 60% OFF</h6>
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
          className="UrbanShirt-img "
          src="/images/UrbanShirt.png"
          alt="UrbanShirt.pngimg"
        />
      </div>
      <div className=" position-relative">
        <div className=" d-grid justify-content-around position-absolute p-3">
          <HeartIcon className="heart-icon-latest-product "></HeartIcon>
          <img
            className=" modile "
            src="/images/MobilePhone.png"
            alt="MobilePhone img"
          />
          <div className="latest-product-lastpart-details position-absolute p-4">
            <h4 className=" fw-bold">
              Modrden
              <br />
              Mobile Phone
            </h4>
            <small>
              <p>Street Style Icon</p>
            </small>
            <h6 className="">FLAT 60% OFF</h6>
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
          className=" UrbanShirt-img "
          src="/images/MobileBG.png"
          alt="MobilePhone img"
        />
      </div>
    </div>
  );
};

export default LatestProduct2;
