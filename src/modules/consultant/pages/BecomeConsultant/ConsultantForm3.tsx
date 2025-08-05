// import { useNavigate } from 'react-router-dom';

const ConsultantForm3 = () => {
  // const navigate = useNavigate();
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[734px] border border-[#E5E7EB]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left w-full bg-[#93268F]/4 mb-8 flex items-center gap-2">
            <div className="w-[3px] h-[30px] bg-[#94278F]" />
            <h1 className="text-[20px] font-bold text-[#1E232C]">
              Become a <span className="text-[#94278F]">Consultant</span>
            </h1>
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
              City/Location
            </label>
            <input
              type="text"
              placeholder="Enter City/Location"
              className="w-full p-3 border text-gray-400 border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
              Headline
            </label>
            <input
              type="text"
              placeholder="Enter Headline"
              className="w-full p-3 border text-gray-400 border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
              Bio/About You
            </label>
            <textarea
              placeholder="Enter Bio/About you"
              rows={4}
              className="w-full p-3 border text-gray-400 border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" className="h-5 w-5 accent-[#94278F]" />
            <label className="text-sm text-gray-600">
              I have read and agree to the{' '}
              <a href="#" className="text-[#94278F] underline">
                Terms and Conditions.
              </a>
            </label>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="h-[46px] w-[170px] bg-[#94278F] text-white rounded-md hover:bg-[#7A206F]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultantForm3;