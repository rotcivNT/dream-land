"use client";
import Link from "next/link";
import {
  HomeIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  CogIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-r from-[#000000] py-4 to-[#3533cd] flex justify-around items-center">
      <Link
        href="/home"
        className={`text-white flex items-center pl-2 pr-4 rounded-full ${
          pathName.includes("home") ? "bg-white" : "bg-[#032b60]"
        }`}
      >
        <div className="p-2 rounded-full flex items-center justify-center">
          <HomeIcon
            className={`w-6 h-6 ${
              pathName.includes("home") ? "text-[#1b1e3f]" : "text-white"
            }`}
          />
        </div>
        <span
          className={`mt-1 font-bold text-xl ${
            pathName.includes("home") ? "text-[#1b1e3f]" : "text-white"
          }`}
        >
          Home
        </span>
      </Link>
      <Link href="/#" className="text-white flex flex-col items-center">
        <div className="bg-[#1b1e3f] border border-white p-2 rounded-full flex items-center justify-center">
          <ShoppingCartIcon className="w-6 h-6 text-white" />
        </div>
      </Link>
      <Link href="#" className="text-white flex flex-col items-center">
        <div className="bg-[#1b1e3f] border border-white p-2 rounded-full flex items-center justify-center">
          <CreditCardIcon className="w-6 h-6 text-white" />
        </div>
      </Link>
      <Link href="/messages" className="text-white flex flex-col items-center">
        <div
          className={`${
            !pathName.includes("messages")
              ? "bg-[#1b1e3f] border border-white"
              : "bg-white"
          } p-2 rounded-full flex items-center justify-center`}
        >
          <ChatBubbleOvalLeftIcon
            className={`w-6 h-6 ${
              pathName.includes("messages") ? "text-[#1b1e3f]" : "text-white"
            }`}
          />
        </div>
      </Link>
      <Link href="#" className="text-white flex flex-col items-center">
        <div className="bg-[#1b1e3f] border border-white p-2 rounded-full flex items-center justify-center">
          <CogIcon className="w-6 h-6 text-white" />
        </div>
      </Link>
      <Link
        href="/notifications"
        className="text-white flex flex-col items-center"
      >
        <div
          className={`${
            !pathName.includes("notifications")
              ? "bg-[#1b1e3f] border border-white"
              : "bg-white"
          } p-2 rounded-full flex items-center justify-center`}
        >
          <BellIcon
            className={`w-6 h-6 ${
              pathName.includes("notifications")
                ? "text-[#1b1e3f]"
                : "text-white"
            }`}
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
