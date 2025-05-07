import React from "react";

const CheckLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-[350px] flex flex-col items-center">

        {/* Profile Image with Tick */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/7ZVdbWq8/profile.png" // Replace with your real profile image URL
            alt="Profile"
            className="w-[100px] h-[100px] object-cover rounded-full"
          />
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-[#DCDCDC]">
            <svg
              className="text-green-500"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 6.708l-11.085 11.084-5.484-5.484 1.414-1.414 4.07 4.07 9.671-9.67z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-[#1C1C1C] text-center mt-6">
          Your experience has been Added
        </h2>

        {/* OK Button */}
        <button
          className="mt-6 w-[100px] h-[40px] bg-[#94278F] text-white rounded-full font-medium hover:bg-[#7a1d72] transition"
        >
          Ok
        </button>

      </div>
    </div>
  );
};

export default CheckLayout;
