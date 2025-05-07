import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AddMedia = () => {
  const [form, setForm] = useState({
    school: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[481px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Media</h1>
        </div>

        {/* Form */}
        <div className="px-4 py-4 space-y-5">

          {/* School */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">School</label>
            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              placeholder="Ex: Boston University"
              className="w-full h-[57px] px-4 border border-[#DCDCDC] rounded-md text-[18px] text-[#898989] focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="relative w-full  mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description"
              maxLength={150}
              className="w-full h-[95px] px-4 py-5 border border-[#DCDCDC] rounded-md text-[18px] text-[#898989] resize-none focus:outline-none"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {form.description.length}/150
            </div>
          </div>

          {/* Media Preview */}
          <div className="flex justify-center w-full max-w-[530px] mx-auto">
            <img
              src="https://i.postimg.cc/KY1cvCgD/certificate-sample.png" // Replace with actual preview if dynamic
              alt="Certificate"
              className="w-full h-[285px] rounded-lg object-cover border border-[#DCDCDC]"
            />
          </div>

        </div>

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-b-lg">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddMedia;
