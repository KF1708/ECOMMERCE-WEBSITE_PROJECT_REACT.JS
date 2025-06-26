import Ribbon from "./Ribbon";
import { CompareIcon, HeartIcon, ShareIcon, SmallHeartIcon } from "./icon.jsx";

const SuperProduct1 = () => {
  const itemts = [
    {
      imgSrc: "/images/image 1.png",
      alt: "Respira",
      title: "Respira",
      name: "Outdoor bar table and stool",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/image 2.png",
      alt: "Head Phone img",
      title: "Headphone",
      name: "Mellon's Brand",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/image 3.png",
      alt: "Laptop",
      title: "Laptop",
      name: "HP Brand",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/image 4.png",
      alt: "Leviosa image",
      title: "Leviosa",
      name: "Stylish cafe chair",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/image 5.png",
      title: "Barboreal Gray Sweates...",
      alt: "White-AC image",
      name: "Single Zone Mini-Split systems",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/image 6.png",
      alt: "Pingky",
      title: "Pingky",
      name: "Cute bed set",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/images  7.png",
      alt: "Respira",
      title: "Respira",
      name: "Outdoor bar table and stool",
      price: 2500.0,
      originalPrice: 3500.0,
    },
    {
      imgSrc: "/images/images  8.png",
      alt: "Phone",
      title: "Phone",
      name: "One Pluse 8 Pro",
      price: 2500.0,
      originalPrice: 3500.0,
    },
  ];
  return (
    <div>
      <div>
        <div className=" super-trendy-products-section">
          {itemts.map((product, index) => (
            <div
              className=" super-trendy-products-items  position-relative"
              key={index}
            >
              <div className="ribbon-top  position-absolute top-0 end-0">
                <Ribbon />
              </div>
              <div className="ribbon-top position-absolute ">
                <HeartIcon color="black" />
              </div>

              <div className=" position-relative">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 hover-opacity-100">
                  <div>
                    <button
                      className=" rounded-3 w-100 p-2 m-2"
                      style={{ color: "coral", fontWeight: "bold" }}
                    >
                      Add to cart
                    </button>
                    <div className=" d-flex gap-2">
                      <div className=" d-flex">
                        <ShareIcon />
                        <p
                          style={{
                            fontSize: "13px",
                            padding: "2px",
                            color: "coral",
                            fontWeight: "bold",
                          }}
                        >
                          Share
                        </p>
                      </div>
                      <div className=" d-flex">
                        <CompareIcon />
                        <p
                          style={{
                            fontSize: "13px",
                            padding: "2px",
                            color: "coral",
                            fontWeight: "bold",
                          }}
                        >
                          Compare
                        </p>
                      </div>
                      <div className=" d-flex">
                        <SmallHeartIcon />
                        <p
                          style={{
                            fontSize: "13px",
                            padding: "2px",
                            color: "coral",
                            fontWeight: "bold",
                          }}
                        >
                          Like
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={product.imgSrc}
                  alt={product.alt}
                  className="super-trendy-products-items-img"
                />
                <h5 className=" m-2">{product.title}</h5>
                <p className=" text-sm m-2" style={{ fontSize: "12px" }}>
                  {product.name}
                </p>

                <div className="d-flex justify-content-between ">
                  <p className=" m-2">
                    <span className="fw-bold">
                      {" "}
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="super-trendy-products-items-span text-decoration-line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperProduct1;
