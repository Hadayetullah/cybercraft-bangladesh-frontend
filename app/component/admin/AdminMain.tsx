"use client";

import React, { useState } from "react";
import Sidebar from "./customersMessage/Sidebar";
import Search from "./customersMessage/Search";
import Refresh from "./customersMessage/Refresh";

const AdminMain = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Sidebar />

      <div className="w-full bg-[#e0e2e5] sm:pl-[250px] xl:pl-[345px] pt-[80px] flex flex-row fixed top-[0] left-[0px] h-full">
        <div className="w-full h-full py-2 px-10">
          <h3 className="leading-[46px] tracking-[0px] sm:text-[28px] xl:text-[32px] font-[500] ">
            Customer's Message
          </h3>

          <div className="relative w-full h-[calc(100vh-150px)] bg-white rounded-md p-4 mt-2">
            <div className="absolute right-4 w-full h-[42px] flex flex-row space-x-4 items-center justify-end">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <Refresh />
            </div>

            <div className="overflow-auto w-full h-[calc(100vh-240px)] mt-[65px]">
              <div className="w-full h-[30px] text-[#111111] text-[18px] font-[500] leading-[100%] tracking-[0%] flex flex-row items-center pb-2 border-b border-gray-100 ">
                <div className="min-w-[30px] max-w-[8%] flex items-center justify-start ">
                  <h4>No.</h4>
                </div>

                <div className="min-w-[140px] max-w-[17%] flex items-center justify-start">
                  <h4>Name</h4>
                </div>

                <div className="min-w-[200px] max-w-[20%] flex items-center justify-start">
                  <h4>Email</h4>
                </div>

                <div className="min-w-[400px] max-w-[40%] flex items-center justify-start">
                  <h4>Message</h4>
                </div>

                <div className="min-w-[100px] max-w-[15%] flex items-center justify-start">
                  <h4>Action</h4>
                </div>
              </div>

              <div className="w-full h-[calc(100vh-270px)] text-[#606060] text-[18px] leading-[100%] tracking-[0%] ">
                <div className="w-full h-[40px] flex flex-row items-center justify-start ">
                  <div className="min-w-[30px] max-w-[8%] flex items-center justify-start ">
                    <h4>No.</h4>
                  </div>

                  <div className="min-w-[140px] max-w-[17%] flex items-center justify-start">
                    <h4>Name</h4>
                  </div>

                  <div className="min-w-[200px] max-w-[20%] flex items-center justify-start">
                    <h4>Email</h4>
                  </div>

                  <div className="min-w-[400px] max-w-[40%] flex items-center justify-start">
                    <h4>Message</h4>
                  </div>

                  <div className="min-w-[100px] max-w-[15%] flex items-center justify-start">
                    <h4>Action</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMain;
