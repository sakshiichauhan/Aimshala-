import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AppointmentCard from "../../components/AppointmentCard";
import  SessionRequestCard  from "../../components/SessionRequestCard";

// icons
import icon1 from "@/assets/Icons/icon1.svg"
import icon2 from "@/assets/Icons/icon2.svg"
import icon3 from "@/assets/Icons/icon3.svg"
import icon4 from "@/assets/Icons/icon4.svg"

const summaries = [
    { icon: icon1, description: "Upcoming Sessions", value: 62 },
    { icon: icon2, description: "Requested for You", value: 24 },
    { icon: icon3, description: "Pool requests", value: 35 },
    { icon: icon4, description: "Completed", value: 32 },
];

export default function Sessions() {
    return <section className="border mt-20 rounded-2xl font-poppins p-4 m-2 bg-white">
        <div>
            <p className="font-bold text-[28px]">Sessions</p>
            <p className="text-[20px] text-[#787878]">Manage bookings</p>
        </div>
        <div className="mt-6 p-2 space-y-8">
            <div className="flex  gap-10">
                {summaries.map((s) => (
                    <div key={s.value} className="flex justify-between border w-[330px] h-[95px] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                            <div className="bg-[#93268F]/5  rounded-xl inline-flex justify-center items-center">
                                <img src={s.icon} alt="icons" className="w-15 h-15" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-2xl font-medium">
                                    {s.value}
                                </div>
                                <div className="text-sm text-gray-500 mb-1">
                                    {s.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Upcoming Sessions</h2>
                <Separator className="bg-[#FFCB07] flex-1" />
                <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">See all</h2>
            </div>
            <div>
                <div className="flex gap-2">
                    <Button variant="outline">1:1 Call</Button>
                    <Button variant="outline">1:1 Call</Button>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <AppointmentCard />
                
            </div>

            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Request Pool</h2>
                <Separator className="bg-[#FFCB07] flex-1" />
                <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">See all</h2>
            </div>
            <div className="flex gap-2">
                <Button variant="outline">Today</Button>
                <Button variant="outline">Tomorrow</Button>
                <Button variant="outline">This Week</Button>
                <Button variant="outline">Next Week</Button>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <SessionRequestCard />
                <SessionRequestCard />
                <SessionRequestCard />
                <SessionRequestCard />
            </div>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Requested By You</h2>
                <Separator className="bg-[#FFCB07] flex-1" />
                <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">See all</h2>
            </div>
            <div>
                <div className="flex gap-2">
                    <Button variant="outline">Today</Button>
                    <Button variant="outline">Tomorrow</Button>
                    <Button variant="outline">This Week</Button>
                    <Button variant="outline">Next Week</Button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <SessionRequestCard />
                    <SessionRequestCard />
                    <SessionRequestCard />
                    <SessionRequestCard />
                </div>
            </div>
        </div>

    </section>
}