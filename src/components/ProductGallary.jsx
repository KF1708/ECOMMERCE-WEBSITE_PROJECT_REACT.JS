const ProductGallary = () => {
  return (
    <div className=" bg-body-tertiary p-5">
      <div className=" product-gallery container p-2">
        <h3 className=" text-center p-3 fw-bold">Our Product Gallery</h3>
        <img
          className="product-gallery-img p-3"
          src="/images/ProductGallary.png"
          alt="ProductGallary image"
          style={{ width: "1100px" }}
        />
      </div>
    </div>
  );
};

export default ProductGallary;
