"use client";

import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email === "") {
      setError("email");
    } else if (!emailRegex.test(formData.email)) {
      setError("invalid_email");
    } else if (formData.password === "") {
      setError("password");
    } else if (formData.password.length < 8) {
      setError("password_length");
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="w-full h-full flex pt-12 sm:pt-0 sm:items-center justify-center">
      <form className="w-full sm:w-[380px] md:w-[410px] lg:w-[440px] 2xl:w-[487px] flex flex-col space-y-1 lg:space-y-2 2xl:space-y-3">
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-[13px] lg:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            onFocus={() => handleFocus()}
            required
            className="w-full h-[35px] sm:h-[45px] xl:h-[56px] p-[10px] bg-[#FFFFFF] text-[16px] leading-[125%] tracking-[0%] text-[#00000080] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
          />

          <div
            className={`text-red-500 text-xs italic w-full h-[16px] ${
              error === "email" || "invalid_email" ? "visible" : "invisible"
            }`}
          >
            <p>{error === "email" && "Please enter your email address"}</p>
            <p>
              {error === "invalid_email" &&
                "Please enter a valid email address"}
            </p>
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-[13px] lg:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
          >
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            onFocus={() => handleFocus()}
            required
            className="w-full h-[35px] sm:h-[45px] xl:h-[56px] p-[10px] bg-[#FFFFFF] text-[16px] leading-[125%] tracking-[0%] text-[#00000080] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
          />

          <div
            className={`text-red-500 text-xs italic w-full h-[16px] ${
              error === "password" || "password_length"
                ? "visible"
                : "invisible"
            }`}
          >
            <p>
              {error === "password" && "Please enter password"}
              {error === "password_length" && "Invalid password"}
            </p>
          </div>
        </div>

        <button
          onSubmit={(e) => handleSubmit(e)}
          onClick={(e) => handleSubmit(e)}
          className="w-full h-[35px] sm:h-[45px] xl:h-[56px] cursor-pointer leading-[125%] tracking-[0%] text-[16px] text-[#FFFFFF] font-[600] text-center bg-[#345485] rounded-[10px]"
        >
          Log in
        </button>

        <h2 className="text-[18px] text-[#000000B2] font-[600] text-center py-2 sm:py-4 leading-[125%] tracking-[0%] ">
          Or
        </h2>

        <div className="w-full flex flex-row items-center justify-center gap-x-2">
          <span className="text-[#000000B2] text-[14px] leading-[125%] tracking-[0%]">
            Don't have an account?
          </span>

          <Link
            href={"/signup"}
            className="font-[600] text-[#345485] underline text-[14px] text-center leading-[125%] tracking-[0%]"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
