import React from "react";

const ProductDelivery = () => {
  const productsItems = [
    {
      img: "./public/images/shipping truck sign.png",
      alt: "product-delivery-truck-img",
      title: "Free Shipping",
      details: "From $99.00",
      bgColor: "#FFF5D9",
    },
    {
      img: "./public/images/doller sign.png",
      alt: "product-delivery-doller-img",
      title: "Money Guaratee",
      details: "30 Days Back",
      bgColor: "#FDE6E4",
    },
    {
      img: "./public/images/secure sign.png",
      alt: "secure sign img",
      title: "100% Safe",
      details: "Secure Shopping",
      bgColor: "#F5EBFC",
    },
  ];
  return (
    <div>
      <div className="product bg-body-tertiary">
        <div className="container py-5">
          <div className="product-section gap-2">
            {productsItems.map((product, index) => (
              <div
                className={`product-delivery-section d-flex `}
                key={index}
                style={{ backgroundColor: product.bgColor }}
              >
                <img
                  className="product-delivery-img"
                  src={product.img}
                  alt={product.alt}
                />
                <div className="product-delivery-items">
                  <small>
                    <p>{product.title}</p>
                  </small>
                  <h5 className="fw-bold">{product.details}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDelivery;
