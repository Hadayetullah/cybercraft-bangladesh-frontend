"use client";

import Link from "next/link";
import React, { useState } from "react";
import OTPModal from "../modals/OTPModal";
import apiService from "@/app/actions/apiActions";
import ErrorModal from "../modals/ErrorModal";

const SignupForm = () => {
  const [emailForOtp, setEmailForOtp] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [apiError, setApiError] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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

    if (formData.name === "") {
      setError("name");
      setLoading(false);
    } else if (formData.email === "") {
      setLoading(false);
      setError("email");
    } else if (!emailRegex.test(formData.email)) {
      setLoading(false);
      setError("invalid_email");
    } else if (formData.password === "") {
      setLoading(false);
      setError("password");
    } else if (formData.password.length < 8) {
      setLoading(false);
      setError("password_length");
    } else if (formData.confirm_password === "") {
      setLoading(false);
      setError("confirm_password");
    } else if (formData.password !== formData.confirm_password) {
      setLoading(false);
      setError("password_mismatch");
    } else {
      const data = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const response = await apiService.postWithoutToken(
        "/api/auth/register/",
        JSON.stringify(data)
      );

      if (response.email) {
        setEmailForOtp(response.email);
        // console.log("response : ", response.email);
        setLoading(false);
      } else {
        if (response?.non_field_errors) {
          const tmpErrors: string[] = Object.values(
            response.non_field_errors[0]
          ).map((error: any) => {
            return error;
          });

          setApiError(tmpErrors.join(", "));
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
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-full sm:w-[380px] md:w-[410px] lg:w-[440px] 2xl:w-[487px] flex flex-col space-y-1 lg:space-y-2 2xl:space-y-3 pt-2 md:pt-4 xl:pt-5">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-[13px] lg:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
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
            className="w-full h-[35px] sm:h-[45px] xl:h-[56px] p-[10px] bg-[#FFFFFF] text-[16px] leading-[125%] tracking-[0%] text-[#00000080] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
          />

          <div
            className={`text-red-500 text-xs italic w-full h-[16px] ${
              error === "name" ? "visible" : "invisible"
            }`}
          >
            <p>Please enter your name</p>
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-[13px] lg:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
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
            Create a password
          </label>

          <input
            type="password"
            name="password"
            placeholder="must be 8 characters"
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
              {error === "password_length" &&
                "Password must be at least 8 characters long"}
            </p>
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="confirm_password"
            className="block text-[13px] lg:text-[14px] leading-[125%] tracking-[0%] text-[#345485]"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirm_password"
            placeholder="repeat password"
            value={formData.confirm_password}
            onChange={(e) => handleChange(e)}
            onFocus={() => handleFocus()}
            required
            className="w-full h-[35px] sm:h-[45px] xl:h-[56px] p-[10px] bg-[#FFFFFF] text-[16px] leading-[125%] tracking-[0%] text-[#00000080] mt-1 border border-[#D8DADC] rounded-[10px] outline-none"
          />

          <div
            className={`text-red-500 text-xs italic w-full h-[16px] ${
              error === "confirm_password" || "password_mismatch"
                ? "visible"
                : "invisible"
            }`}
          >
            <p>
              {error === "confirm_password" && "Please repeat password"}
              {error === "password_mismatch" && "Passwords do not match"}
            </p>
          </div>
        </div>

        <button
          onSubmit={(e) => handleSubmit(e)}
          onClick={(e) => handleSubmit(e)}
          disabled={loading}
          className={`w-full h-[35px] sm:h-[45px] xl:h-[56px] leading-[125%] tracking-[0%] text-[16px] text-[#FFFFFF] font-[600] text-center bg-[#345485] rounded-[10px] ${
            loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        <h2 className="text-[18px] text-[#000000B2] font-[600] text-center py-2 sm:py-4 leading-[125%] tracking-[0%] ">
          Or
        </h2>

        <div className="w-full flex flex-row items-center justify-center gap-x-2">
          <span className="text-[#000000B2] text-[14px] leading-[125%] tracking-[0%]">
            Already have an account?
          </span>

          <Link
            href={"/login"}
            className="font-[600] text-[#345485] underline text-[14px] text-center leading-[125%] tracking-[0%]"
          >
            Log in
          </Link>
        </div>
      </form>

      {/* OTP Modal */}
      {emailForOtp && (
        <OTPModal
          email={emailForOtp}
          onClose={() => {
            setEmailForOtp(null);
            setApiError(null);
          }}
        />
      )}

      {/* API Error Modal */}
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

export default SignupForm;
