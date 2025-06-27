import { Input } from "antd";
import { ProfileIcon, SearchIcon, ShoppingCart } from "./Icon";
import logo from "../public/icons/logo_white 1.svg";

const NavBar1 = () => {
  return (
    <div className="navbar-upper-section gap-5 py-3">
      <div className="navbar_logo">
        <img src={logo} alt="logo" width={150} />
      </div>
      <div className="navbar-upper-section gap-3">
        <div className="search-input">
          <Input
            placeholder="Search"
            className="navbar-scarchbar"
            prefix={<SearchIcon color="gray" />}
            style={{ backgroundColor: "rgb(97, 93, 93)", color: "gray" }}
          />
        </div>

        <div className="navbar-upper-section gap-5">
          <ShoppingCart color="white" />
          <ProfileIcon color="white" />
        </div>
      </div>
    </div>
  );
};

export default NavBar1;
