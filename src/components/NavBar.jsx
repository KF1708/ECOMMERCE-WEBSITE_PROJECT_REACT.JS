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
    <div>
      <div className="navbar-section">
        <div className="container">
          <NavBar1 />
          <div className="w-[1150px] h-[5px] bg-white my-4 mx-auto"></div>
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
