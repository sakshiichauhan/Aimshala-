import { useState } from "react";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Kyc2 from '@/assets/Consultant/ConsultantEkyc/Kyc3.png'
import profileImaage from "@/assets/Consultant/BecomeConsultant/image1.png";

const KycForm5 = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  interface FormData {
    fullName: string;
    gender: string;
    dob: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    gender: "",
    dob: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white rounded-lg shadow-lg flex w-[972px] h-[682.59px] border border-[#E5E7EB]">
        <div className="w-[587px] h-[682.59px] border-r border-[#E5E7EB] pt-[62px] pr-[32px] pb-[62px] pl-[32px] flex flex-col justify-center">
          <h1 className="text-[28px] font-bold text-[#000000] mb-6 text-center">
            Verify Your Identity with Aadhaar
          </h1>

          <div className="w-[523px] gap-4">
            <div>
              <div className="text-left w-full bg-[#93268F]/4 mb-2 flex items-center gap-2">
                <div className="w-[3px] h-[30px] bg-[#94278F]" />
                <h1 className="text-[20px] font-bold text-[#1E232C]">
                  Review{" "}
                  <span className="text-[#94278F]">Personal Details</span>
                </h1>
              </div>
              <p className="text-[16px] text-[#989898] mb-8">
                Check that your personal details match your Aadhaar card
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-center mb-6 relative">
                  <div className="relative">
                    <img
                      alt="Profile"
                      src={profileImage || profileImaage}
                      className="h-[164.87px] w-[164.87px] rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <label
                      htmlFor="profile-upload"
                      className="absolute top-[125.84px] left-[99.92px] w-[39.97px] h-[39.97px] rounded-[50.29px] bg-[#FFFFFF] cursor-pointer flex items-center justify-center shadow-md hover:bg-[#7A206F]"
                    >
                      <Camera size={16} />
                    </label>
                    <input
                      type="file"
                      id="profile-upload"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  />
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="relative w-[521px]">
                  <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full py-[14.5px] px-[16px] border text-[#898989] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 font-poppins h-[57px]"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="w-[202px] py-3 bg-[#94278F] text-white rounded-lg hover:bg-[#7A206F] transition-colors font-poppins font-medium h-[46px]"
                  onClick={() => navigate("/kyc-form-6")}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-[385px] h-full flex flex-col items-center justify-center pl-8">
          <img src={Kyc2} alt="Verification" className="w-[208px] h-[208px]" />
          <div className="text-[14px] font-poppins font-semibold leading-none tracking-normal text-[#4D4D4D] mt-2 text-center capitalize">
            Data Protection Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm5;
