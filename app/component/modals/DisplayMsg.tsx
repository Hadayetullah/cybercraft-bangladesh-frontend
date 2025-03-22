import React from "react";

const DisplayMsg = ({
  setMessage,
  message,
}: {
  setMessage: (e: any) => void;
  message: string;
}) => {
  return (
    <div
      className={`fixed w-full min-h-[50px] max-h-[120px] top-[90px] left-0 right-0 flex justify-center z-[200]`}
    >
      <div className="min-w-[220px] max-w-[350px] h-full bg-green-100 border border-green-400 text-green-700 px-2 py-2 space-x-5 rounded mb-4 flex justify-between items-center">
        <p>{message}</p>
        <div
          onClick={() => setMessage(null)}
          className="hover:text-white hover:bg-green-400 rounded-full cursor-pointer transition-colors"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DisplayMsg;
