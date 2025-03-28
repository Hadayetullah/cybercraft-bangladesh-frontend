"use client";

import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./customersMessage/Sidebar";
import Search from "./customersMessage/Search";
import Refresh from "./customersMessage/Refresh";
import apiService from "@/app/actions/apiActions";
import ErrorModal from "../modals/ErrorModal";
import DisplayMsg from "../modals/DisplayMsg";
import MessageDetailModal from "./customersMessage/MessageDetailModal";

const AdminMain = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiError, setApiError] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);
  const [messageDetail, setMessageDetail] = useState<any>(null);
  const [refreshButtonLoading, setRefreshButtonLoading] =
    useState<boolean>(false);

  const [customerMessage, setCustomerMessage] = useState<any>([]);

  // console.log("customerMessage : ", customerMessage);
  // console.log("apiError : ", apiError);

  const handleDelete = async (id: string) => {
    const response = await apiService.delete(`/api/customer/message/${id}/`);

    if (response.msg) {
      setCustomerMessage((prevMessages: any) =>
        prevMessages ? prevMessages.filter((item: any) => item.id !== id) : []
      );

      setMessage(response.msg);
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });

      setApiError(tmpErrors.join(", "));
    }
  };

  const handleRefresh = () => {
    setRefreshButtonLoading(true);
    fetchData();
  };

  const searchedMessage = useMemo(() => {
    if (!searchQuery.trim()) {
      return; // Clear search results if searchQuery is empty
    }

    return customerMessage.filter((item: any) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, customerMessage]);

  const fetchData = async () => {
    try {
      const response = await apiService.get("/api/customer/message/");

      if (response.msg) {
        setMessage(response.msg);
        setRefreshButtonLoading(false);
      } else if (response.data) {
        // console.log(response.data);
        setCustomerMessage(response.data);
        setRefreshButtonLoading(false);
      } else {
        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => error
        );
        setApiError(tmpErrors.join(", "));
        setRefreshButtonLoading(false);
      }
    } catch (error: any) {
      setApiError("Failed to fetch messages");
      setRefreshButtonLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Sidebar />

      {messageDetail && (
        <MessageDetailModal
          messageDetail={messageDetail}
          setMessageDetail={setMessageDetail}
        />
      )}

      <div className="w-full bg-[#e0e2e5] pl-0 sm:pl-[250px] xl:pl-[345px] pt-[80px] flex flex-row fixed top-[0] left-[0px] h-full">
        <div className="w-full h-full py-2 px-0 sm:px-10">
          <h3 className="leading-[46px] tracking-[0px] sm:text-[28px] xl:text-[32px] font-[500] ">
            Customer's Message
          </h3>

          <div className="relative w-full h-[calc(100vh-150px)] bg-white rounded-md py-1 pt-3 sm:p-4 mt-2">
            <div className="absolute right-1 sm:right-4 w-full h-[38px] sm:h-[42px] flex flex-row space-x-2 sm:space-x-4 items-center justify-end">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <Refresh
                refreshButtonLoading={refreshButtonLoading}
                handleRefresh={handleRefresh}
              />
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
                {searchedMessage !== undefined ? (
                  searchedMessage.length > 0 ? (
                    searchedMessage.map((message: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-full h-[45px] flex flex-row items-center justify-start "
                        >
                          <div className="min-w-[50px] max-w-[8%] flex items-center justify-start ">
                            <h4>{index + 1}</h4>
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
                              <button className="cursor-pointer">
                                <img
                                  src="/icon/download-box-icon.png"
                                  alt="Cybercraft download icon"
                                  className="w-[32px] h-[32px] "
                                />
                              </button>

                              <button
                                onClick={() => setMessageDetail(message)}
                                className="cursor-pointer"
                              >
                                <img
                                  src="/icon/eye-box-icon.png"
                                  alt="Cybercraft eye icon"
                                  className="w-[32px] h-[32px] "
                                />
                              </button>

                              <button
                                onClick={() => handleDelete(message.id)}
                                className="cursor-pointer"
                              >
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
                    })
                  ) : (
                    <h4 className="text-center text-lg xl:text-xl text-gray-500 mt-4">
                      No Customer Message Available
                    </h4>
                  )
                ) : customerMessage.length > 0 ? (
                  customerMessage.map((message: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-full h-[45px] flex flex-row items-center justify-start "
                      >
                        <div className="min-w-[50px] max-w-[8%] flex items-center justify-start ">
                          <h4>{index + 1}</h4>
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
                            <button className="cursor-pointer">
                              <img
                                src="/icon/download-box-icon.png"
                                alt="Cybercraft download icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>

                            <button
                              onClick={() => setMessageDetail(message)}
                              className="cursor-pointer"
                            >
                              <img
                                src="/icon/eye-box-icon.png"
                                alt="Cybercraft eye icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>

                            <button
                              onClick={() => handleDelete(message.id)}
                              className="cursor-pointer"
                            >
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
                  })
                ) : (
                  <h4 className="text-center text-lg xl:text-xl text-gray-500 mt-4">
                    No Customer Message Found
                  </h4>
                )}

                {/* {customerMessage.length > 0 &&
                  customerMessage.map((message: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-full h-[45px] flex flex-row items-center justify-start "
                      >
                        <div className="min-w-[50px] max-w-[8%] flex items-center justify-start ">
                          <h4>{index + 1}</h4>
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
                            <button className="cursor-pointer">
                              <img
                                src="/icon/download-box-icon.png"
                                alt="Cybercraft download icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>

                            <button className="cursor-pointer">
                              <img
                                src="/icon/eye-box-icon.png"
                                alt="Cybercraft eye icon"
                                className="w-[32px] h-[32px] "
                              />
                            </button>

                            <button
                              onClick={() => handleDelete(message.id)}
                              className="cursor-pointer"
                            >
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
                  })} */}
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
