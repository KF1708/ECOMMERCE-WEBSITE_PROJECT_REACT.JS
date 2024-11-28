import React from "react";
import { HeartIcon, StarIcon } from "./icon";
import Ribbon from "./Ribbon";
import SwiperFeatureProducts from "./SwiperFeatureProducts";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
const FeaturedProducts = () => {
  // Define an array of product data
  const products = [
    {
      imgSrc: "./public/images/T-Shirt img.png",
      alt: "T-shirt image",
      name: "T-Shirt with Tape Details",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "./public/images/Red-AC-image.png",
      alt: "Red-AC image",
      name: "Latest Mini-Split Systems",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "./public/images/denim-pants.png",
      alt: "denim-pants image",
      name: "T-Shirt with Tape Details",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "./public/images/Ac-accessories.png",
      alt: "Ac-accessories.png image",
      name: "12 FT PVC DEcorative Line",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "./public/images/White-AC.png",
      alt: "White-AC image",
      name: "Single Zone Mini-Split systems",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "./public/images/Red-AC-image.png",
      alt: "T-shirt image",
      name: "Latest Mini-Split Systems",
      price: 225.0,
      originalPrice: 300.0,
    },
  ];

  return (
    <div className="featured-products-section">
      <div className="container">
        <h3 className="fw-bold text-center p-5">Featured Products</h3>

        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="swiper-slide m-1 p-2">
              <div className="featured-products-items position-relative m-2 p-2">
                <div className=" ribbon position-absolute top-0 end-0">
                  <Ribbon />
                </div>
                <div className=" heart position-absolute top-2 start-2">
                  <HeartIcon color="black" />
                </div>
                <div className="product-items">
                  <div className=" product-image">
                    <img
                      src={product.imgSrc}
                      alt={product.alt}
                      className="featured-products-items-img"
                    />
                  </div>
                  <div>
                    <p className=" text-sm" style={{ fontSize: "12px" }}>
                      {product.name}
                    </p>

                    <div className="d-flex justify-content-between ">
                      <p className="">
                        <span className="fw-bold">
                          {" "}
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="featured-products-items-span text-decoration-line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </p>

                      <p className="featured-products-items-span">
                        {" "}
                        <StarIcon />
                        (4.9)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
