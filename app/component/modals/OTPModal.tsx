"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface OTPModalProps {
  email: string;
  onClose: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ email, onClose }) => {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // const res = await fetch("/api/auth/otpverification/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, otp }),
    // });

    // const result = await res.json();
    // if (result.success) {
    //   router.push(result.redirectTo); // Redirect to the root URL
    //   setLoading(false);
    // } else {
    //   console.log(result.error);
    //   console.error("Error logging in");
    //   setLoading(false);
    // }

    // const result = await dispatch(verifyOtp({ email, otp }));
    // if (result.meta.requestStatus === "fulfilled") {
    //   onClose(); // Close the modal if OTP is verified
    // }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black opacity-95 z-[150]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg opacity-100">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Verify OTP
        </h2>

        <p className="text-sm text-center text-gray-600">
          An OTP has been sent to your email address. Please enter the OTP to
          verify your email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              required
              // readOnly
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              OTP
            </label>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Verifying OTP..." : "Verify OTP"}
          </button>
        </form>

        <button
          onClick={onClose}
          disabled={loading}
          className={`w-full px-4 py-2 mt-4 text-sm font-semibold text-indigo-600 bg-transparent rounded hover:bg-gray-100 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPModal;
