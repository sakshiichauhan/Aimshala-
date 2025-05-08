
interface DiscardChangesProps {
  onCancel: () => void;
  onDiscard: () => void;
}

const DiscardChanges = ({ onCancel, onDiscard }: DiscardChangesProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-opacity-30 font-poppins">
      <div className="bg-white rounded-2xl shadow-md p-8 w-[350px] flex flex-col items-center space-y-6">
        <h1 className="text-xl font-semibold text-[#1C1C1C] text-center">
          Discard changes
        </h1>
        <p className="text-sm text-[#6B7280] text-center">
          You have unsaved changes. Do you want to discard them?
        </p>
        <div className="flex space-x-4 pt-2">
          <button 
            onClick={onCancel}
            className="w-[120px] h-[44px] border border-[#94278F] text-[#94278F] rounded-[12px] font-medium hover:bg-[#F8E1F7] transition"
          >
            Cancel
          </button>
          <button 
            onClick={onDiscard}
            className="w-[120px] h-[44px] bg-[#94278F] text-white rounded-[12px] font-medium hover:bg-[#7a1d72] transition"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscardChanges;
