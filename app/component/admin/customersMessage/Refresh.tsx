"use client";

import React from "react";

interface RefreshProps {
  refreshButtonLoading: boolean;
  handleRefresh: () => void;
}

const Refresh: React.FC<RefreshProps> = ({
  refreshButtonLoading,
  handleRefresh,
}) => {
  return (
    <button
      onClick={() => handleRefresh()}
      className={`${
        refreshButtonLoading
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer"
      }`}
    >
      <img
        src="/icon/refresh-button.png"
        alt="Cybercraft bangladesh refresh button"
        className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
      />
    </button>
  );
};

export default Refresh;
