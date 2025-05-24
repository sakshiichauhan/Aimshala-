import Amy from "@/assets/Consultant/Profile/Amy.png";

interface CheckLayoutProps {
  onDiscard: () => void;
}

const CheckLayout = ({ onDiscard }: CheckLayoutProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white w-[478px] h-[350px] rounded-[20px] shadow-lg flex flex-col items-center p-10 relative overflow-hidden">

        {/* Profile Image Container with enhanced effects */}
        <div className="relative flex items-center justify-center mb-6 w-full h-[140px] z-10">
          {/* Purple shadow */}
          <div
            className="absolute w-[200px] h-[160px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle at 40% 50%, rgba(147, 38, 143, 0.8) 10%, transparent 50%)',
              top: '-7%',
              left: '40%',
              transform: 'rotate(15deg)'
            }}
          />
          
          {/* Teal shadow */}
          <div
            className="absolute w-[250px] h-[130px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle at 40% 50%, rgba(15, 187, 195, 0.8) 10%, transparent 50%)',
              bottom: '-9%',
              right: '20%',
              transform: 'rotate(15deg)'
            }}
          />

          {/* Profile image placeholder */}
          <div className="w-[130px] h-[130px] rounded-full overflow-hidden shadow-lg relative bg-white/42">
            <img
              src={Amy}
              alt="amy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Checkmark icon overlay */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center shadow-3xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2">
                <path d="M20.285 6.708l-11.085 11.084-5.484-5.484 1.414-1.414 4.07 4.07 9.671-9.67z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Success message */}
        <h2 className="text-[22px] font-semibold text-[#2D3748] text-center mb-8 px-4 leading-tight">
          Your experience has been updated
        </h2>

        {/* Ok button */}
        <button
          onClick={onDiscard}
          className="w-[91px] h-full bg-[#94278F] text-white text-[16px] font-medium rounded-[8px] hover:bg-[#7a1d72] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          Ok
        </button>

        {/* Additional subtle gradient overlay for depth */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(15, 187, 195, 0.1) 0%, 
                rgba(147, 38, 143, 0.1) 100%
              )
            `,
          }}
        />
      </div>
    </div>
  );
};

export default CheckLayout;