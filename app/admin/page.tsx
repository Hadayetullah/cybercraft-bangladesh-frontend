import React from "react";
import Navbar from "../component/navbar/Navbar";
import AdminMain from "../component/admin/AdminMain";
import { getRefreshToken, getUser } from "../actions/serverActions";

const page = async () => {
  const refresh_token = await getRefreshToken();
  if (!refresh_token) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const user = await getUser();

  return (
    <>
      <Navbar data={user} />
      <div className="w-full mx-auto relative">
        <AdminMain />
      </div>
    </>
  );
};

export default page;
