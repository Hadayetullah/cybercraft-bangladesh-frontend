"use client";

import React, { useState } from "react";
import UnAuthUserNav from "./UnAuthUserNav";
import { usePathname, useRouter } from "next/navigation";
import AuthUserNav from "./AuthUserNav";

interface NavbarProps {
  data: any;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const router = useRouter();
  const path = usePathname();

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleUser, setToggleUser] = useState<boolean>(false);

  const handleSettings = () => {
    setToggleUser(false);
    router.push("/settings");
  };

  const handleLogout = async () => {
    console.log("Logged out");
  };

  return (
    <nav
      className={`bg-${
        data != null ? "white" : "transparent"
      } py-3 px-2 sm:px-10 fixed top-0 left-0 w-full z-50 border-b border-gray-300 shadow-md`}
    >
      {data != null ? (
        <AuthUserNav
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
          path={path}
          toggleUser={toggleUser}
          setToggleUser={setToggleUser}
          handleSettings={handleSettings}
          handleLogout={handleLogout}
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
