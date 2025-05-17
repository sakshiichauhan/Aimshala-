import { useState } from "react";
import Calendar from "@/assets/Consultant/Calendar.png";
import { X } from "lucide-react";
import DiscardChanges from "./Discard";

interface AddEducationProps {
  onClose: () => void;
}

interface FormState {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  activities: string;
  description: string;
  skills: string[];
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
    skills: [],
  });

  const [showDiscardPopup, setShowDiscardPopup] = useState(false);
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggleSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    const exists = form.skills.includes(trimmed);
    let updatedSkills;

    if (exists) {
      updatedSkills = form.skills.filter((skill) => skill !== trimmed);
    } else if (form.skills.length < 5) {
      updatedSkills = [...form.skills, trimmed];
    } else {
      return;
    }

    setForm({ ...form, skills: updatedSkills });
    setSkillInput("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setForm({
      ...form,
      skills: form.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const renderInput = (
    label: string,
    name: keyof FormState,
    placeholder: string = "",
    type: string = "text",
    isDate: boolean = false,
    isTextarea: boolean = false,
    maxLength?: number
  ) => (
    <div className="relative w-full max-w-[530px] mx-auto mb-5">
      <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
        {label}
      </label>

      {isTextarea ? (
        <>
          <textarea
            name={name}
            value={form[name] as string}
            onChange={handleChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
          />
          {maxLength && (
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {(form[name] as string).length}/{maxLength}
            </div>
          )}
        </>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={form[name] as string}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989] ${
            isDate
              ? "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:z-[-10]"
              : ""
          }`}
        />
      )}

      {isDate && !isTextarea && (
        <img
          src={Calendar}
          alt="Calendar"
          onClick={() =>
            (document.getElementById(name) as HTMLInputElement)?.showPicker?.()
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
        />
      )}
    </div>
  );

  return (
    <>
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#000000]">Add Education</h1>
          <button
            onClick={() => setShowDiscardPopup(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="px-8 py-8">
          {renderInput("School", "school", "Ex: Boston University")}
          {renderInput("Degree", "degree", "Ex: Bachelor's")}
          {renderInput("Field of study", "fieldOfStudy", "Ex: Business")}
          <div className="flex justify-between gap-4 max-w-[530px] mx-auto">
            {renderInput("Start date", "startDate", "", "date", true)}
            {renderInput("End date (or expected)", "endDate", "", "date", true)}
          </div>
          {renderInput("Grade", "grade", "Enter Grade")}
          {renderInput("Activities and societies", "activities", "Enter Activities")}
          {renderInput("Description", "description", "Enter Description", "text", false, true, 150)}

          {/* Skills Section */}
          <div className="w-full max-w-[530px] mx-auto mt-6">
            <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
            <p className="text-base text-[#6b7175] mb-4">
              We recommend adding your top 5 used in this experience. They'll also appear in your Skills section.
            </p>

            {showSkillInput && (
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleToggleSkill();
                    }
                  }}
                  placeholder="Type a skill and press Enter"
                  className="flex-1 h-[40px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px] placeholder-[#898989]"
                />
              </div>
            )}

            <button
              onClick={() => setShowSkillInput(!showSkillInput)}
              className="w-[97px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition"
            >
              + Add Skill
            </button>
<div className="flex flex-col gap-2 mt-4">
  {form.skills.map((skill, index) => (
    <div
      key={index}
      className="flex items-center justify-between h-[40px] px-2 bg-[#ECECEC] border border-[#DCDCDC] rounded-md text-[#3C3C3C] text-[15px]"
    >
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleRemoveSkill(skill)}
          className="  text-[#5B5E61] hover:text-[#000000] text-[18px]"
        >
          ×
        </button>
        <span>{skill}</span>
      </div>
      <div className="text-[#6B6B6B] cursor-move text-lg">≡</div>
    </div>
 

          
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div className="w-full max-w-[530px] mx-auto mt-6">
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
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-b-lg">
          <button
            onClick={onClose}
            className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition"
          >
            Save
          </button>
        </div>

        {/* Discard Confirmation */}
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
