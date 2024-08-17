"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-loader-circle animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 giây

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/images/upgrade.webp"
              alt="Globe with person"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-500 text-center">
            Chức năng đang được phát triển
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
