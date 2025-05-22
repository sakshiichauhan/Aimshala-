import React, { useState } from "react";
import { X } from "lucide-react";
import DiscardChanges from "./Discard";
import RenderInput from "@/modules/consultant/components/RenderInput";

interface AddCourseProps {
  onClose: () => void;
}

const AddCourse = ({ onClose }: AddCourseProps) => {
  const [form, setForm] = useState({
    courseName: "",
    courseNumber: "",
    associatedWith: "",
  });
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins ">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header with X button */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Course</h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">
          <RenderInput
            label="Course name"
            name="courseName"
            value={form.courseName}
            onChange={handleChange}
            placeholder="Ex: World History"
          />

          <RenderInput
            label="Number"
            name="courseNumber"
            value={form.courseNumber}
            onChange={handleChange}
            placeholder="Ex: HIS101"
          />

          <RenderInput
            label="Associated with"
            name="associatedWith"
            value={form.associatedWith}
            onChange={handleChange}
            placeholder="Please Select"
          />
        </div>

        {/* Save Button */}
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

export default AddCourse;
