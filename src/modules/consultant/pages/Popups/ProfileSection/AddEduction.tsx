import { useState } from "react";
import Calendar from "@/assets/Consultant/Calendar.png";
import { X } from "lucide-react";
import DiscardChanges from "./Discard";

interface AddEducationProps {
  onClose: () => void;
}

interface FormState {
  [key: string]: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  activities: string;
  description: string;
}

const AddEducation = ({ onClose }: AddEducationProps) => {
  const [form, setForm] = useState<FormState>({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    activities: "",
    description: "",
  });

  const [showDiscardPopup, setShowDiscardPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <>
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#000000]">
            Add Education
          </h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">
          {/* Fields */}
          {[
            {
              label: "School",
              name: "school",
              placeholder: "Ex: Boston University",
            },
            { label: "Degree", name: "degree", placeholder: "Ex: Bachelor's" },
            {
              label: "Field of study",
              name: "fieldOfStudy",
              placeholder: "Ex: Business",
            },
          ].map(({ label, name, placeholder }) => (
            <div
              key={name}
              className="relative w-full max-w-[521.81px] mx-auto"
            >
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
              />
            </div>
          ))}

          {/* Start and End Date */}
          <div className="flex justify-between gap-4 max-w-[530px] mx-auto">
            {[
              { label: "Start date", name: "startDate" },
              { label: "End date (or expected)", name: "endDate" },
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

          {/* Remaining Fields */}
          {[
            { label: "Grade", name: "grade", placeholder: "Enter Grade" },
            {
              label: "Activities and societies",
              name: "activities",
              placeholder: "Enter Activities and societies",
            },
          ].map(({ label, name, placeholder }) => (
            <div
              key={name}
              className="relative w-full max-w-[521.81px] mx-auto"
            >
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
              />
            </div>
          ))}

          {/* Description */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description"
              maxLength={150}
              className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {form.description.length}/150
            </div>
          </div>

          {/* Skills */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
            <p className="text-base text-[#6b7175] mb-4">
              We recommend adding your top 5 used in this experience. They'll
              also appear in your Skills section.
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
              <span className="text-[#94278F] underline cursor-pointer">
                Learn more about media file types supported
              </span>
            </p>
            <button className="w-[114px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Media
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-[12px]">
          <button
            onClick={onClose}
            className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition"
          >
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
    </>
  );
};

export default AddEducation;
