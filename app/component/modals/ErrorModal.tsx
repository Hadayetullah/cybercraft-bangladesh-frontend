import React from "react";

interface ErrorModalProps {
  error: any;
  handleError: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ error, handleError }) => {
  return (
    <>
      {error && (
        <div className="fixed w-full min-h-[50px] max-h-[120px] top-[90px] left-0 flex justify-center z-[200] ">
          <div className="min-w-[220px] max-w-[350px] h-full bg-red-100 border border-red-400 text-red-700 px-2 py-2 space-x-5 rounded mb-4 flex justify-between items-center">
            <p>{error}</p>
            <div className="hover:text-white hover:bg-red-400 rounded-md flex items-center cursor-pointer transition-colors">
              <button className="cursor-pointer" onClick={handleError}>
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
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
