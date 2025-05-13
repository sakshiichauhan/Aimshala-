import { Clock, Video, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import profile from "@/assets/Profile-1.png"

export default function SessionRequestCard() {
    return (
        <div className="border rounded-xl p-4 mt-2 w-[474px] bg-white relative">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1">
                        <Video size={16} /> <span className="text-[14px]">1:1 Call</span>
                    </span>
                    <Separator orientation="vertical" />
                    <span className="text-[14px]">
                        <span className="font-semibold">Individual</span> Student
                    </span>
                    <Separator orientation="vertical" />
                    <span className="inline-flex items-center gap-1">
                        <Clock size={16} /> <span className="text-[14px]" >30 Mins</span>
                    </span>
                    <Separator orientation="vertical" />
                    <span className="font-semibold text-[14px]">
                        Price: <span className="font-normal text-[#4D4D4D]">₹100</span>
                    </span>
                </div>

                <div className="flex gap-3 items-center">
                    <img src={profile} alt="profile" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h2 className="text-lg font-semibold">John Doe</h2>
                        <p className="text-[#787878] text-[12px] font-normal">Electronics communication engineering</p>
                    </div>
                </div>

                <div className="w-[300px] h-[2px] bg-gradient-to-r from-transparent to-[#93268F]/40"></div>

                <div className="text-sm">
                    <span className="border bg-white py-1 px-2 rounded-sm text-[#626262] border-[#E7E6F080]">
                        <span className="font-semibold">Career Consulting:</span> Goal Setting
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#626262]">
                    <Calendar size={16} />
                    <span>
                        On <span className="font-semibold">Sep 20, 2024</span> at <span className="font-semibold text-[#626262]">5:00 PM</span>
                    </span>
                </div>

                <div className="self-end flex flex-col gap-3 absolute top-22">
                    <Button
                        variant="outline"
                        className="border text-[#22B46E] hover:bg-green-50 w-[108px]"
                    >
                        Accept
                    </Button>
                    <Button
                        variant="outline"
                        className=" text-[#EF3030] hover:bg-red-50 w-[108px]"
                    >
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    );
}



