import { ChevronLeft, ChevronRight } from "lucide-react"

const Morning: { timeSlot: string }[] = [
    { timeSlot: '09:00 AM' },
    { timeSlot: '09:30 AM' },
    { timeSlot: '10:00 AM' },
    { timeSlot: '10:30 AM' },
    { timeSlot: '11:00 AM' },
    { timeSlot: '11:30 AM' },
];

const Afternoon: { timeSlot: string }[] = [
    { timeSlot: '12:30 PM' },
    { timeSlot: '01:00 PM' },
    { timeSlot: '01:30 PM' },
    { timeSlot: '02:00 PM' },
    { timeSlot: '02:30 PM' },
    { timeSlot: '03:00 PM' },
    { timeSlot: '03:30 PM' },
    { timeSlot: '04:00 PM' },
    { timeSlot: '04:30 PM' },
    { timeSlot: '05:00 PM' },
    { timeSlot: '05:30 PM' },
    { timeSlot: '06:00 PM' },
];

const Evening = Afternoon;

export default function Calendar() {
    return (
        <div className="font-poppins bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] flex justify-center items-center min-h-screen p-4">
            <div className="bg-white w-full max-w-2xl p-6 rounded-[20px] shadow-md">
            <div className="flex gap-3 bg-[var(--color-purple)]/4">
                    <span className="border-l-3 border-[var(--color-purple)]"></span>
                    <p className="text-[20px] font-medium ">Pick Date and Time for Business Address Verification</p>
                </div>

                <div className="flex justify-between items-center mb-4 text-sm mt-6">
                    <button><ChevronLeft size={20} /></button>
                    <div className="flex gap-26">
                        <div className="text-[var(--color-purple)] font-semibold border-b-2 border-[var(--color-purple)] pb-1">Today<br /><span className="text-xs font-normal">25 Slots Available</span></div>
                        <div className="text-[#17B36B] font-semibold">Tomorrow<br /><span className="text-xs font-normal">25 Slots Available</span></div>
                        <div className="text-[#767676]">Sun, 22 Sep<br /><span className="text-xs font-normal">No slots available</span></div>
                    </div>
                    <button><ChevronRight size={20} /></button>
                </div>

                <div className="space-y-4">
                    {[
                        { title: 'Morning', data: Morning },
                        { title: 'Afternoon', data: Afternoon },
                        { title: 'Evening', data: Evening },
                    ].map(({ title, data }) => (
                        <div key={title} className="border border-[#F4F4F4] p-1">
                            <div className="flex items-center gap-2 mb-2">
                                <p className="text-base font-medium text-gray-800">{title}</p>
                                <span className="text-sm text-[#767676]">({data.length} slot{data.length > 1 ? 's' : ''})</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {data.map((slot, i) => (
                                    <div
                                        key={i}
                                        className="border border-[var(--color-purple)] text-[var(--color-purple)] text-sm rounded-lg px-4 py-1 cursor-pointer hover:bg-[var(--color-purple)] hover:text-white transition"
                                    >
                                        {slot.timeSlot}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-6">
                    <button className="border border-[var(--color-purple)] text-[var(--color-purple)] px-4 py-2 rounded-[12px] w-[170px] font-medium">Back</button>
                    <button className="bg-[var(--color-purple)] text-white px-4 py-2 rounded-[12px] w-[170px] font-medium">Next</button>
                </div>
            </div>
        </div>
    );
}
