import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AppointmentCard from "../../components/AppointmentCard";
import SessionRequestCard from "../../components/SessionRequestCard";
import { useState } from 'react';

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

// New components for each tab
function AllSessions() {
    return (
        <>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Upcoming Sessions</h2>
                <Separator className="bg-[#FFCB07] flex-1 h-[2px]" />
                <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">See all</h2>
            </div>
            <div>
                <div className="flex gap-2">
                    <Button variant="outline"  className="font-medium text-[#000000]">1:1 Call</Button>
                    <Button variant="outline" className="font-medium text-[#000000]">1:1 Call</Button>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <AppointmentCard />
            </div>

            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap"> Pool Request</h2>
                <Separator className="bg-[#FFCB07] w-2 flex-1 h-[2px]" />
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
                <h2 className="text-[24px] whitespace-nowrap">Requested for You</h2>
                <Separator className="bg-[#FFCB07] flex-1 h-[2px]" />
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
        </>
    );
}

function PoolSessions() {
    return (
        <>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap"> Pool Request</h2>
                <Separator className="bg-[#FFCB07] w-2 flex-1 h-[2px]" />
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
        </>
    );
}

function RequestedSessions() {
    return (
        <>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Requested for You</h2>
                <Separator className="bg-[#FFCB07] flex-1 h-[2px]" />
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
        </>
    );
}

function ScheduledSessions() {
    return (
        <>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Upcoming Sessions</h2>
                <Separator className="bg-[#FFCB07] flex-1 h-[2px]" />
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
        </>
    );
}

export default function Sessions() {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const renderContent = () => {
        switch (activeFilter) {
            case 'All': return <AllSessions />;
            case 'Pool': return <PoolSessions />;
            case 'Requested': return <RequestedSessions />;
            case 'Scheduled': return <ScheduledSessions />;
            default: return null;
        }
    };

    return (
        <section className="border mt-20 rounded-2xl font-poppins p-4 m-2 bg-white">
            <div className="p-2 border-b-1">
                <p className="font-semibold text-[28px]">Sessions</p>
                <p className="text-[20px] text-[#787878]">Manage bookings</p>
            </div>

            <div className="mt-6 p-2 space-y-6">
                <div className="flex justify-between gap-10">
                    {summaries.map((s) => (
                        <div key={s.value} className="flex justify-between border w-[330px] h-[95px] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-4">
                                <div className="bg-[#93268F]/5  rounded-xl inline-flex justify-center items-center">
                                    <img src={s.icon} alt="icons" className="w-15 h-15" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-semibold text-[#26282c]">
                                        {s.value}
                                    </div>
                                    <div className="text-[16px] text-[#626262] font-medium mb-1">
                                        {s.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="max-w-[1360px] h-[50px] inline-flex bg-white border border-gray-300 rounded-[12px] ">
                        {['All', 'Pool', 'Requested', 'Scheduled'].map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(tab)}
                                className={`px-8 h-full flex items-center text-xl transition-colors duration-200 rounded-[inherit] ${activeFilter === tab
                                        ? "text-[#94278F] font-medium bg-[#93268F0F]"
                                        : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {renderContent()}
            </div>
        </section>
    );
}