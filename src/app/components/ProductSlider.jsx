"use client";

import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

const ProductSlider = ({ title, products, categorySlug }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollAmount = direction === 'left' 
        ? container.scrollLeft - 300 
        : container.scrollLeft + 300;
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <Link href={`/category/${categorySlug}`} className="text-green-600 text-sm font-medium">see all</Link>
      </div>
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hidden md:block hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        {/* Product Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => (
            <div key={product.id} className="flex-none w-40 md:w-48 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hidden md:block hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;

// Add this style to your global CSS file to hide scrollbars
// .hide-scrollbar::-webkit-scrollbar {
//   display: none;
// } 