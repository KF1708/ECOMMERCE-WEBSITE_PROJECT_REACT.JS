import { Button } from "antd";

import LatestProduct1 from "./LatestProduct1";
import LatestProduct2 from "./LatestProduct2";

const LatestProducts = () => {
  return (
    <div className="latest-product  bg-body-secondary">
      <div className=" container ">
        <div className=" py-5 m-2">
          <div className=" latest-product-heading d-flex justify-content-between">
            <h3 className="fw-bold">Latest Products</h3>
            <Button className="p-1" style={{ fontSize: "13px" }} type="primary">
              View More
            </Button>
          </div>
          <LatestProduct1 />
          <LatestProduct2 />
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
