import { projects } from "@/data";
import { Lobster } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DreamlandList from "./DreamlandList";

const lobster = Lobster({ weight: ["400"], subsets: ["latin"] });

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  distance: string;
  id: string;
}

const PropertyCard = ({
  image,
  title,
  location,
  distance,
  id,
}: PropertyCardProps) => (
  <Link
    href={`/home/${id}`}
    className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
  >
    <Image
      src={image}
      alt={title}
      layout="responsive"
      width={100}
      height={100}
      className="object-cover"
    />
    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
      {distance} tỷ
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
      <h3 className="text-white text-sm font-semibold">{title}</h3>
      <p className="text-white text-xs">{location}</p>
    </div>
  </Link>
);

export default function DreamlandApp() {
  return (
    <div className="pt-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000000] to-[#3533cd] rounded-xl p-6 mb-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${lobster.className} font-bold text-2xl mb-2`}>
              Dreamland <br />
              chạm để mở tương lai
            </h2>
            <p className="text-sm mt-2 max-w-xs">
              Hãy để chúng tôi giúp bạn hiện thực hóa giấc mơ
            </p>
          </div>
          <Image
            src="/images/header-image.png"
            alt=""
            width={120}
            height={120}
            className="object-cover rounded-full"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-2 justify-center mb-6 overflow-x-auto">
        <button className="bg-[#032b60] text-white font-bold px-4 py-2 rounded-full text-sm shadow-md hover:bg-[#021c3d] transition-colors duration-300">
          Gần bạn
        </button>
        <button className="bg-white text-[#032b60] border-2 border-[#032b60] px-3 py-2 rounded-full text-sm hover:bg-[#032b60] hover:text-white transition-colors duration-300">
          Thịnh hành
        </button>
        <button className="bg-white text-[#032b60] border-2 border-[#032b60] px-3 py-2 rounded-full text-sm hover:bg-[#032b60] hover:text-white transition-colors duration-300">
          Giá tốt
        </button>
        <button className="bg-white text-[#032b60] border-2 border-[#032b60] px-3 py-2 rounded-full text-sm hover:bg-[#032b60] hover:text-white transition-colors duration-300">
          Thêm
        </button>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-2 gap-6 mb-5">
        {projects.map((item) => (
          <PropertyCard
            id={item.id}
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </div>
      <DreamlandList />
    </div>
  );
}
