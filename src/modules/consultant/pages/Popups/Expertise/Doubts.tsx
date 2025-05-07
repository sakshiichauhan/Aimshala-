import { X } from "lucide-react";
import { useState } from "react"


export function Doubts({ onClose }: { onClose: () => void }) {
    const [expertiseTitle, setExpertiseTitle] = useState("");
    const [description, setDescription] = useState("");
    const [queryResponseTime, setQueryResponseTime] = useState("48 hours");
    const [followUp, setFollowUp] = useState("allow");
    const [followUpPeriod, setFollowUpPeriod] = useState("48 Hours");
    const [followUpsAllowed, setFollowUpsAllowed] = useState("2 times");
    const [price, setPrice] = useState("");
    const [discountedPrice, setDiscountedPrice] = useState("");
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5] font-poppins">
            <div className="w-full max-w-[790px] max-h-[880px] bg-white rounded-lg shadow-lg">
                <div className="bg-[#F5F5F5] rounded-t-lg flex justify-between items-center gap-4 min-h-[60px] px-6 ">
                    <h1 className="text-lg font-semibold">Doubt Pucho</h1>
                    <button
                        onClick={onClose}
                        className=" top-2 right-4 p-2 hover:bg-gray-100 inline-flex justify-center items-center"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-6">
                    {/* Expertise Title */}
                    <div className="relative">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                            Expertise Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Expertise Title"
                            value={expertiseTitle}
                            onChange={(e) => setExpertiseTitle(e.target.value)}
                            className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
                        />
                    </div>

                    {/* Description */}
                    <div className="relative">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                            Description
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Enter Description about expertise"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={250}
                            className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px] resize-none"
                        />
                        <div className="text-right text-sm text-[#898989]">
                            {description.length} / 250
                        </div>
                    </div>

                    {/* Query Response Time */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-2">Query Response Time</h2>
                        <div className="flex gap-2 flex-wrap">
                            {["24 Hours", "48 Hours", "3 Days", "5 Days", "7 Days"].map((time) => (
                                <button
                                    key={time}
                                    onClick={() => setQueryResponseTime(time)}
                                    className={`w-[129px] h-[43px] flex items-center justify-center rounded-[40px] border text-[18px] transition-all duration-200 ease-in-out rotate-[-0.28deg] ${queryResponseTime === time
                                        ? " border-[#94278F] text-[#94278F] bg-white"
                                        : " border-[#DCDCDC] text-[#000000] bg-white"
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Follow Up */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-2">Follow Up</h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFollowUp("allow")}
                                className={`w-[171px] h-[43px] flex items-center justify-center rounded-[40px] border text-[18px] transition-all duration-200 ease-in-out rotate-[-0.28deg] ${followUp === "allow"
                                    ? " border-[#94278F] text-[#94278F] bg-white"
                                    : " border-[#DCDCDC] text-[#000000] bg-white"
                                    }`}
                            >
                                Allow Follow Up
                            </button>
                            <button
                                onClick={() => setFollowUp("disallow")}
                                className={`w-[219px] h-[43px] flex items-center justify-center rounded-[40px] border text-[18px] transition-all duration-200 ease-in-out rotate-[-0.28deg] ${followUp === "disallow"
                                    ? " border-[#94278F] text-[#94278F] bg-white"
                                    : " border-[#DCDCDC] text-[#000000] bg-white"
                                    }`}
                            >
                                Don't Allow Follow Up
                            </button>
                        </div>
                    </div>

                    {/* Follow Up Period */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-2">Follow up Period</h2>
                        <div className="flex gap-2 flex-wrap">
                            {["24 Hours", "48 Hours", "3 Days", "5 Days", "7 Days"].map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setFollowUpPeriod(period)}
                                    className={`w-[129px] h-[43px] flex items-center justify-center rounded-[40px] border text-[18px] transition-all duration-200 ease-in-out rotate-[-0.28deg] ${followUpPeriod === period
                                        ? " border-[#94278F] text-[#94278F] bg-white"
                                        : " border-[#DCDCDC] text-[#000000] bg-white"
                                        }`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Follow Ups Allowed */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-2">Follow ups Allowed</h2>
                        <div className="flex gap-2 flex-wrap">
                            {["1 time", "2 times", "3 times", "4 times", "6 times", "7 times"].map((count) => (
                                <button
                                    key={count}
                                    onClick={() => setFollowUpsAllowed(count)}
                                    className={`w-[129px] h-[43px] flex items-center justify-center rounded-[40px] border text-[18px] transition-all duration-200 ease-in-out rotate-[-0.28deg] ${followUpsAllowed === count
                                        ? " border-[#94278F] text-[#94278F] bg-white"
                                        : " border-[#DCDCDC] text-[#000000] bg-white"
                                        }`}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                                Price (₹)
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
                            />
                        </div>
                        <div className="relative">
                            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                                Discounted Price (₹)
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Discounted Price"
                                value={discountedPrice}
                                onChange={(e) => setDiscountedPrice(e.target.value)}
                                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#F5F5F5] rounded-b-lg flex justify-center px-6 py-4">
                    <button className="px-6 py-2 bg-[#94278F] text-white rounded-md hover:bg-[#7A206F]">
                        Save
                    </button>
                </div>
            </div>
        </div>

    )
}