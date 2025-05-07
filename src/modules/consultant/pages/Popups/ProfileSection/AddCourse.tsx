import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface AddCourseProps {
  onClose: () => void;
}

const AddCourse = ({ onClose }: AddCourseProps) => {
  const [form, setForm] = useState({
    courseName: "",
    courseNumber: "",
    associatedWith: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins ">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header with X button */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Course</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">

          {/* Course Name */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Course name</label>
            <input
              type="text"
              name="courseName"
              value={form.courseName}
              onChange={handleChange}
              placeholder="Ex: World History"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[18px] text-[#898989] focus:outline-none"
            />
          </div>

          {/* Course Number */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Number</label>
            <input
              type="text"
              name="courseNumber"
              value={form.courseNumber}
              onChange={handleChange}
              placeholder="Ex: HIS101"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[18px] text-[#898989] focus:outline-none"
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
              className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[18px] text-[#898989] focus:outline-none"
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
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

export default AddCourse;
