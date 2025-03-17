import Link from "next/link";
import React, { useState } from "react";
import NavSearchBar from "./NavSearchBar";

interface AuthenticatedProps {
  setToggleMenu: (toggleMenu: boolean) => void;
  toggleMenu: boolean;
  path: string;
  toggleUser: boolean;
  setToggleUser: (toggleUser: boolean) => void;
  handleSettings: () => void;
  handleLogout: () => void;
}

const AuthUserNav: React.FC<AuthenticatedProps> = ({
  setToggleMenu,
  toggleMenu,
  path,
  toggleUser,
  setToggleUser,
  handleSettings,
  handleLogout,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="mx-auto full h-[45px] sm:h-[55px] flex items-center flex-row justify-between">
      <div className="flex flex-col items-center justify-between w-full h-full flex-row-reverse sm:flex-row">
        <div className="w-full sm:w-[118px] flex sm:items-end items-center sm:pl-0">
          <Link
            href={"/"}
            className="w-full flex items-center justify-center text-[#111111]"
          >
            <img
              src={"/image/CyberCraft-Bangladesh.png"}
              alt="CyberCraft-Bangladesh"
              className="w-[90px] h-[40px] sm:w-[118px] sm:h-[52px]"
            />
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center h-full relative gap-x-5">
          <button className="w-[45px] h-[45px] text-white cursor-pointer sm:hidden">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="hidden h-full sm:flex items-center justify-between">
            <NavSearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <button className="hidden sm:block w-[24px] h-[26px]">
            <img
              src="/icon/notification-icon.png"
              alt="CyberCraft-Bangladesh-notification-Icon"
            />
          </button>

          {toggleMenu && (
            <div className="flex flex-col w-full absolute left-0 top-9 bg-white min-w-[120px] max-w-[150px] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg sm:hidden">
              <Link
                href="/test"
                className={`transition bg-gray-100 rounded hover:text-white hover:text-white w-full h-full py-1 px-2 font-normal hover:bg-indigo-700 ${
                  path === "/test" ? "bg-indigo-700 text-white" : ""
                }`}
              >
                Other actions
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="relative h-full flex flex-row justify-between ml-5">
        <div className="hidden h-full sm:flex flex-col justify-center gap-y-1 text-nowrap">
          <h2 className="text-[#111111] text-[16px] font-[500] leading-[100%] tracking-[0px] ">
            Arya Stark
          </h2>

          <h3 className="text-[#565656] text-[14px] font-[600] leading-[100%] tracking-[0px]">
            Admin
          </h3>
        </div>

        <button className="size-[45px] text-white ml-2 cursor-pointer">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-full"
            onClick={() => setToggleUser(!toggleUser)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>

        {toggleUser && (
          <div className="flex flex-col absolute right-0 top-[50px] bg-white w-[250px] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg p-4">
            <div className="flex flex-col gap-y-2">
              <span>
                User: <br />{" "}
                <h2 className="text-[#111111] text-[16px] font-[500] leading-[100%] tracking-[0px] ">
                  Arya Stark
                </h2>
              </span>

              <span>
                Designation: <br />{" "}
                <h3 className="text-[#565656] text-[14px] font-[600] leading-[100%] tracking-[0px]">
                  Admin
                </h3>
              </span>
            </div>

            <button
              onClick={() => handleLogout()}
              className="transition bg-gray-100 rounded hover:border hover:border-white hover:text-white w-full h-full mt-6 py-2 px-2 text-center font-semibold hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthUserNav;
