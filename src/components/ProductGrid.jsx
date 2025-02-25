import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const products = useSelector((state) => state.products?.filteredItems || []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center">No products found</p>
      )}
    </div>
  );
}

export default ProductGrid;
