import React, { useState } from "react";
import { X } from "lucide-react";
import  DiscardChanges from "./Discard";
interface ContactForm1Props {
  onClose: () => void;
}

const Contactform1 = ({ onClose }: ContactForm1Props) => {
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    address: "",
    pin: "",
    city: "",
    state: "",
    country: "",
    facebook: "",
    instagram: "",
    twitter: "",
  });
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 const handleClose = () => {
    setShowDiscardPopup(true);
  };
  return (
    <div className="flex items-center justify-center  font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        
        {/* Header with Close Button */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold">Edit Contact Info</h1>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="w-[791px] px-[32px] py-[32px] pt-6 pb-8 space-y-6">
          {/* Email */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            />
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
              Mobile Number
            </label>
            <div className="flex items-center justify-between border border-[#DCDCDC] rounded-md overflow-hidden">
              <div className="flex items-center flex-1">
                <span className="px-2 py-2 bg-white text-black text-[16px] border-r border-[#DCDCDC]">+91</span>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-3 text-[16px] text-black placeholder-[#B8B8B8] focus:outline-none"
                />
              </div>
              <button className="px-4 text-[#94278F] text-sm font-medium hover:underline whitespace-nowrap">
                Send code
              </button>
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Ex: D-79, Block D, Sector 48"
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            />
          </div>

          {/* Pin and City */}
          <div className="flex gap-4">
            <div className="w-1/2 relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Pin Code</label>
              <input
                type="text"
                name="pin"
                value={form.pin}
                onChange={handleChange}
                placeholder="Ex: 135001"
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
              />
            </div>
            <div className="w-1/2 relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
              >
                <option value="">Please Select</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>

          {/* State and Country */}
          <div className="flex gap-4">
            <div className="w-1/2 relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">State</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
              >
                <option value="">Please Select</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="DL">Delhi</option>
              </select>
            </div>
            <div className="w-1/2 relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
              >
                <option value="">Please Select</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-left w-full bg-[#93268F]/4 mb-4 flex items-center gap-2">
            <div className="w-[3px] h-[30px] bg-[#94278F]" />
            <h1 className="text-[20px] font-bold text-[#1E232C]">
              Social <span className="text-[#94278F]">Media</span>
            </h1>
          </div>
          <div className="space-y-6">
{(["facebook", "instagram", "twitter"] as const).map((platform) => (
              <div className="relative" key={platform}>
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black capitalize">
                  {platform}
                </label>
                <input
                  type="text"
                  name={platform}
                  value={form[platform]}
                  onChange={handleChange}
                  placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                  className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-6 py-4 flex justify-end rounded-b-lg">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-sm font-medium rounded-[12px] hover:bg-[#7a1d72]">
            Save
          </button>
        </div>
         {/* Discard Popup */}
        {showDiscardPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <DiscardChanges
              onCancel={() => setShowDiscardPopup(false)}
              onDiscard={onClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contactform1;
