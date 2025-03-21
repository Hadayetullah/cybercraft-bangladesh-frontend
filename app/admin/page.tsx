import React from "react";
import Navbar from "../component/navbar/Navbar";
import AdminMain from "../component/admin/AdminMain";
import { getRefreshToken } from "../actions/serverActions";

const page = async () => {
  const data = "admin";

  const refresh_token = await getRefreshToken();
  // console.log("refresh_token : ", refresh_token);
  if (!refresh_token) {
    return { redirect: { destination: "/login", permanent: false } };
  }

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
