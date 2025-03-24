import Link from "next/link";
import React, { useState } from "react";
import NavSearchBar from "./NavSearchBar";

interface AuthenticatedProps {
  user: any;
  setToggleMenu: (toggleMenu: boolean) => void;
  toggleMenu: boolean;
  path: string;
  toggleUser: boolean;
  setToggleUser: (toggleUser: boolean) => void;
  handleSettings: () => void;
  handleLogout: () => void;
  logoutLoading: boolean;
}

const AuthUserNav: React.FC<AuthenticatedProps> = ({
  user,
  setToggleMenu,
  toggleMenu,
  path,
  toggleUser,
  setToggleUser,
  handleSettings,
  handleLogout,
  logoutLoading,
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
          <button className="w-[45px] h-[45px] text-gray-900 cursor-pointer sm:hidden">
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
            <div className="flex flex-col absolute left-0 top-12 bg-white w-[170px] sm:w-[220px] text-[15px] sm:text-[17px] font-[600] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg sm:hidden">
              <Link
                href="#"
                className={`transition rounded hover:text-white hover:text-white w-full h-full py-1 sm:py-2 px-1 sm:px-2 hover:bg-indigo-700 ${
                  path === "#" ? "bg-indigo-700 text-white" : ""
                }`}
              >
                Customer's Message
              </Link>

              <Link
                href="#"
                className={`transition rounded hover:text-white hover:text-white w-full h-full py-1 sm:py-2 px-1 sm:px-2 hover:bg-indigo-700 ${
                  path === "#" ? "bg-indigo-700 text-white" : ""
                }`}
              >
                Employees
              </Link>

              <Link
                href="#"
                className={`transition rounded hover:text-white hover:text-white w-full h-full py-1 sm:py-2 px-1 sm:px-2 hover:bg-indigo-700 ${
                  path === "#" ? "bg-indigo-700 text-white" : ""
                }`}
              >
                Settings
              </Link>

              <Link
                href="#"
                className={`transition rounded hover:text-white hover:text-white w-full h-full py-1 sm:py-2 px-1 sm:px-2 hover:bg-indigo-700 ${
                  path === "#" ? "bg-indigo-700 text-white" : ""
                }`}
              >
                Option 1
              </Link>

              <Link
                href="#"
                className={`transition rounded hover:text-white hover:text-white w-full h-full py-1 sm:py-2 px-1 sm:px-2 hover:bg-indigo-700 ${
                  path === "#" ? "bg-indigo-700 text-white" : ""
                }`}
              >
                Option 2
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="relative h-full flex flex-row items-center justify-between ml-5">
        <div className="hidden h-full sm:flex flex-col justify-center gap-y-1 text-nowrap">
          <h2 className="text-[#111111] text-[16px] font-[500] leading-[100%] tracking-[0px] ">
            {user.name}
          </h2>

          <h3 className="text-[#565656] text-[14px] font-[600] leading-[100%] tracking-[0px]">
            Admin
          </h3>
        </div>

        <button className="size-[45px] text-gray-900 ml-2 cursor-pointer">
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
          <div className="flex flex-col absolute right-0 top-[50px] bg-white w-[170px] sm:w-[250px] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg p-1 sm:p-4">
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
              disabled={logoutLoading}
              className={`transition bg-gray-100 rounded hover:border hover:border-white hover:text-white w-full h-full mt-6 py-2 px-2 text-center font-semibold hover:bg-indigo-700 ${
                logoutLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              {logoutLoading ? "Logging out..." : "Logout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthUserNav;
