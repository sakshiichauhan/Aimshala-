import AppointmentCard from "../../components/AppointmentCard"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import SessionRequestCard from "../../components/SessionRequestCard"
import profile from "@/assets/Profile-1.png";
import NotificationCard from "../../components/NotificationCard"



export default function ConsultDesk() {
    return <section className="mt-20 font-poppins flex gap-6 ">
        {/* left side */}
        <div className="flex-1 flex flex-col gap-4 w-[1020px] flex-shrink-0">
            <div className="flex flex-col gap-4">
                <div className="border border-gray-400 rounded-2xl p-4 flex gap-4 bg-white">
                    <div className="h-[70px] w-[70px] inline-flex items-center justify-center text-5xl">👋</div>
                    <div>
                        <h3 className="text-[15px] text-[#787878]">Welcome back, <span>Vikramjeet Singh</span></h3>
                        <h2 className="text-[28px] ">Consultant Desk</h2>
                    </div>
                </div>
                <div className="border border-gray-400 rounded-2xl p-4 bg-white">
                    <div className="flex items-center gap-2 w-full ">
                        <h2 className="text-[24px] whitespace-nowrap">Upcoming Sessions</h2>
                        <Separator className="bg-[#FFCB07] flex-1" />
                        <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">View All</h2>
                    </div>
                    <div className=" flex gap-2 mt-4">
                        <Button variant="outline">1:1 Call</Button>
                        <Button variant="outline">1:1 Call</Button>
                    </div>

                    <h1 className="text-[20px] font-semibold mt-4">Appointments</h1>

                    {/* Appointment card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                    </div>
                </div>

                {/* Session Request */}
                <div className="border p-4 rounded-2xl border-gray-400 bg-white ">
                    <div className="flex items-center gap-2 w-full ">
                        <h2 className="text-[24px] whitespace-nowrap">Session Request</h2>
                        <Separator className="bg-[#FFCB07] flex-1" />
                        <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">View All</h2>
                    </div>

                    <div >
                        <div className="flex gap-2 p-2">
                            <Button variant="outline">Today</Button>
                            <Button variant="outline">Tomorrow</Button>
                            <Button variant="outline">This Week</Button>
                            <Button variant="outline">Next Week</Button>
                        </div>
                        {/* Filter */}
                        <div></div>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <SessionRequestCard />
                        <SessionRequestCard />
                        <SessionRequestCard />
                        <SessionRequestCard />
                    </div>
                </div>
            </div>
        </div>
        {/* right */}
        <div className="w-[390px]">
            <div className="flex flex-col gap-6">
                {/* Profile card */}
                <div className="flex border border-gray-400 bg-white rounded-xl p-3 gap-5">
                    <div>
                        <img src={profile} alt="profile" className="w-[112px] h-[112px] rounded-full ring-6 ring-[#0FBBC3]" />
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <h2 className="text-[24px] font-bold">John doe</h2>
                            <h3 className="text-[#787878] text-[20px]">Counselor</h3>
                        </div>
                        <div>
                            <h2 className="text-[#0FBBC3] text-[16px]">75% Profile Complete</h2>
                            <h3 className="text-[#93268F] text-[16px]">View Profile</h3>
                        </div>
                    </div>

                </div>
                {/* Schedule button */}
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[22px] font-bold">My Schedules</h2>
                        <h2 className="text-[#93268F] font-semibold">See All</h2>
                    </div>
                </div>
                {/* dummy calendar design */}
                <div className="border border-gray-400 rounded-xl h-[200px]">
                </div>
                {/* Latest Notifications design */}
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[22px] font-bold">Latest Notifications</h1>
                        <h1 className="text-[#93268F] font-semibold">See All</h1>
                    </div>
                    {/* Notification cards container */}
                    <div className="flex flex-col gap-3 mt-3">
                        <NotificationCard />
                        <NotificationCard />
                        <NotificationCard />
                    </div>
                </div>
            </div>
        </div>

    </section>
}


