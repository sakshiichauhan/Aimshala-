import { useState, ChangeEvent, useRef, useEffect } from "react";
import { X } from "lucide-react";

import DiscardChanges from "./Discard";
import { AiOutlineLink } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import MediaCard from "./MediaCard";
import RenderInput from "@/modules/consultant/components/RenderInput";

interface AddEducationProps {
  onClose: () => void;
}

export interface FormState {
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
  const [showMediaCard, setShowMediaCard] = useState<boolean>(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [showMediaOptions, setShowMediaOptions] = useState(false);
  const mediaOptionsRef = useRef<HTMLDivElement>(null);
  const [mediaForm, setMediaForm] = useState({ mediaLink: '' });

  const toggleMediaOptions = () => setShowMediaOptions(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mediaOptionsRef.current && !mediaOptionsRef.current.contains(event.target as Node)) {
        setShowMediaOptions(false);
      }
    };
    if (showMediaOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMediaOptions]);


  const handleMediaInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMediaForm(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    const exists = form.skills.includes(trimmed);
    let updatedSkills;

    if (exists) {
      updatedSkills = form.skills.filter((skill) => skill !== trimmed);
    } else if (form.skills.length < 10) {
      updatedSkills = [...form.skills, trimmed];
    } else {
      return;
    }

    setForm({ ...form, skills: updatedSkills });
    setSkillInput("");
  };

  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setForm({
      ...form,
      skills: form.skills.filter((skill) => skill !== skillToRemove),
    });
  };

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
          <RenderInput 
            label="School" 
            name="school" 
            placeholder="Ex: Boston University" 
            value={form.school} 
            onChange={(e) => setForm({...form, school: e.target.value})}
          />
          <RenderInput 
            label="Degree" 
            name="degree" 
            placeholder="Ex: Bachelor's" 
            value={form.degree} 
            onChange={(e) => setForm({...form, degree: e.target.value})}
          />
          <RenderInput 
            label="Field of study" 
            name="fieldOfStudy" 
            placeholder="Ex: Business" 
            value={form.fieldOfStudy} 
            onChange={(e) => setForm({...form, fieldOfStudy: e.target.value})}
          />
          <div className="flex justify-between gap-4 max-w-[530px] mx-auto">            <RenderInput 
              label="Start date" 
              name="startDate" 
              type="date"
              isDate={true}
              value={form.startDate} 
              onChange={(e) => setForm({...form, startDate: e.target.value})}
            />
            <RenderInput 
              label="End date (or expected)" 
              name="endDate" 
              type="date"
              isDate={true}
              value={form.endDate} 
              onChange={(e) => setForm({...form, endDate: e.target.value})}
            />
          </div>
          <RenderInput 
            label="Grade" 
            name="grade" 
            placeholder="Enter Grade" 
            value={form.grade} 
            onChange={(e) => setForm({...form, grade: e.target.value})}
          />
          <RenderInput 
            label="Activities and societies" 
            name="activities" 
            placeholder="Enter Activities" 
            value={form.activities} 
            onChange={(e) => setForm({...form, activities: e.target.value})}
          />
          <RenderInput 
            label="Description" 
            name="description" 
            placeholder="Enter Description" 
            type="text" 
            isTextarea 
            maxLength={150}
            value={form.description} 
            onChange={(e) => setForm({...form, description: e.target.value})}
          />

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
                      className="text-[#5B5E61] hover:text-[#000000] text-[18px]"
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
            <button
              type="button"
              onClick={toggleMediaOptions}
              className="w-[115px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-[16px] font-normal flex items-center justify-center cursor-pointer"
            >
              + Add Media
            </button>
            {showMediaOptions && (
              <div
                ref={mediaOptionsRef}
                className="mt-2 w-[212px] h-[102px] border border-gray-200 rounded-md bg-white shadow-sm text-[15px] font-normal text-black z-10"
              >
                <ul className="divide-y divide-gray-200">
                  <li
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setShowMediaCard(true);
                      setShowMediaOptions(false);
                    }}
                  >
                    <AiOutlineLink className="w-[27px] h-[27px] text-[#1E232C]" />
                    <span>Add a link</span>
                  </li>
                  <li
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      document.getElementById("video-upload")?.click();
                      setShowMediaOptions(false);
                    }}
                  >
                    <CiImageOn className="w-[27px] h-[27px] text-[#1E232C]" />
                    <span>Upload a photo</span>
                  </li>
                </ul>
              </div>
            )}
            <input
              type="file"
              accept="video/*"
              id="video-upload"
              className="hidden"
              onChange={handleVideoUpload}
            />
            {videoFile && (
              <p className="text-xs text-gray-500 mt-1">{videoFile.name}</p>
            )}
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

        {/* Media Card */}
        {showMediaCard && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <MediaCard
              onClose={() => setShowMediaCard(false)}
              onSave={() => {
                console.log('Media saved:', mediaForm);
                setShowMediaCard(false);
              }}
              onDelete={() => {
                console.log('Media card deleted');
                setMediaForm({ mediaLink: '' });
                setShowMediaCard(false);
              }}
              form={mediaForm}
              handleChange={handleMediaInputChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AddEducation;
