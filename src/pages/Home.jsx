import React from "react";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const categories = [
  "ALl",
  "Graphic Cards",
  "Processors",
  "Motherboards",
  "Memory (RAM)",
  "Storage",
  "Cooling",
  "PC Cases",
  "Peripherals"
];

function Home() {
  return (
    <div>
      <div className="bg"></div>

      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4">
          {categories.map((cat) => {
            return (
              <button
                className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
                key={cat}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
