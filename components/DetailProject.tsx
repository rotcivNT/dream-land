"use client";
import Image from "next/image";
import { useState } from "react";
import dp1 from "@/components/images/dp-1.png";
import dp2 from "@/components/images/dp-2.png";
import dp3 from "@/components/images/dp-3.png";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data";

export default function DetailProject() {
  const { id } = useParams();
  const currentProject = projects.find((item) => item.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const router = useRouter();

  const handleButtonClick = (content: string) => {
    setIsModalOpen(true);
    setIsLoading(true);
    setModalContent(""); // Clear previous content

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      setModalContent(content); // Set the content after loading
    }, 1000); // 1 seconds loading
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onRedirect = (url: string) => {
    router.push(url);
  };

  if (!currentProject) return null;

  return (
    <div className="pt-4 pb-16">
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => onRedirect("/home")}
          className="text-2xl text-white bg-[#032b60] size-8 flex justify-center items-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <h1 className="text-lg font-bold">{currentProject.title}</h1>
        <button className="text-2xl text-white bg-[#032b60] size-8 flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart relative left-[-1px]"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        {/* Main Image */}
        <div className="w-full relative pt-[100%] rounded-lg overflow-hidden">
          <Image
            src={currentProject.image}
            alt="Main Property"
            fill
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-between mt-4 space-x-2">
          <div>
            <Image src={dp1} alt="Thumbnail 1" className="object-cover" />
          </div>
          <div>
            <Image src={dp2} alt="Thumbnail 1" className="object-cover" />
          </div>
          <div className="relative">
            <Image src={dp3} alt="Thumbnail 1" className="object-cover" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px]">
              +30
            </span>
          </div>
        </div>

        {/* Property Information */}
        <div className="mt-6">
          <div className="flex flex-col gap-2">
            <button
              className="text-sm w-fit italic text-left text-[#032b60]"
              onClick={() => handleButtonClick("Tính năng đang phát triển")}
            >
              Hình ảnh 3D
            </button>
            <button
              className="text-sm w-fit italic text-left text-[#032b60]"
              onClick={() => handleButtonClick("Tính năng đang phát triển")}
            >
              Hình ảnh VR, thực tế ảo
            </button>
          </div>
          <h2 className="text-xl text-[#232321] font-bold mt-2 flex justify-between items-center">
            {currentProject.title}
            <span className="text-base font-normal">4.560.000.000</span>
          </h2>
          <p className="text-sm text-[#232321] mt-2 flex justify-between">
            The Sola park
            <span>Tầng 12</span>
          </p>
          <p className="text-[#232321] text-sm flex flex-col my-3">
            <span>Diện tích: 80m²</span>
            <span>Hướng: Đông Nam</span>
          </p>
          <p className="text-sm mt-4 text-justify">
            The Sola Park mang đến cho cư dân hệ thống tiện ích đa dạng, đẳng
            cấp, đáp ứng mọi nhu cầu sinh hoạt, giải trí và thư giãn của mọi lứa
            tuổi. Đây là minh chứng cho sự tâm huyết của chủ đầu tư MIK Group
            trong việc kiến tạo một không gian sống hoàn hảo, xứng tầm đẳng cấp.
          </p>
          <button className="text-sm text-blue-600 mt-2">Đọc thêm</button>
        </div>
        <button
          onClick={() => onRedirect("/messages/chatbot")}
          className="bg-[#032b60] w-full py-3 rounded-md text-white text-sm mt-10"
        >
          Tư vấn ngay
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            {isLoading ? (
              <div className="flex justify-center items-center">
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
              </div>
            ) : (
              <div>
                <p className="text-lg text-center">{modalContent}</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md w-full"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
