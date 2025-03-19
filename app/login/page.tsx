import React from "react";
import Navbar from "../component/navbar/Navbar";
import LoginForm from "../component/login/LoginForm";

const Page = () => {
  const data = null;
  return (
    <>
      <Navbar data={data} />
      <div
        className="w-full pt-[100px] sm:pt-[0px] h-[110vh] sm:h-[100vh] px-4 sm:px-0"
        style={{
          background:
            "linear-gradient(144.42deg, rgba(194, 218, 255, 0.96) 20.85%, rgba(239, 241, 240, 0.17) 134.64%)",
        }}
      >
        <div className="w-full h-full xl:w-[1084px] mx-auto">
          <div className="w-full h-full flex flex-col sm:flex-row items-center justify-evenly sm:gap-x-8 sm:px-4">
            <div className="w-full flex flex-col items-center gap-y-7">
              <img
                src={"/image/CyberCraft-Bangladesh.png"}
                alt="CyberCraft-Bangladesh-logo"
                className="w-[180px] sm:w-[294px] h-[80px] sm:h-[129px] "
              />

              <p className="text-[#353535] text-[18px] sm:text-[20px] text-center leading-[100%] tracking-[0%] ">
                Welcome back to CyberCraft Bangladesh, <br /> where your
                creativity thrives
              </p>
            </div>

            <div className="w-full h-full">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
