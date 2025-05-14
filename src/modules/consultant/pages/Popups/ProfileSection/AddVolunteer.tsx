import React, { useState } from "react";
import Calendar from "@/assets/Consultant/Calendar.png";
import { ChevronDown, X } from "lucide-react";
import DiscardChanges from "./Discard";


interface FormState {
  organisation: string;
  role: string;
  cause: string;
  currentlyWorking: boolean;
  startDate: string;
  endDate: string;
  description: string;
  [key: string]: string | boolean;
}

interface AddVolunteerProps {
  onClose: () => void;
}

const AddVolunteer: React.FC<AddVolunteerProps> = ({ onClose }) => {
  const [form, setForm] = useState<FormState>({
    organisation: "",
    role: "",
    cause: "",
    currentlyWorking: false,
    startDate: "",
    endDate: "",
    description: "",
  });
 const [showDiscardPopup, setShowDiscardPopup] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    const isCheckbox = type === 'checkbox';
    const target = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox ? target.checked : value,
    }));
  };
const handleClose = () => {
    setShowDiscardPopup(true);
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">
            Add Volunteer Experience
          </h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">
          {/* Organisation, Role, Cause */}
          {[
            { label: "Organisation", name: "organisation", placeholder: "Ex: Red Cross" },
            { label: "Role", name: "role", placeholder: "Ex: Fundraising Volunteer" },
            { label: "Cause", name: "cause", placeholder: "Ex: Environment, Education" },
          ].map(({ label, name, placeholder }) => (
            <div key={name} className="relative w-full max-w-[521.81px] mx-auto">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={form[name] as string}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
              />
              {name === "cause" && (
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
              )}
            </div>
          ))}

          {/* Currently Working */}
          <div className="w-full max-w-[530px] mx-auto">
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={form.currentlyWorking as boolean}
                onChange={handleChange}
                className="w-5 h-5 text-[#94278F] bg-white border border-[#DCDCDC] rounded focus:outline-none"
              />
              <span className="text-[#898989] text-[15px] font-normal">
                I am currently working in this role
              </span>
            </label>
          </div>

          {/* Start and End Date */}
          <div className="flex justify-between gap-4 max-w-[530px] mx-auto">
            {[
              { label: "Start date", name: "startDate" as const },
              { label: "End date (or expected)", name: "endDate" as const },
            ].map(({ label, name }) => (
              <div key={name} className="relative w-full max-w-[260px]">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                  {label}
                </label>
                <input
                  type="date"
                  name={name}
                  id={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px] [&::-webkit-calendar-picker-indicator]:hidden"
                />
                <img
                  src={Calendar}
                  alt="Calendar"
                  onClick={() =>
                    (
                      document.getElementById(name) as HTMLInputElement
                    )?.showPicker?.()
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
              </div>
            ))}
          </div>


          {/* Description */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Description
            </label>
            <textarea
              name="description"
              value={form.description as string}
              onChange={handleChange}
              placeholder="Enter Description"
              maxLength={150}
              className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {(form.description as string).length}/150
            </div>
          </div>

          {/* Media */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Media</h2>
            <p className="text-base text-[#6b7175] mb-4">
              Add Documents, photos, sites, videos, and presentations.{" "}
              <span className="text-[#94278F] underline cursor-pointer">
                Learn more about media file types supported
              </span>
            </p>
            <button className="w-[114px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Media
            </button>
          </div>
        </div>

        {/* Footer Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-b-lg">
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

export default AddVolunteer;
