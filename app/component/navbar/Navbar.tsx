"use client";

import React, { useState } from "react";
import UnAuthUserNav from "./UnAuthUserNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <nav className="bg-transparent py-3 px-2 sm:px-10 fixed top-0 left-0 w-full z-50 border-b border-gray-300 shadow-md">
      <UnAuthUserNav
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
        path={path}
      />
    </nav>
  );
};

export default Navbar;
