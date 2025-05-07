export default function ThankYouPage() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center w-[734px] h-[333px]">
            <div className="bg-[#787878]/20 h-15 w-15 rounded-full inline-flex justify-center items-center mb-4">
                <img src="" alt="" />
            </div>
            <h1 className="text-[32px] font-bold mb-2">Thank You</h1>
            <p className="text-[16px] font-[600] text-[#787878]">Your Session is Confirmed</p>
            <p className="text-sm text-[#787878] mb-3">Your Session ID: 123456789</p>
            <p className="text-sm text-[#787878] mb-3">We have sent you an email with the details.</p>
            <button className="bg-[var(--color-purple)] text-white py-2 px-4 rounded-[12px] mt-2">
                Go To My Sessions
            </button>
        </div>
    </div>
    );
}