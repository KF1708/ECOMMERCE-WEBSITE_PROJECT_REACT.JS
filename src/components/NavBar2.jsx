import { DownArrowIcon } from "./icon";
import { Button, Dropdown } from "antd";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const NavBar2 = () => {
  return (
    <div className=" navbar-lower-section position-relative">
      <div className="d-flex justify-content-between ">
        <div>
          {/* <NavBarIcon className=" p-4 m-4" /> */}
          <Button type="primary" className="category_btn p-3 m-1 gap-3">
            <span>Categories</span> <DownArrowIcon color="white" />
          </Button>
        </div>

        <div className=" text-white">
          <small className="pages_list d-flex">
            <p className=" p-3">Campaigns</p>
            <p className=" p-3">Brands</p>
            <p className=" p-3">Catagories</p>
            <p className=" p-3">Help</p>
            <p className=" p-3">FAQ</p>
          </small>
        </div>
        <Dropdown
          trigger={["click"]}
          className="nav_menu_dropdown_button"
          overlayClassName={"nav_menu_dropdown"}
          // menu={{ items }}
        >
          <span onClick={(e) => e.preventDefault()}>
            <HiMiniBars3CenterLeft size={24} color="white" />
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar2;
