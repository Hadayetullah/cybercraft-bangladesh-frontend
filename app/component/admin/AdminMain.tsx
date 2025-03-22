"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./customersMessage/Sidebar";
import Search from "./customersMessage/Search";
import Refresh from "./customersMessage/Refresh";
import apiService from "@/app/actions/apiActions";
import ErrorModal from "../modals/ErrorModal";
import DisplayMsg from "../modals/DisplayMsg";

const AdminMain = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiError, setApiError] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);
  const [customerMessage, setCustomerMessage] = useState<any>(null);

  console.log("customerMessage : ", customerMessage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get("/api/customer/message/");

        if (response.msg) {
          setMessage(response.msg);
        } else if (response.data) {
          // console.log(response.data);
          setCustomerMessage(response.data);
        } else {
          const tmpErrors: string[] = Object.values(response).map(
            (error: any) => error
          );
          setApiError(tmpErrors.join(", "));
        }
      } catch (error: any) {
        setApiError("Failed to fetch messages");
      }
    };

    fetchData();
  }, []);

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
                <div className="min-w-[50px] max-w-[8%] flex items-center justify-start ">
                  <h4>No.</h4>
                </div>

                <div className="min-w-[200px] max-w-[17%] flex items-center justify-start">
                  <h4>Name</h4>
                </div>

                <div className="min-w-[250px] max-w-[20%] flex items-center justify-start ml-5">
                  <h4>Email</h4>
                </div>

                <div className="min-w-[400px] max-w-[40%] flex items-center justify-start ml-5">
                  <h4>Message</h4>
                </div>

                <div className="min-w-[160px] max-w-[15%] flex items-center justify-start ml-6">
                  <h4>Action</h4>
                </div>
              </div>

              <div className="w-full text-[#606060] text-[18px] leading-[100%] tracking-[0%] ">
                {customerMessage != null &&
                  customerMessage.map((message: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-full h-[45px] flex flex-row items-center justify-start "
                      >
                        <div className="min-w-[50px] max-w-[8%] flex items-center justify-start ">
                          <h4>{index}</h4>
                        </div>

                        <div className="min-w-[200px] max-w-[17%] flex items-center justify-start overflow-hidden">
                          <h4 className="text-nowrap ">{message.name}</h4>
                        </div>

                        <div className="min-w-[250px] max-w-[20%] flex items-center justify-start ml-5 overflow-hidden">
                          <h4 className="text-nowrap ">{message.email}</h4>
                        </div>

                        <div className="min-w-[400px] max-w-[40%] flex items-center justify-start ml-5 overflow-hidden">
                          <h4 className="text-nowrap ">{message.message}</h4>
                        </div>

                        <div className="min-w-[160px] max-w-[15%] h-full flex items-center justify-start ml-6">
                          <div className="w-full h-full flex flex-row items-center space-x-6">
                            <button>
                              <img
                                src="/icon/download-box-icon.png"
                                alt="Cybercraft download icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>

                            <button>
                              <img
                                src="/icon/eye-box-icon.png"
                                alt="Cybercraft eye icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>

                            <button>
                              <img
                                src="/icon/delete-box-icon.png"
                                alt="Cybercraft delete icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {apiError && (
        <ErrorModal
          top={"90px"}
          error={apiError}
          handleError={() => setApiError(null)}
        />
      )}

      {message != null && (
        <DisplayMsg setMessage={setMessage} message={message} />
      )}
    </>
  );
};

export default AdminMain;
