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
  const [showDiscardPopup, setShowDiscardPopup] = useState(false); const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setShowDiscardPopup(true);
  };
  return (
    <div className="flex items-center justify-center font-poppins mt-70">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-y-auto">

        {/* Header with Close Button */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6 py-2">
          <h1 className="text-2xl font-semibold">Edit Contact Info</h1>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 space-y-2 mt-10">
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

          <RenderInput
            label="Pin Code"
            name="pin"
            value={form.pin}
            onChange={handleChange}
            placeholder="Enter Pin Code"
            className="w-full"
          />

          <RenderInput
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter City"
            className="w-1/2"
          />
          <RenderInput
            label="State"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="Enter State"
            className="w-1/2"
          />
          <RenderInput
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Enter Country"
            className="w-1/2"
          />
          <div className="px-20 mb-6">
            <div className="text-left bg-[#93268F]/4 mb-2 flex items-center gap-2 py-1 px-1">
              <div className="w-[4px] h-[30px] bg-[#94278F]" />
              <h2 className="text-[20px] font-bold text-[#1C1C1C]">Social <span className="text-[#93268F]">Media</span></h2>
            </div>
          </div>

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

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-6 py-4 flex justify-end rounded-b-lg">
          <button className="w-[150px] h-[46px] bg-[#94278F] text-white text-sm font-medium rounded-[12px] hover:bg-[#7a1d72]">
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
