"use client";
import Image from "next/image";
import Footer from "./Footer";
import { useState } from "react";

export default function Notification() {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        {/* Top navigation */}
        <div className="flex border-b">
          <button
            onClick={() => setSelectedTab(1)}
            className={`flex-1 py-3 border-b-2 ${
              selectedTab === 1
                ? "text-blue-500 border-blue-500"
                : " text-gray-500 border-transparent"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={`flex-1 py-3 border-b-2 ${
              selectedTab === 2
                ? "text-blue-500 border-blue-500"
                : " text-gray-500 border-transparent"
            }`}
          >
            Cộng đồng
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/images/notify.webp"
              alt="Globe with person"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-500 text-center">Chưa có thông báo</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
