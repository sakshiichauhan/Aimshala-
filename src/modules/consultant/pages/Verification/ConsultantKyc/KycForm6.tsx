import Kyc3 from "@/assets/Consultant/ConsultantEkyc/Kyc3.png";

const KycForm6 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white rounded-lg shadow-lg flex w-[972px] h-[682px] border border-[#E5E7EB]">
        <div className="w-[587px] h-full  border-[#E5E7EB] flex flex-col items-center justify-center text-center space-y-8 max-w-[400px] mx-auto">
          <div className="space-y-4">
            <div className="bg-gray-300 h-15 w-15 rounded-full inline-flex justify-center items-center">
              <img src="" />
            </div>
            <h1 className="text-4xl font-bold ">Thank You!</h1>
            <p className="text-[16px] text-[#1E232C]">
              Thank you for completing your eKYC verification.
            </p>
            <p className="text-[14px] text-[#6B7280]">
              If you need any assistance, feel free to reach out.
            </p>
          </div>

          <button className="w-[221px] py-2.5 bg-[#94278F] text-white rounded-[12px] hover:bg-[#7A206F] transition-colors text-lg h-[51px]">
            Go To Dashboard
          </button>
        </div>

        <div className="w-[385px] h-full flex flex-col border-l border-gray-200 items-center justify-center">
          <img src={Kyc3} alt="Verification" className="w-[208px] h-[208px]" />
          <div className="text-[14px] font-semibold text-[#4D4D4D] mt-2 capitalize">
            Data Protection Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm6;
