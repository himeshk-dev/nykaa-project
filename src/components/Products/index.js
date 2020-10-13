import React, { useRef, useCallback } from "react";
import ProductItem from "./ProductItem";

function Products({ products, setPage, hasMore, loading }) {
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          handleLoadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="Products-container">
      <div className="Products-lists">
        {products?.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <ProductItem
                ref={lastElementRef}
                key={product.id}
                product={product}
              />
            );
          }
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
      {loading && (
        <p style={{ textAlign: "center", margin: "10px" }}>Loading...</p>
      )}
      {!hasMore && (
        <p style={{ textAlign: "center", margin: "10px", color: "#989898" }}>
          That's all folks!
        </p>
      )}
    </div>
  );
}

export default Products;
