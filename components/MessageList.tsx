"use client";
import chervonDown from "@/components/images/chervon-down.png";
import msgPath from "@/components/images/msg-path.png";
import { messageList } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
export default function MessageList() {
  //   px-4 bg-[#c2d0e4]
  return (
    <>
      <div className="flex flex-col h-screen px-4 bg-[#f5f5f5] py-10">
        {/* Header */}
        <div className="relative px-4">
          <div className="fixed top-0 left-0 -translate-x-[40%] -translate-y-[40%]">
            <Image src={msgPath} alt="" />
          </div>
          <div>
            <p className="text-2xl text-right text-[#3b3b3b]">Tin nhắn</p>
            <hr className="bg-[#3F60A0] h-[2px] w-[50%] translate-x-full mt-10 mb-6" />
            <div className="flex justify-between mb-3">
              <p>Đánh dấu đã đọc</p>
              <p className="flex gap-2 items-center">
                Sort by time <Image src={chervonDown} alt="" />
              </p>
            </div>
          </div>
        </div>
        {/* Messages List */}
        <div className="flex-grow p-4 overflow-y-auto">
          {messageList.map((message, index) => (
            <Link
              href={`/messages/${message.id}`}
              key={index}
              className="flex items-center mb-4 p-2 bg-white rounded-lg shadow-sm"
            >
              <Image
                src={message.avatar}
                alt={message.title}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-grow">
                <h2 className="text-sm font-semibold">{message.title}</h2>
                <p className="text-sm text-gray-500 truncate">
                  {message.content}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400">{message.time}</span>
                {message.unread && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
