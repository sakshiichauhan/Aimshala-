import { useState, useRef, ChangeEvent } from "react";
import CalendarIcon from "@/assets/Consultant/Calendar.png";
import { ChevronDown, X } from "lucide-react";
import DiscardChanges from "./Discard";
import { AiOutlineLink } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import MediaCard from "./MediaCard";
import RenderInput from "@/modules/consultant/components/RenderInput";


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
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [showMediaCard, setShowMediaCard] = useState<boolean>(false);
  const [showMediaOptions, setShowMediaOptions] = useState(false);

  const mediaOptionsRef = useRef<HTMLDivElement>(null);
  const [mediaForm, setMediaForm] = useState({ mediaLink: '' });
  const toggleMediaOptions = () => setShowMediaOptions(prev => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };
  const handleMediaInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMediaForm(prev => ({ ...prev, [name]: value }));
  };
  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <div className="flex items-center justify-center font-poppins">
      <div className="w-[791px] rounded-lg shadow-md overflow-hidden bg-white">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Honors & Awards</h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-2 py-8 space-y-4">
          {/* Title */}
          <RenderInput
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Ex: Retail Sales Manager"
          />

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
          <RenderInput
            label="Issuer"
            name="issuer"
            value={form.issuer}
            onChange={handleChange}
            placeholder="Ex: Microsoft"
          />

          {/* Issue Date */}
          <RenderInput
            label="Issue date"
            name="issueDate"
            type="date"
            isDate={true}
            value={form.issueDate}
            onChange={handleChange}
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

          {/* Media */}
          <div className="w-full max-w-[530px] mx-auto mt-8">
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
    </div>
  );
};

export default AddHonors;
