"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
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

    if (formData.name == "") {
      setError("name");
    } else if (formData.email == "") {
      setError("email");
    } else if (formData.message == "") {
      setError("message");
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="absolute w-full flex items-center justify-center sm:justify-start pt-7 sm:pl-[20px] md:pt-[50px] md:pl-[30px] lg:pt-[70px] lg:pl-[80px] xl:pl-[15%] 2xl:pt-[129px] z-5">
      <div className="w-[90%] ">
        <img
          src={"/image/CyberCraft-Bangladesh.png"}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[186px] lg:h-[80px] 2xl:w-[294px] 2xl:h-[129px] "
          alt="CyberCraft Bangladesh"
        />

        <div className="text-wrap my-4">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[20px] text-[#353535] leading-[100%] tracking-[0%]">
            Welcome back to CyberCraft Bangladesh, <br /> where your creativity
            thrives
          </p>
        </div>

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

            <p
              className={`text-red-500 text-xs italic ${
                error === "email" ? "visible" : "invisible"
              }`}
            >
              Please enter your email address
            </p>
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
            className="cursor-pointer leading-[125%] tracking-[0%] text-[14px] sm:text-[16px] text-[#FFFFFF] font-[600] text-center bg-[#345485] py-[6px] md:py-[7px] lg:py-[9px] 2xl:py-[11px] rounded-[10px] mt-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
