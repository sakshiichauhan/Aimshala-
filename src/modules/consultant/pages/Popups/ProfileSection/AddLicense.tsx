import React, { useState } from "react";
import CalendarIcon from "@/assets/Consultant/Calendar.png";
import { ChevronDown, X } from "lucide-react";
import DiscardChanges from "./Discard";

interface AddLicenseProps {
  onClose: () => void;
}

interface LicenseForm {
  name: string;
  issuingOrganisation: string;
  issueDate: string;
  expirationDate: string;
  credentialID: string;
  credentialURL: string;
}

const AddLicense = ({ onClose }: AddLicenseProps) => {
  const [form, setForm] = useState<LicenseForm>({
    name: "",
    issuingOrganisation: "",
    issueDate: "",
    expirationDate: "",
    credentialID: "",
    credentialURL: "",
  });
const [showDiscardPopup, setShowDiscardPopup] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins ">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#000000]">Add License or Certification</h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">

          {/* Name */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex: Certified Network Security Associate"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] placeholder-[#898989] focus:outline-none"
            />
          </div>

          {/* Issuing Organisation */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issuing Organisation</label>
            <input
              type="text"
              name="issuingOrganisation"
              value={form.issuingOrganisation}
              onChange={handleChange}
              placeholder="Ex: Microsoft"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] placeholder-[#898989] focus:outline-none"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
          </div>

          {/* Dates */}
          <div className="flex justify-between gap-4 w-full max-w-[530px] mx-auto">
            {[{ label: "Issue Date", name: "issueDate" }, { label: "Expiration Date", name: "expirationDate" }].map(
              ({ label, name }) => (
                <div key={name} className="relative w-full max-w-[260px]">
                  <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">{label}</label>
                  <input
                    type="date"
                    name={name}
                    id={name}
                    value={form[name as keyof LicenseForm]}
                    onChange={handleChange}
                    className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden"
                  />
                  <img
                    src={CalendarIcon}
                    alt="Calendar"
                    onClick={() => (document.getElementById(name) as HTMLInputElement)?.showPicker()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                  />
                </div>
              )
            )}
          </div>

          {/* Credential ID */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Credential ID</label>
            <input
              type="text"
              name="credentialID"
              value={form.credentialID}
              onChange={handleChange}
              placeholder="Enter Credential ID"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] placeholder-[#898989] focus:outline-none"
            />
          </div>

          {/* Credential URL */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Credential URL</label>
            <input
              type="text"
              name="credentialURL"
              value={form.credentialURL}
              onChange={handleChange}
              placeholder="Enter Credential URL"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] placeholder-[#898989] focus:outline-none"
            />
          </div>

          {/* Skills */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
            <p className="text-base text-[#6b7175] mb-4">
              We recommend adding your top 5 used in this experience. They'll also appear in your Skills section.
            </p>
            <button className="w-[97px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Skill
            </button>
          </div>

          {/* Media */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Media</h2>
            <p className="text-base text-[#6b7175] mb-4">
              Add Documents, photos, sites, videos, and presentations.{" "}
              <span className="text-[#94278F] underline cursor-pointer">Learn more about media file types supported</span>
            </p>
            <button className="w-[114px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Media
            </button>
          </div>
        </div>

        {/* Footer Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-[12px]">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>
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

export default AddLicense;
