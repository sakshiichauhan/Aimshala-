import Amy from "@/assets/Consultant/Profile/Amy.png";

interface CheckLayoutProps {
 
  onDiscard: () => void;
}


const CheckLayout = ({   onDiscard }: CheckLayoutProps) => {
  return (
    <div className="flex items-center justify-center rounded-[20px] bg-white font-poppins">
      <div className="bg-white w-[478px] h-[344px] rounded-[20px] shadow-md flex flex-col items-center p-10 relative">

        {/* Profile Image with gradient glow and check */}
        <div className="relative flex items-center justify-center mb-4">

          {/* Gradient glow background behind the profile image */}
          <div className="absolute w-[160px] h-[160px] rounded-full bg-[radial-gradient(circle,_#0fbbc3_44%,_#93268f_44%,_transparent_80%)] blur-sm" />

          {/* Profile image */}
          <div className="w-[139px] h-[100px] rounded-full overflow-hidden z-10">
            <img
              src={Amy}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Checkmark icon overlay */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="bg-green-500 w-[20px] h-[20px] rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M20.285 6.708l-11.085 11.084-5.484-5.484 1.414-1.414 4.07 4.07 9.671-9.67z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Success message */}
        <h2 className="text-[20px] font-semibold text-[#000000] text-center mt-6">
          Your profile info has been updated
        </h2>

        {/* Ok button */}
        <button
          onClick={onDiscard}
          className="mt-8 w-[91px] h-[46px] bg-[#94278F] text-white text-[16px] font-medium rounded-full hover:bg-[#7a1d72] transition"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default CheckLayout;
