import React from "react";
import Navbar from "../component/navbar/Navbar";
import AdminMain from "../component/admin/AdminMain";

const page = () => {
  const data = "admin";

  return (
    <>
      <Navbar data={data} />
      <div className="w-full mx-auto relative">
        <AdminMain />
      </div>
    </>
  );
};

export default page;
