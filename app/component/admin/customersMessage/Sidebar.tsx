"use client";

import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden pt-[80px] fixed left-0 sm:flex flex-col shadow-lg shadow-black sm:w-[250px] xl:w-[345px] h-full bg-white items-start z-10">
      <button className="w-full cursor-pointer border-b border-gray-200 text-left text-[18px] font-[600] py-2 pl-3 hover:bg-gray-900 hover:text-white">
        Customer's Message
      </button>

      <button className="w-full cursor-pointer border-b border-gray-200 text-left text-[18px] font-[600] py-2 pl-3 hover:bg-gray-900 hover:text-white">
        Employees
      </button>

      <button className="w-full cursor-pointer border-b border-gray-200 text-left text-[18px] font-[600] py-2 pl-3 hover:bg-gray-900 hover:text-white">
        Settings
      </button>

      <button className="w-full cursor-pointer border-b border-gray-200 text-left text-[18px] font-[600] py-2 pl-3 hover:bg-gray-900 hover:text-white">
        Option 1
      </button>

      <button className="w-full cursor-pointer text-left text-[18px] font-[600] py-2 pl-3 hover:bg-gray-900 hover:text-white">
        Option 2
      </button>
    </div>
  );
};

export default Sidebar;
