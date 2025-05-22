import { X } from "lucide-react";
import DiscardChanges from "./Discard";
import { useState } from "react";

interface MediaCardProps {
  onDelete: () => void;
  onSave: () => void;
  onClose: () => void;
  form: {
    mediaLink: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MediaCard = ({
  onDelete,
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
    <div className="flex items-center justify-center  font-poppins">
      <div className="w-[717px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Media</h1>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Section */}
        <div className="px-18 py-8 ">


          <div className="relative w-[517px] h-[57px] ">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Media Link
            </label>
            <input
              type="text"
              name="mediaLink"
              value={form?.mediaLink || ""}
              onChange={handleChange}
              placeholder="Ex: World History"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[18px] text-[#898989] focus:outline-none"
            />
          </div>

         
        </div>

        {/* Footer Buttons */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex items-center justify-between rounded-b-lg">
          <button
            onClick={onDelete}
            className="text-[#000000] text-[18px] font-medium hover:text-red-700"
          >
            Delete Expertise
          </button>
          <button
            onClick={onSave}
            className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7A206F] transition"
          >
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

export default MediaCard;
