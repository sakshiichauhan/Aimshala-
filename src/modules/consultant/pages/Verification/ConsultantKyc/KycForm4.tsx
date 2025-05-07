import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Kyc1 from "@/assets/Consultant/ConsultantEkyc/Kyc1.png";

const KycForm4 = () => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountType: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white rounded-lg shadow-lg flex w-[972px] h-[682.59px] border border-[#E5E7EB]">
        <div className="w-[587px] h-[682.59px] border-r border-[#E5E7EB] pt-[62px] pr-[32px] pb-[62px] pl-[32px] flex flex-col justify-center">
          <h1 className="text-[28px] font-bold text-[#000000] mb-6 text-center">
            Verify Your Identity
          </h1>

          <div className="w-[523px] gap-4">
            <div>
              <div className="text-left w-full bg-[#93268F]/4 mb-2 flex items-center gap-2">
                <div className="w-[3px] h-[30px] bg-[#94278F]" />
                <h1 className="text-[20px] font-bold text-[#1E232C]">
                  Provide <span className="text-[#94278F]">Bank Details</span>
                </h1>
              </div>
              <p className="text-[16px] text-[#989898] mb-8">
                Enter your bank details for verification
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Account Holder Name <span className="text-[#EF3030]">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                    placeholder="Enter Account Holder Name"
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  />
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Account type <span className="text-[#EF3030]">*</span>
                  </label>
                  <select
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                  </select>
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Account number <span className="text-[#EF3030]">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="Enter Account number"
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  />
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Confirm Account Number <span className="text-[#EF3030]">*</span>
                  </label>
                  <input
                    type="text"
                    name="confirmAccountNumber"
                    value={formData.confirmAccountNumber}
                    onChange={handleChange}
                    placeholder="Confirm Account number"
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  />
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    IFSC code <span className="text-[#EF3030]">*</span>
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    placeholder="Enter IFSC code"
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[202px] py-3 bg-[#94278F] text-white rounded-lg hover:bg-[#7A206F] transition-colors font-poppins font-medium h-[46px]"
                  onClick={() => navigate("/kyc-form-5")}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-[385px] h-full flex flex-col items-center justify-center pl-8">
          <img src={Kyc1} alt="Verification" className="w-[208px] h-[208px]" />
          <div className="text-[14px] font-poppins font-semibold leading-none tracking-normal text-[#4D4D4D] mt-2 text-center capitalize">
            Data Protection Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm4;
