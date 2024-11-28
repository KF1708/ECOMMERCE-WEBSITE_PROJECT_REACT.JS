import React from "react";
import { DownArrowIcon, NavBarIcon } from "./icon";
import { Button } from "antd";

const NavBar2 = () => {
  return (
    <div>
      <div>
        <div className=" navbar-lower-section">
          <div className="">
            <NavBarIcon className=" p-4 m-4" />
            <Button type="primary" className=" p-3 m-1 gap-3">
              Category <DownArrowIcon color="white" />
            </Button>
          </div>
          <div className=" text-white">
            <small className="navbarlower-section-lastpart d-flex g-3">
              <p>Campaigns</p>
              <p>Brands</p>
              <p>Catagories</p>
              <p>Help</p>
              <p>FAQ</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
