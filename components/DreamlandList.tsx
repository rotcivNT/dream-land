import Image from "next/image";
import dx1 from "@/components/images/dx-1.png";
import dx2 from "@/components/images/dx-2.png";
import dx3 from "@/components/images/dx-3.png";
import dx4 from "@/components/images/dx-4.png";

export default function DreamlandList() {
  const categories = [
    { name: "Nhà mặt đất", icon: "/images/detail-1.png" },
    { name: "Chung cư", icon: "/images/detail-2.png" },
    { name: "Shophouse", icon: "/images/detail-3.png" },
    { name: "Nhà phố", icon: "/images/detail-4.png" },
    { name: "Biệt thự liền kề", icon: "/images/detail-5.png" },
    { name: "Căn hộ", icon: "/images/detail-6.png" },
    { name: "Đất nền", icon: "/images/detail-7.png" },
    { name: "See all", icon: "/images/detail-8.png" },
  ];
  const commonProject = [
    { name: "The sola park", image: "/images/pb-1.png" },
    { name: "Tây Hồ", image: "/images/pb-2.png" },
    { name: "Shophouse Oceanpark", image: "/images/pb-3.png" },
  ];
  const recommendedProject = [
    { name: "The sola park", image: dx1 },
    { name: "Tây Hồ", image: dx2 },
    { name: "Shophouse Oceanpark", image: dx3 },
    { name: "Shophouse Oceanpark", image: dx4 },
  ];
  return (
    <div className="p-4 min-h-screen">
      {/* category */}
      <div>
        <p className="flex justify-between items-center mb-4">
          <span className="font-bold">Phân loại</span>
          <button className="text-[#032b60] transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </p>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#032b60] size-[60px] flex items-center justify-center rounded-full">
                <Image
                  src={category.icon}
                  width={40}
                  height={40}
                  alt=""
                  className="size-10 object-contain"
                />
              </div>
              <span className="mt-2 text-center text-xs">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* common project */}
      <div className="my-6">
        <p className="flex justify-between items-center mb-4">
          <span className="font-bold">Dự án phổ biến</span>
          <button className="text-[#032b60] transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </p>
        <div className="flex gap-4 items-start overflow-x-auto">
          {commonProject.map((project, index) => (
            <div
              key={index}
              className="basis-1/3 w-1/3 flex flex-col items-center"
            >
              <div className="relative size-full pt-[100%]">
                <Image
                  src={project.image}
                  fill
                  alt=""
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-center text-xs">{project.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* recommend project */}
      <div className="my-6">
        <p className="flex justify-between items-center mb-4">
          <span className="font-bold">Đề xuất</span>
          <button className="text-[#032b60] transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </p>
        <div className="flex items-start flex-wrap">
          {recommendedProject.map((project, index) => (
            <div key={project.name} className="basis-1/2 p-[6px]">
              <Image
                src={project.image}
                // fill
                alt=""
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
