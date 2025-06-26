// Make sure icon exists!
import Ribbon from "./Ribbon";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { HeartIcon, StarIcon } from "../components/icon";

const FeaturedProducts = () => {
  const products = [
    {
      imgSrc: "/images/T-Shirt img.png",
      alt: "T-shirt image",
      name: "T-Shirt with Tape Details",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "/images/Red-AC-image.png",
      alt: "Red-AC image",
      name: "Latest Mini-Split Systems",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "/images/denim-pants.png",
      alt: "Denim Pants",
      name: "Denim Pants with Comfort Fit",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "/images/Ac-accessories.png",
      alt: "AC Accessories",
      name: "12 FT PVC Decorative Line",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "/images/White-AC.png",
      alt: "White AC",
      name: "Single Zone Mini-Split Systems",
      price: 225.0,
      originalPrice: 300.0,
    },
    {
      imgSrc: "/images/Red-AC-image.png",
      alt: "Red AC",
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
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="swiper-slide m-3 p-2 ">
              <div className="featured-products-items position-relative m-2 p-2">
                <div className="ribbon position-absolute top-0 end-0">
                  <Ribbon />
                </div>
                <div className="heart position-absolute top-2 start-2">
                  <HeartIcon color="black" />
                </div>
                <div className="product-items">
                  <div className="product-image">
                    <img
                      src={product.imgSrc}
                      alt={product.alt}
                      className="featured-products-items-img"
                    />
                  </div>
                  <div>
                    <p className="text-sm" style={{ fontSize: "12px" }}>
                      {product.name}
                    </p>

                    <div className="d-flex justify-content-between">
                      <p>
                        <span className="fw-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="featured-products-items-span text-decoration-line-through ms-2">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </p>

                      <p className="featured-products-items-span">
                        <StarIcon /> (4.9)
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
