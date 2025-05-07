import { useState } from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileImaage from '@/assets/Consultant/BecomeConsultant/image1.png';

const ConsultantForm2 = () => {
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setProfileImage(event.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleNext = () => {
        navigate('/consultant/become-consultant/form3');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[734px] h-[673.81px] border border-[#E5E7EB]">
                <div className="text-left w-full bg-[#93268F]/4 mb-8 flex items-center gap-2">
                    <div className="w-[3px] h-[30px] bg-[#94278F]" />
                    <h1 className="text-[20px] font-bold text-[#1E232C]">
                        Become a <span className="text-[#94278F]">Consultant</span>
                    </h1>
                </div>

                <form className="space-y-6">
                    <div className="flex justify-center mb-6 relative">
                        <div className="relative">
                            <img
                                src={profileImage || ProfileImaage}
                                alt="Profile"
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

                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative w-full">
                            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">Mobile Number</label>
                            <div className="flex items-center border border-[#DCDCDC] rounded-md p-3">
                                <span className="text-sm text-[#898989] mr-2">+91</span>
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    className="w-full focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="relative w-full">
                            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative w-full">
                            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">Gender</label>
                            <select className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20 text-[#898989]">
                                <option className="text-[#898989]">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="relative w-full">
                            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">Date of Birth</label>
                            <input
                                type="date"
                                placeholder="Enter Your Date of Birth"
                                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20 text-[#898989]"
                            />
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={handleNext}
                            className="h-12 md:h-14 w-40 md:w-48 bg-[#94278F] text-white text-lg md:text-xl rounded-lg hover:bg-[#7A206F]"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultantForm2;
