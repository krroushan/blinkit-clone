// Header.jsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const placeholders = [
    'Search "chocolate"',
    'Search for vegetables',
    'Search for medicine',
    'Search "curd"',
    'Search for snacks',
    'Search "bread"',
  ];
  
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [animationState, setAnimationState] = useState('visible'); // 'visible', 'exit', 'enter'
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation (going up)
      setAnimationState('exit');
      
      setTimeout(() => {
        // Change placeholder and prepare for entrance
        setCurrentPlaceholderIndex((prevIndex) => 
          (prevIndex + 1) % placeholders.length
        );
        setAnimationState('enter');
        
        // After a short delay, make the new placeholder visible (coming from down)
        setTimeout(() => {
          setAnimationState('visible');
        }, 50);
      }, 200); // Duration of exit animation
      
    }, 3000); // Change placeholder every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 bg-white h-[86px] border-b border-[#eeeeee]">
      {/* Logo */}
      <div className="flex items-center h-full">
        <Link href="/" className="mr-6">
          <div className="font-bold text-4xl">
            <span className="text-yellow-400">blink</span>
            <span className="text-green-500">it</span>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-[50%] w-[1px] bg-gray-200 mx-6 self-center"></div> 

        {/* Location selector */}
        <div className="flex flex-col">
          <div className="font-semibold text-base text-gray-900">Delivery in 9 minutes</div>
          <div className="flex items-center text-gray-700 text-sm">
            <span>119, Rajeev Nagar, Digha Ghat, P...</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-6">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <input
            type="search"
            className="w-full p-3 pl-10 text-base rounded-lg bg-gray-100 focus:outline-none border border-gray-100 focus:border-gray-200"
            placeholder={placeholders[currentPlaceholderIndex]}
          />
          
          {/* Animated Placeholder Text - positioned absolutely over the input */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {/* Only show this custom placeholder when the input is empty */}
            <div 
              className={`text-gray-500 text-base transition-transform duration-200 ease-in-out ${
                animationState === 'exit' 
                  ? 'transform -translate-y-6 opacity-0' 
                  : animationState === 'enter'
                    ? 'transform translate-y-6 opacity-0' 
                    : 'transform translate-y-0 opacity-100'
              }`}
            >
              {placeholders[currentPlaceholderIndex]}
            </div>
          </div>
        </div>
      </div>

      {/* Login and Cart buttons */}
      <div className="flex items-center">
        <Link href="/login">
          <span className="mr-4 font-medium text-black">Login</span>
        </Link>
        <Link href="/cart">
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            My Cart
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;