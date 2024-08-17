'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const onLogin = () => {
    router.push("/home");
  }
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
          WELCOME
        </h3>
        <p className="text-sm uppercase text-[#34495e] text-center tracking-[2px] mb-8">
          Đăng nhập để tiếp tục
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value='admin@dreamland.com'
              placeholder="Email hoặc số điện thoại"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              value="admin"
              placeholder="Mật khẩu"
              className="w-full h-12 bg-white px-4 rounded-full shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            />
          </div>
          <button onClick={onLogin} className="w-full h-12 bg-[#3498db] text-white font-semibold rounded-full shadow-md hover:bg-[#2980b9] transition duration-200 ease-in-out">
            Đăng nhập
          </button>
        </div>
        <div className="mt-6 text-center">
          <Link href="/home" className="text-[#3498db] hover:underline">
            Tiếp tục với tư cách khách
          </Link>
        </div>
        <p className="text-center mt-4 text-[#7f8c8d]">
          Chưa có tài khoản?{" "}
          <Link href="/auth/sign-up" className="text-[#3498db] hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
