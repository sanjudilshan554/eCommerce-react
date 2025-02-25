import { LucideShoppingCart } from "lucide-react";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice"; 

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  const memoizedProduct = useMemo(() => product, [product]);

  if (!memoizedProduct) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(memoizedProduct)); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="mb-8 inline-block text-blue-500">
        Back to Products
      </Link>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded w-full md:w-[600px]">
          <img
            src={memoizedProduct.image}
            alt={memoizedProduct.title}
            className="w-full h-full object-cover rounded"
            loading="lazy"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{memoizedProduct.title}</h1>
          <p className="text-gray-600 mb-6">{memoizedProduct.description}</p>

          <div className="mb-6">
            <span className="text-3xl font-bold">${memoizedProduct.price}</span>
          </div>

          <div className="mb-6">
            <span className="font-semibold mr-2">Category:</span>
            <span>{memoizedProduct.category}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300 w-full md:w-auto"
          >
            <LucideShoppingCart className="w-6 h-6 text-gray-700" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
