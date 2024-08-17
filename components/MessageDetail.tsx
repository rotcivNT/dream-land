"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { messageList, MessageProperty } from "@/data";

const ChatUI = () => {
  const { id } = useParams();
  const router = useRouter();
  const onBack = () => {
    router.push("/messages");
  };
  const [currentMessage, setCurrentMessage] = useState(() =>
    messageList.find((msg) => msg.id === id)
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const onChat = () => {
    if (!input) return;
    if (!currentMessage) return;

    const newChat = {
      isMine: true,
      content: input,
    };

    setInput("");
    setCurrentMessage((prev) => {
      if (!prev) return;
      return {
        ...prev,
        chatList: [...prev.chatList, newChat],
      };
    });

    setTimeout(() => {
      setLoading(true);
    }, 500);

    setTimeout(() => {
      const botChat = {
        isMine: false,
        content: "Xin chào, Tôi có thể giúp gì cho bạn?",
      };
      setLoading(false);
      setCurrentMessage((prev) => {
        if (!prev) return;
        return {
          ...prev,
          chatList: [...prev.chatList, botChat],
        };
      });
    }, 2000);
  };

  if (!currentMessage) return null;

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 flex items-center">
        <button onClick={onBack} className="mr-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">{currentMessage.title}</h1>
        <button className="ml-auto">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </header>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-center text-gray-500 text-sm mb-4">
          {currentMessage.time}
        </div>
        {currentMessage.chatList.map((chat, index) => {
          if (!chat.isMine) {
            return (
              <div key={index} className="flex mb-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 mr-2 overflow-hidden">
                  <Image
                    src={currentMessage.avatar}
                    width={32}
                    height={32}
                    alt="Bot Avatar"
                  />
                </div>
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-[80%]">
                  {chat.content}
                </div>
              </div>
            );
          } else
            return (
              <div key={index} className="flex justify-end mb-4">
                <div className="bg-gray-300 rounded-lg py-2 px-4 max-w-[80%]">
                  {chat.content}
                </div>
              </div>
            );
        })}

        {/* Typing Indicator */}
        {loading && (
          <div className="flex items-center space-x-2">
            {/* Avatar */}
            <div className="relative">
              <Image
                src={currentMessage.avatar}
                width={32}
                height={32}
                alt="User Avatar"
                className="rounded-full"
              />
            </div>
            {/* Typing Indicator */}
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="bg-white p-4 flex items-center relative">
        <input
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChat();
            }
          }}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Nhập tin nhắn tại đây"
          className="flex-1 bg-[#f1f1f1] border rounded-lg p-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Image
          onClick={onChat}
          src="/images/msg-send-icon.png"
          alt=""
          width={24}
          height={24}
          className="size-6 absolute top-1/2 right-10 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default ChatUI;
