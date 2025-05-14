
interface DiscardChangesProps {
  onCancel: () => void;
  onDiscard: () => void;
}

const DiscardChanges = ({ onCancel, onDiscard }: DiscardChangesProps) => {
  return (
    <div className="flex items-center justify-center font-poppins">
      <div className="bg-white rounded-2xl shadow-md p-8 w-[400px] h-[200px] flex flex-col items-center space-y-2">
        <h1 className="text-[20px] font-semibold text-[#000000] text-center">
          Discard changes
        </h1>
        <p className="text-[16px] font-normal text-[#787878] text-center">
          You have unsaved changes. Do you want to discard them?
        </p>
        <div className="flex space-x-4 pt-2">
          <button 
            onClick={onCancel}
            className="w-[136px] h-[46px] border border-[#94278F]  text-[#94278F] rounded-[12px] font-normal hover:bg-[#F8E1F7] transition"
          >
            Cancel
          </button>
          <button 
            onClick={onDiscard}
            className="w-[170px] h-[46px] bg-[#94278F] text-white font-normal rounded-[12px]  hover:bg-[#7a1d72] transition"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscardChanges;
