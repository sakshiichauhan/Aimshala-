import { useState, useRef } from "react";

import { ChevronDown, X } from "lucide-react";
import DiscardChanges from "./Discard";
import { AiOutlineLink } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import MediaCard from "./MediaCard";
import RenderInput from "@/modules/consultant/components/RenderInput";

interface AddProjectProps {
  onClose: () => void;
}

interface FormState {
  projectName: string;
  description: string;
  currentlyWorking: boolean;
  startDate: string;
  endDate: string;
  associatedWith: string;
  skills: string[];
}

const AddProject = ({ onClose }: AddProjectProps) => {
  const [form, setForm] = useState<FormState>({
    projectName: "",
    description: "",
    currentlyWorking: false,
    startDate: "",
    endDate: "",
    associatedWith: "",
    skills: [],
  });
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [showMediaCard, setShowMediaCard] = useState<boolean>(false);
  const [showMediaOptions, setShowMediaOptions] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const mediaOptionsRef = useRef<HTMLDivElement>(null);
  const [mediaForm, setMediaForm] = useState({ mediaLink: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  const handleSkillToggle = () => {
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

  const toggleMediaOptions = () => setShowMediaOptions((prev) => !prev);

  const handleMediaInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMediaForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins ">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#000000]">Add Project</h1>
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
          {/* Project Name */}
          <RenderInput
            label="Project Name"
            name="projectName"
            value={form.projectName}
            onChange={handleChange}
            placeholder="Ex: World History"
          />

          {/* Description */}
          <RenderInput
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Description"
            isTextarea={true}
            maxLength={150}
          />

          {/* Skills Section */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
            <p className="text-base text-[#6b7175] mb-4">
              We recommend adding your top 5 used in this project. They'll also
              appear in your Skills section.
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
                      handleSkillToggle();
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

          {/* Additional Details */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2 mt-2">
              Additional Details
            </h2>

            <label className="inline-flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={form.currentlyWorking}
                onChange={handleChange}
                className="w-5 h-5 text-[#94278F] bg-white border border-[#DCDCDC] rounded focus:outline-none"
              />
              <span className="text-[16px] text-[#898989]">
                I am currently working on this project
              </span>
            </label>

            <div className="flex justify-between gap-4 max-w-[530px] mx-auto">
              <RenderInput
                label="Start Date"
                name="startDate"
                type="date"
                isDate={true}
                value={form.startDate}
                onChange={handleChange}
              />
              {!form.currentlyWorking && (
                <RenderInput
                  label="End Date"
                  name="endDate"
                  type="date"
                  isDate={true}
                  value={form.endDate}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="relative w-full max-w-[530px] mt-6">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                Associated With
              </label>
              <select
                name="associatedWith"
                value={form.associatedWith}
                onChange={handleChange}
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none appearance-none"
              >
                <option value="">Please Select</option>
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
                <option value="Company C">Company C</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989] pointer-events-none"
                size={20}
              />
            </div>
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
        {showMediaCard && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <MediaCard
              onClose={() => setShowMediaCard(false)}
              onSave={() => {
                console.log("Media saved:", mediaForm);
                setShowMediaCard(false);
              }}
              onDelete={() => {
                console.log("Media card deleted");
                setMediaForm({ mediaLink: "" });
                setShowMediaCard(false);
              }}
              form={mediaForm}
              handleChange={handleMediaInputChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProject;
