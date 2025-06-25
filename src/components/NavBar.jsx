import { HorizontalLine } from "./Icon";
import Hero from "./Hero";
import ProductDelivery from "./ProductDelivery";
import FeaturedProducts from "./FeaturedProducts";
import LatestProducts from "./LatestProducts";
import SuperTrendyProducts from "./SuperTrendyProducts";
import CatagoryProduct from "./CatagoryProduct";
import ProductGallary from "./ProductGallary";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";

const NavBar = () => {
  return (
    <div className="">
      <div className="navbar-section">
        <div className="container">
          <NavBar1 />
          <div>
            <HorizontalLine
              color="white"
              width="1150px"
              height="5px"
              fill="auto"
            ></HorizontalLine>
          </div>
          <NavBar2 />
        </div>
      </div>
      <Hero />
      <ProductDelivery />
      <FeaturedProducts />
      <LatestProducts />
      <SuperTrendyProducts />
      <CatagoryProduct />
      <ProductGallary />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default NavBar;
