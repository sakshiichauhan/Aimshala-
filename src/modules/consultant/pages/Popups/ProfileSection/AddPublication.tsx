import React, { useState } from "react";
import CalendarIcon from '@/assets/Consultant/Calendar.png';
import { ChevronDown, X } from "lucide-react";

interface AddPublicationProps {
  onClose: () => void;
}

const AddPublication = ({ onClose }: AddPublicationProps) => {
  const [form, setForm] = useState({
    title: "",
    publisher: "",
    publicationDate: "",
    publicationURL: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins ">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header with X */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Publication</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">

          {/* Title */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ex: Giving and receiving feedback"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
            />
          </div>

          {/* Publisher */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Publication/Publisher</label>
            <input
              type="text"
              name="publisher"
              value={form.publisher}
              onChange={handleChange}
              placeholder="Ex: Harvard Business Review"
              className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
          </div>

          {/* Publication Date */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Publication date</label>
            <input
              type="date"
              name="publicationDate"
              id="publicationDate"
              value={form.publicationDate}
              onChange={handleChange}
              className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px] [&::-webkit-calendar-picker-indicator]:hidden"
            />
            <img
              src={CalendarIcon}
              alt="Calendar"
              onClick={() => (document.getElementById('publicationDate') as HTMLInputElement)?.showPicker()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Publication URL */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Publication URL</label>
            <input
              type="text"
              name="publicationURL"
              value={form.publicationURL}
              onChange={handleChange}
              placeholder="Enter Publication URL"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] focus:outline-none"
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
              maxLength={2000}
              className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {form.description.length}/2,000
            </div>
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

export default AddPublication;
