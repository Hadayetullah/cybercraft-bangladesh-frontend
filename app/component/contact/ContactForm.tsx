"use client";

import apiService from "@/app/actions/apiActions";
import React, { useState } from "react";
import ErrorModal from "../modals/ErrorModal";
import DisplayMsg from "../modals/DisplayMsg";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [apiError, setApiError] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    if (error) {
      setError("");
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = () => {
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name == "") {
      setLoading(false);
      setError("name");
    } else if (formData.email == "") {
      setLoading(false);
      setError("email");
    } else if (!emailRegex.test(formData.email)) {
      setLoading(false);
      setError("invalid_email");
    } else if (formData.message == "") {
      setLoading(false);
      setError("message");
    } else {
      const response = await apiService.postWithoutToken(
        "/api/customer/message/",
        JSON.stringify(formData)
      );

      if (response.msg) {
        // console.log(response);
        setMessage(response.msg);
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      } else {
        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => {
            return error;
          }
        );

        setApiError(tmpErrors.join(", "));
        setLoading(false);
      }
    }
  };

  return (
    <div className="absolute w-full flex items-center justify-center sm:justify-start pt-4 sm:pt-[35px] sm:pl-[20px] md:pl-[30px] lg:pt-[40px] lg:pl-[80px] xl:pl-[15%] 2xl:pt-[65px] z-5">
      <div className="w-[90%] ">
        <img
          src={"/image/CyberCraft-Bangladesh.png"}
          className="w-[120px] sm:w-[130px] md:w-[150px] lg:w-[186px] lg:h-[80px] 2xl:w-[294px] 2xl:h-[129px] "
          alt="CyberCraft Bangladesh"
        />

        <div className="text-wrap my-4">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[20px] text-[#353535] leading-[100%] tracking-[0%]">
            Welcome back to CyberCraft Bangladesh, <br /> where your creativity
            thrives
          </p>
        </div>

        {message != null && (
          <DisplayMsg setMessage={setMessage} message={message} />
        )}

        <form className="w-full sm:w-[380px] md:w-[410px] lg:w-[440px] 2xl:w-[487px] flex flex-col space-y-1 lg:space-y-2 2xl:space-y-3 pt-2 md:pt-4 lg:pt-5">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-[13px] md:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              onFocus={() => handleFocus()}
              required
              className="w-full bg-[#FFFFFF] text-[14px] leading-[125%] tracking-[0%] text-[#00000080] px-[5px] md:px-[7px] lg:px-[10px] 2xl:px-[16px] py-[6px] md:py-[8px] lg:py-[12px] 2xl:py-[18px] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
            />

            <p
              className={`text-red-500 text-xs italic ${
                error === "name" ? "visible" : "invisible"
              }`}
            >
              Please enter your name
            </p>
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-[13px] md:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              onFocus={() => handleFocus()}
              required
              className="w-full bg-[#FFFFFF] text-[14px] leading-[125%] tracking-[0%] text-[#00000080] px-[5px] md:px-[7px] lg:px-[10px] 2xl:px-[16px] py-[6px] md:py-[8px] lg:py-[12px] 2xl:py-[18px] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
            />

            <div
              className={`text-red-500 text-xs italic h-[16px] ${
                error === "email" || "invalid_email" ? "visible" : "invisible"
              }`}
            >
              <p>
                {error === "email"
                  ? "Please enter your email address"
                  : error === "invalid_email"
                  ? "Please enter a valid email address"
                  : ""}
              </p>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-[13px] md:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write message"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              onFocus={() => handleFocus()}
              required
              className="w-full h-[90px] lg:h-[100px] 2xl:h-[139px] bg-[#FFFFFF] text-[14px] leading-[125%] tracking-[0%] text-[#00000080] px-[5px] md:px-[7px] lg:px-[12px] 2xl:px-[16px] py-[6px] md:py-[8px] lg:py-[14px] 2xl:py-[18px] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
            />

            <p
              className={`text-red-500 text-xs italic ${
                error === "message" ? "visible" : "invisible"
              }`}
            >
              Please leave a message
            </p>
          </div>

          <button
            onSubmit={(e) => handleSubmit(e)}
            onClick={(e) => handleSubmit(e)}
            disabled={loading}
            className={`leading-[125%] tracking-[0%] text-[14px] sm:text-[16px] text-[#FFFFFF] font-[600] text-center bg-[#345485] py-[6px] md:py-[7px] lg:py-[9px] 2xl:py-[11px] rounded-[10px] mt-1 ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {apiError && (
        <ErrorModal
          top={"90px"}
          error={apiError}
          handleError={() => setApiError(null)}
        />
      )}
    </div>
  );
};

export default ContactForm;
