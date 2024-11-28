import { Input } from "antd";
import React from "react";
import {
  DownArrowIcon,
  MoonIcon,
  ProfileIcon,
  SearchIcon,
  ShoppingCart,
} from "./icon";

const NavBar1 = () => {
  return (
    <div>
      <div>
        <div className="navbar-upper-section gap-5 py-3">
          <div>
            <img src="./public/icons/logo_white 1.svg" alt="logo" />
          </div>
          <div className="navbar-upper-section gap-3">
            <div className="search-input">
              <Input
                placeholder="Search"
                className="navbar-scarchbar"
                prefix={<SearchIcon color="gray" />}
              />
            </div>

            <div className="navbar-upper-section gap-5">
              <small>
                {" "}
                <p className="text-white">
                  English <DownArrowIcon color="white" />
                </p>
              </small>
              <MoonIcon color="white" />
              <ShoppingCart color="white" />
              <ProfileIcon color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar1;
