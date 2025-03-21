"use client";

import React, { useState } from "react";
import UnAuthUserNav from "./UnAuthUserNav";
import { usePathname, useRouter } from "next/navigation";
import AuthUserNav from "./AuthUserNav";
import apiService from "@/app/actions/apiActions";
import { getRefreshToken, resetAuthCookies } from "@/app/actions/serverActions";

interface NavbarProps {
  data: any;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const router = useRouter();
  const path = usePathname();

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleUser, setToggleUser] = useState<boolean>(false);
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);

  const handleSettings = () => {
    setToggleUser(false);
    router.push("/settings");
  };

  const handleLogout = async () => {
    setLogoutLoading(true);
    const refresh_token = await getRefreshToken();
    if (!refresh_token) {
      resetAuthCookies();
      router.push("/login");
      setLogoutLoading(false);
    } else {
      const response = await apiService.postWithoutToken(
        "/api/auth/logout/",
        JSON.stringify({ refresh_token })
      );

      console.log("handleLogout :", response);
      resetAuthCookies();
      router.push("/login");
      setLogoutLoading(false);
    }
  };

  return (
    <nav
      className={`bg-${
        data != null ? "white" : "transparent"
      } py-3 px-2 sm:px-10 fixed top-0 left-0 w-full z-50 border-b border-gray-300 shadow-md`}
    >
      {data != null ? (
        <AuthUserNav
          user={data}
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
          path={path}
          toggleUser={toggleUser}
          setToggleUser={setToggleUser}
          handleSettings={handleSettings}
          handleLogout={handleLogout}
          logoutLoading={logoutLoading}
        />
      ) : (
        <UnAuthUserNav
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
          path={path}
        />
      )}
    </nav>
  );
};

export default Navbar;
