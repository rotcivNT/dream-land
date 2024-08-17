"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Loading } from "./Cart";

const Profile = () => {
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

export default Profile;
