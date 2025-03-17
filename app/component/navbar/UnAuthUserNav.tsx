import Link from "next/link";
import React from "react";

interface UnAuthenticatedProps {
  setToggleMenu: (toggleMenu: boolean) => void;
  toggleMenu: boolean;
  path: string;
}

const UnAuthUserNav: React.FC<UnAuthenticatedProps> = ({
  setToggleMenu,
  toggleMenu,
  path,
}) => {
  return (
    <div className="mx-auto w-full h-[45px] sm:h-[55px] flex items-center flex-row justify-between p-0">
      <div className="w-full flex items-left sm:items-center">
        <Link href={"/"} className="text-[#111111]">
          <img
            src={"/image/CyberCraft-Bangladesh.png"}
            alt="CyberCraft-Bangladesh"
            className="w-[90px] h-[40px] sm:w-[118px] sm:h-[52px]"
          />
        </Link>
      </div>

      <div className="flex w-full relative">
        <div className="absolute top-[-14px] right-0">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-[#111111] cursor-pointer sm:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <ul className="hidden flex-row w-full justify-start sm:justify-end sm:flex text-[#111111] space-x-2">
          <li className="flex items-center justify-center">
            <Link
              href="/"
              className={`border hover:border-[#111111] py-1 px-2 rounded-md ${
                path === "/" ? "border-[#111111]" : "border-transparent"
              }`}
            >
              Contactus
            </Link>
          </li>

          <li className="flex items-center justify-center">
            <Link
              href="/signup"
              className={`border hover:border-[#111111] py-1 px-2 rounded-md ${
                path === "/signup" ? "border-[#111111]" : "border-transparent"
              }`}
            >
              Signup
            </Link>
          </li>

          <li className="flex items-center justify-center">
            <Link
              href="/login"
              className={`border hover:border-[#111111] py-1 px-2 rounded-md ${
                path === "/login" ? "border-[#111111]" : "border-transparent"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>

        {toggleMenu && (
          <div className="flex flex-col w-full absolute right-0 top-6 bg-white min-w-[100px] max-w-[120px] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg sm:hidden">
            <Link
              href="/"
              className={`transition bg-gray-100 rounded border border-transparent hover:border hover:border-[#111111] hover:text-[#111111] w-full h-full py-1 px-2 font-normal border border-transparent hover:border-[#111111] ${
                path === "/" ? "border-[#111111] text-[#111111]" : ""
              }`}
            >
              Contactus
            </Link>

            <Link
              href="/signup"
              className={`transition bg-gray-100 rounded border border-transparent hover:border hover:border-[#111111] hover:text-[#111111] w-full h-full py-1 px-2 font-normal border border-transparent hover:border-[#111111] ${
                path === "/signup" ? "border-[#111111] text-[#111111]" : ""
              }`}
            >
              Signup
            </Link>

            <Link
              href="/login"
              className={`transition bg-gray-100 rounded border border-transparent hover:border hover:border-[#111111] hover:text-[#111111] w-full h-full py-1 px-2 font-normal border border-transparent hover:border-[#111111] ${
                path === "/login" ? "border-[#111111] text-[#111111]" : ""
              }`}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnAuthUserNav;
