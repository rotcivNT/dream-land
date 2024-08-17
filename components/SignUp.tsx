import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="bg-gradient-to-b from-[#c2d0e4] to-[#e8f0fe] min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 relative w-40 h-40 mx-auto">
          <Image
            src="/images/logo.png"
            fill
            alt="Logo"
            className="object-contain"
          />
        </div>
        <h3 className="text-[#2c3e50] text-4xl font-bold text-center mb-2">
          ĐĂNG KÝ
        </h3>
        <p className="text-sm uppercase text-[#34495e] text-center tracking-[2px] mb-8">
          Tạo tài khoản mới
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <button className="w-full h-12 bg-[#3498db] text-white font-semibold rounded-full shadow-md hover:bg-[#2980b9] transition duration-200 ease-in-out">
            Đăng ký
          </button>
        </div>
        <p className="text-center mt-6 text-[#7f8c8d]">
          Đã có tài khoản?{" "}
          <Link href="/auth/sign-in" className="text-[#3498db] hover:underline">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
