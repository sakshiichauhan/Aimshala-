import { useState } from "react";
import CalendarIcon from "@/assets/Consultant/Calendar.png";
import { ChevronDown, X } from "lucide-react";

type AddHonorsProps = {
  onClose: () => void;
};

const AddHonors = ({ onClose }: AddHonorsProps) => {
  const [form, setForm] = useState({
    title: "",
    associatedWith: "",
    issuer: "",
    issueDate: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center justify-center font-poppins">
      <div className="w-[791px] rounded-lg shadow-md overflow-hidden bg-white">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Honors & Awards</h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-2 py-8 space-y-4">
          {/* Title */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ex: Retail Sales Manager"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] focus:outline-none"
            />
          </div>

          {/* Associated With */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Associated with</label>
            <input
              type="text"
              name="associatedWith"
              value={form.associatedWith}
              onChange={handleChange}
              placeholder="Please Select"
              className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] focus:outline-none"
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
          </div>

          {/* Issuer */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issuer</label>
            <input
              type="text"
              name="issuer"
              value={form.issuer}
              onChange={handleChange}
              placeholder="Ex: Microsoft"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] focus:outline-none"
            />
          </div>

          {/* Issue Date */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issue date</label>
            <input
              type="date"
              name="issueDate"
              value={form.issueDate}
              onChange={handleChange}
              className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden"
              id="issueDate"
            />
            <img
              src={CalendarIcon}
              alt="Calendar"
              onClick={() => document.getElementById('issueDate')?.showPicker?.()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Description */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description"
              maxLength={150}
              className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] resize-none focus:outline-none"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {form.description.length}/150
            </div>
          </div>

          {/* Media */}
          <div className="w-full max-w-[530px] mx-auto mt-8">
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
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHonors;
