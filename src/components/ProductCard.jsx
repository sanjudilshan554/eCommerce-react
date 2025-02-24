import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer m-4 transition-transform hover:scale-105 duration-300 bg-white w-72 h-96 flex flex-col">
        {/* Image Section */}
        <div className="h-40 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="font-bold text-lg text-gray-900 truncate">
            {product.title}
          </div>
          <div className="mt-2 text-gray-600 text-sm line-clamp-3">
            {product.description}
          </div>
          <hr className="border-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full my-3" />
          
          {/* Price & Button Section */}
          <div className="flex justify-between items-center mt-auto">
            <div className="font-semibold text-lg text-blue-600">
              ${product.price}
            </div>
            <div className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
              View Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
