import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Kyc1 from "@/assets/Consultant/ConsultantEkyc/Kyc1.png"


const KycForm2 = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Generating OTP for:", aadhaarNumber);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white rounded-lg shadow-lg flex w-[972px] h-[682.59px] border border-[#E5E7EB]">
        <div className="w-[587px] h-[682.59px] border-r border-[#E5E7EB] pt-[62px] pr-[32px] pb-[62px] pl-[32px] flex flex-col justify-center">
          <h1 className="text-[28px] font-bold text-[#000000] mb-6 text-center">
            Verify Your Identity
          </h1>
          <div className="w-[523px]  gap-4">
            <div>
              <div className="text-left w-full bg-[#93268F]/4 mb-2 flex items-center gap-2">
                <div className="w-[3px] h-[30px] bg-[#94278F]" />
                <h1 className="text-[20px] font-bold text-[#1E232C]">
                  Provide <span className="text-[#94278F]">Aadhaar Number</span>
                </h1>
              </div>
              <p className="text-[16px] text-[#989898] mb-10">
                Enter your 12-digit Aadhaar number and click 'Generate OTP'.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Modified Input Field */}
              <div className="relative w-[521px]">
                <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                  Aadhaar number
                </label>
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  placeholder="Enter Aadhaar number"
                  className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                  maxLength={12}
                  pattern="\d{12}"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[202px] py-3 bg-[#94278F] text-white rounded-lg hover:bg-[#7A206F] transition-colors font-poppins font-medium h-[46px]"
                  onClick={() => navigate("/kyc-form-3")}
                >
                  Generate OTP
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-[385px] h-full flex flex-col items-center justify-center pl-8">
          <img
            src={Kyc1}
            alt="KYC Illustration"
            className="w-[208px] h-[208px]"
          />
          <div className="text-[14px] font-poppins font-semibold leading-none tracking-normal text-[#4D4D4D] mt-2 text-center capitalize">
            Data Protection Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm2;
