"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: ["400"], subsets: ["latin"] });
export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchVisible && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchVisible]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div>
      <div className="bg-white p-4 flex justify-between items-center shadow-md relative z-10">
        <div className="flex items-center space-x-4">
          <Image src="/images/menu-icon.png" width={24} height={24} alt="" />
          <h1
            className={`${lobster.className} text-blue-600 text-2xl font-bold`}
          >
            Dreamland
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
              isSearchVisible ? "text-blue-600" : ""
            }`}
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src="/images/user.png"
              alt="User Avatar"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>

      {/* Animated Search Input */}
      <div
        className={`
          fixed top-0 left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out z-20
          ${
            isSearchVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        <div className="container mx-auto px-4 py-3 flex items-center">
          <input
            ref={searchRef}
            type="text"
            placeholder="Tìm kiếm bất động sản..."
            className="w-full p-2 pl-4 rounded-full border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
          <button
            onClick={toggleSearch}
            className="ml-2 text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
