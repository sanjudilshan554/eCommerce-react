import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link>
      <div className="shadow-lg rounded-md cursor-pointer m-4">
        <div className="p-4">
          <img src={product.image} />
          <div className="font-bold"> {product.title.substring(0, 25) + "..."}</div>
          <div className="mt-4"> {product.description.substring(0, 70) + "..."}</div>
          <div className="flex justify-between mt-4 items-center">
            <div className="mt-4 font-semibold">${product.price}</div>
            <div className="mt-4">View Details</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
