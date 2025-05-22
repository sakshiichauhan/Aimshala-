import { useState } from "react";
import { X } from "lucide-react";
import DiscardChanges from "./Discard";
import RenderInput from "@/modules/consultant/components/RenderInput";

interface MediaCardProps {
  onDelete: () => void;
  onSave: () => void;
  onClose: () => void;
  form: {
    mediaLink: string;
    mediaTitle?: string;
    mediaDescription?: string;
    mediaFile?: File | null;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const MediaCard = ({
  onSave,
  onClose,
  form,
  handleChange,
}: MediaCardProps) => {
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);

  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Media</h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Section */}
        <div className="px-8 py-8 space-y-5">
          <RenderInput
            label="Media Link"
            name="mediaLink"
            value={form.mediaLink}
            onChange={handleChange}
            placeholder="Enter Media Link"
          />

          {/* Show these only if Media Link is filled */}
          {form.mediaLink.trim() !== "" && (
            <>
              <RenderInput
                label="Media Title"
                name="mediaTitle"
                value={form.mediaTitle || ""}
                onChange={handleChange}
                placeholder="Enter Title"
              />

              <RenderInput
                label="Media Description"
                name="mediaDescription"
                value={form.mediaDescription || ""}
                onChange={handleChange}
                placeholder="Enter Description"
                isTextarea={true}
              />

              {/* File Upload */}
              <div className="relative w-full max-w-[530px] mx-auto">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleChange}
                  name="mediaFile"
                  className="hidden"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-b-lg">
          <button
            onClick={onSave}
            className="w-[114px] h-[40px] bg-[#94278F] text-white text-[16px] font-semibold rounded-md hover:bg-[#7A206F] transition"
          >
            Apply
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

export default MediaCard;
