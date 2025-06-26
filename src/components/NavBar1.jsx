import { Input } from "antd";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
const NavBar1 = () => {
  return (
    <div className="navbar-upper-section gap-5 py-3">
      <div className="navbar_logo">
        <img src="/icons/logo_white 1.svg" alt="logo" />
      </div>
      <div className="navbar-upper-section gap-3">
        <div className="search-input">
          <Input
            placeholder="Search"
            className="navbar-scarchbar"
            prefix={<Search color="gray" />}
            style={{ backgroundColor: "rgb(97, 93, 93)", color: "gray" }}
          />
        </div>

        <div className="navbar-upper-section gap-5">
          <ShoppingCart color="white" />
          <User color="white" />
        </div>
      </div>
    </div>
  );
};

export default NavBar1;
