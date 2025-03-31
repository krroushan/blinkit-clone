"use client";

// ProductCard.jsx

import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-3 w-full border border-gray-100">
      {/* Delivery Time Badge */}
      <div className="mb-2 flex items-center">
        <div className="bg-white rounded-full py-0.5 px-2 text-[10px] flex items-center shadow-sm text-gray-600 border border-gray-100 w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-gray-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
          </svg>
          {product.deliveryTime} MINS
        </div>
      </div>

      {/* Product Image */}
      <div className="relative w-full h-48 mb-3 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={270}
          height={270}
          className="object-contain max-h-full"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-1">
        <h3 className="font-medium text-sm text-gray-800 line-clamp-2 h-10">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.quantity}</p>
        <div className="flex justify-between items-center pt-1">
          <span className="font-semibold text-sm">₹{product.price}</span>
          <button className="text-green-600 font-semibold text-xs border border-green-600 rounded px-3 py-1 hover:bg-green-50">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
