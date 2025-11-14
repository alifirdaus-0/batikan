import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded" />
      <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
