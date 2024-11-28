import React from "react";

import { Button, Card } from "antd";
import SuperProduct1 from "./SuperProduct1";

const SuperTrendyProducts = () => {
  return (
    <div>
      <div className="super-trendy-products bg-body-tertiary p-4">
        <div className=" container ">
          <h2 className="fw-bold text-center p-4 m-2">Super Trendy Product</h2>
          <SuperProduct1 />
          <Button
            className=" super-btn text-center p-2 m-2"
            style={{ fontSize: "12px" }}
            type="primary"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuperTrendyProducts;
