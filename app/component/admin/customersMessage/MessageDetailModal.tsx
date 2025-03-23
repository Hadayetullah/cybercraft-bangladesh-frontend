import React from "react";

interface MessageDetailModalProps {
  messageDetail: any;
  setMessageDetail: (e: any) => void;
}
const MessageDetailModal: React.FC<MessageDetailModalProps> = ({
  messageDetail,
  setMessageDetail,
}) => {
  return (
    <div className="fixed inset-0 flex pt-[30px] justify-center bg-[#00000080] z-[150]">
      <div className="w-full max-w-xl h-[calc(100vh-60px)] bg-white rounded shadow-lg">
        <div className="w-full h-full max-w-md bg-white rounded flex flex-col items-center mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 pt-8 border-b bordre-gray-300 w-full">
            Customer Message Detail
          </h2>

          <div className="w-full h-full py-4 flex flex-col overflow-hidden">
            <div className="w-full h-[50px] leading-[0%] tracking-[0%] sm:h-[30px] flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 space-x-0 sm:space-x-2">
              <h1 className="text-lg text-gray-800 font-semibold">Name:</h1>
              <h3 className="text-gray-600 pt-1">{messageDetail.name}</h3>
            </div>

            <div className="w-full h-[50px] leading-[0%] tracking-[0%] sm:h-[30px] flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 space-x-0 sm:space-x-2">
              <h1 className="text-lg text-gray-800 font-semibold">
                Email address:
              </h1>
              <h3 className="text-gray-600 pt-1">{messageDetail.email}</h3>
            </div>

            <div className="w-full h-[calc(100vh-300px)] sm:h-[calc(100vh-270px)] flex flex-col space-y-2">
              <h1 className="text-lg text-gray-800 font-semibold mt-2">
                Message:
              </h1>
              <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden border border-gray-200">
                <p className="text-gray-600 p-1">{messageDetail.message}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMessageDetail(null)}
            className={`w-[180px] h-[40px] self-end mb-4 text-md font-semibold border border-indigo-900 text-indigo-600 hover:text-indigo-900 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetailModal;
