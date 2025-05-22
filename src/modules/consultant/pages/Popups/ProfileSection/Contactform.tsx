import React, { useState } from "react";
import { X } from "lucide-react";
import DiscardChanges from "./Discard";
import RenderInput from "@/modules/consultant/components/RenderInput";

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
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <RenderInput
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            type="email"
          />

          <RenderInput
            label="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />

          <RenderInput
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Ex: D-79, Block D, Sector 48"
          />

          <div className="flex gap-4">
            <RenderInput
              label="Pin Code"
              name="pin"
              value={form.pin}
              onChange={handleChange}
              placeholder="Enter Pin Code"
            />
            
            <RenderInput
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter City"
            />
          </div>

          <div className="flex gap-4">
            <RenderInput
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Enter State"
            />
            
            <RenderInput
              label="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Enter Country"
            />
          </div>

          <div className="text-left w-full bg-[#93268F]/4 mb-4 flex items-center gap-2">
            <div className="w-[3px] h-[30px] bg-[#94278F]" />
            <h2 className="text-base font-semibold text-[#1C1C1C]">Social Links</h2>
          </div>

          <div className="space-y-6">
            <RenderInput
              label="Facebook"
              name="facebook"
              value={form.facebook}
              onChange={handleChange}
              placeholder="Enter Facebook Profile URL"
            />
            
            <RenderInput
              label="Instagram"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="Enter Instagram Profile URL"
            />
            
            <RenderInput
              label="Twitter"
              name="twitter"
              value={form.twitter}
              onChange={handleChange}
              placeholder="Enter Twitter Profile URL"
            />
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
