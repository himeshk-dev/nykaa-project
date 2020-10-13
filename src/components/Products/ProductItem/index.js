import React, { useState } from "react";
import logo from "../../../assets/nykaa_logo.svg";

const ProductItem = React.forwardRef(({ product }, ref) => {
  const [loaded, setLoaded] = useState(false);
  const imageLoadHandler = () => setLoaded(true);
  const imageErrorHandler = () => setLoaded(false);
  return (
    <div key={product.id} ref={ref} className="Product-item-container">
      <div className="Product-image-container">
        <img
          src={product.imageUrl}
          onLoad={imageLoadHandler}
          onError={imageErrorHandler}
          style={{ display: loaded ? "flex" : "none" }}
          className="Product-image"
          alt={product.title}
        />
        <img
          src={logo}
          style={{
            display: !loaded ? "flex" : "none",
            width: "50%",
          }}
          alt="Nykaa"
          className="Product-image"
        />
      </div>
      <div className="Product-details">
        <h4>{product.title}</h4>
        <p>{product.subTitle}</p>
        <p>
          {product.sizeVariation.map((size, index) => (
            <span key={size.id}>
              {`${size.title}${
                product.sizeVariation.length - 1 === index ? "" : ","
              }
              `}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
});

export default ProductItem;
