import AppointmentCard from "../../components/AppointmentCard"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import SessionRequestCard from "../../components/SessionRequestCard"
import profile from "@/assets/Profile-1.png";
import NotificationCard from "../../components/NotificationCard"
import OppCardImg from "@/assets/opportunity.png"
import { StarIcon } from "@heroicons/react/solid";
import { EventCard } from "../../components/EventCard";


export default function ConsultDesk() {
    return <section className="mt-20 font-poppins flex gap-6 ">
        {/* left side */}
        <div className="flex flex-col gap-4 w-[1020px]">
            <div className="flex flex-col gap-4">
                <div className="border border-[#E8E9E9] rounded-[16px] p-4 flex gap-4 bg-white">
                    <div className="h-[70px] w-[70px] inline-flex items-center justify-center text-5xl">👋</div>
                    <div>
                        <h3 className="text-[15px] text-[#787878]">Welcome back, <span>Vikramjeet Singh</span></h3>
                        <h2 className="text-[28px] ">Consultant Desk</h2>
                    </div>
                </div>
                <div className="border border-[#E8E9E9] rounded-2xl p-4 bg-white">
                    <div className="flex items-center gap-2 w-full ">
                        <h2 className="text-[28px] whitespace-nowrap">Upcoming Sessions</h2>
                        <Separator className="bg-[#FFCB07] flex-1" />
                        <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">View All</h2>
                    </div>
                    <div className=" flex gap-2 mt-4">
                        <Button variant="outline">1:1 Call</Button>
                        <Button variant="outline">1:1 Call</Button>
                    </div>

                    <h1 className="text-[20px] font-medium mt-4">Appointments</h1>

                    {/* Appointment card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <AppointmentCard />
                    </div>
                </div>

                {/* Session Request */}
                <div className="border p-4 rounded-[16px] border-[#E8E9E9] bg-white ">
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
            {/* Development opportunites */}
            <div className="border border-[#E8E9E9] rounded-[16px] p-4 bg-white">
                <div className="flex items-center gap-2 w-full">
                    <h2 className="text-[24px] whitespace-nowrap">Development <span className="font-semibold">Opportunities</span></h2>
                    <Separator className="bg-[#FFCB07] flex-1" />
                    <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">View All</h2>
                </div>
                <div className="mt-4">
                    <h2 className="text-[20px] font-medium">Learning Opportunities</h2>
                    <div className="mt-2 flex gap-4">
                        {/* opportunity card */}
                        <OpportunityCard />
                        <OpportunityCard />
                        <OpportunityCard />
                    </div>
                </div>
                {/* Webinar */}
                <div className="mt-4">
                    <h2 className="text-[20px] font-medium">Webinar</h2>
                    <div className="mt-4">
                        <div className="grid grid-cols-2 gap-2">
                            <EventCard
                                imageSrc="src/assets/Consultant/web-1.png"
                                category="Language"
                                author="John Doe"
                                title="Career Navigation Tips"
                                startDate={new Date("2024-09-20T17:00:00")}
                                mode="join"
                                onJoinClick={() => alert("Joining now…")}
                            />
                            <EventCard
                                imageSrc="src/assets/Consultant/web-2.png"
                                category="Academics"
                                author="John Doe"
                                title="Coding Workshop"
                                startDate={new Date("2024-09-20T17:00:00")}
                                mode="countdown"
                            />
                            <EventCard
                                imageSrc="src/assets/Consultant/web-3.png"
                                category="Management"
                                author="John Doe"
                                title="Leadership Workshop"
                                startDate={new Date("2024-09-20T17:00:00")}
                                mode="countdown"
                            /> <EventCard
                                imageSrc="src/assets/Consultant/web-4.jpg"
                                category="Technology"
                                author="John Doe"
                                title="Coding Workshop"
                                startDate={new Date("2024-09-20T17:00:00")}
                                mode="countdown"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Community and Networking */}
            <div className="border border-[#E8E9E9] rounded-[16px] p-4 bg-white">
                <div className="flex items-center gap-2 w-full">
                    <h2 className="text-[24px] whitespace-nowrap">Community and  <span className="font-semibold">Networking</span></h2>
                    <Separator className="bg-[#FFCB07] flex-1" />
                    <h2 className="text-[20px] whitespace-nowrap text-[#93268F]">View All</h2>
                </div>
                <div className="border border-[#E8E9E9] rounded-[16px] p-6 mt-5 bg-gradient-to-br from-[#F9F9F9] to-[#FFFFFF]">
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-20 h-20 bg-[#F3E8F3] rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#93268F]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"/>
                            </svg>
                        </div>
                        <h2 className="text-[24px] font-semibold text-[#2D2D2D] mb-2">Community Section</h2>
                        <p className="text-[#787878] text-center max-w-[300px]">
                            We're working on something exciting! Stay tuned for our new community features.
                        </p>
                        <div className="mt-4 flex items-center space-x-2 text-[#787878]">
                            <span className="animate-pulse">•</span>
                            <span className="text-purple">Coming Soon</span>
                            <span className="animate-pulse">•</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* right side */}
        <div className="w-[400px]">
            <div className="flex flex-col gap-6">
                {/* Profile card */}    
                <div className="flex border border-[#E8E9E9] bg-white rounded-xl p-3 gap-5">
                    <div className="flex items-center ml-3">
                        <div className="relative">
                            <img src={profile} alt="profile" className="w-[102px] h-[102px] rounded-full" />
                            <div 
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `conic-gradient(
                                        #0FBBC3 ${90 * 3.6}deg, 
                                        #d0f2f3 0deg 360deg
                                    )`,
                                    mask: 'radial-gradient(transparent 45px, black 46px)',
                                    WebkitMask: 'radial-gradient(transparent 45px, black 46px)'
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div className="flex flex-col">
                            <h2 className="text-[24px] font-bold">John doe</h2>
                            <h3 className="text-[#787878] text-[20px]">Counselor</h3>
                        </div>
                        <div>
                            <h2 className="text-[#0FBBC3] text-[16px]"><span>90%</span> Profile Complete</h2>
                            <h3 className="text-[#93268F] text-[16px]">View Profile</h3>
                        </div>
                    </div>

                </div>
                {/* Schedule button */}
                {/* <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[24px] font-semibold">My Schedules</h2>
                        <h2 className="text-[#93268F] font-medium">See All</h2>
                    </div>
                </div> */}
                {/* dummy calendar design */}
                {/* <div className="border border-[#E7E6F0] rounded-[16px] h-[200px] bg-[#FBFBFB]">
                </div> */}
                {/* Latest Notifications design */}
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[24px] font-semibold">Latest Notifications</h1>
                        <h1 className="text-[#93268F] font-medium">See All</h1>
                    </div>
                    {/* Notification cards container */}
                    <div className="flex flex-col gap-3 mt-3">
                        <NotificationCard />
                        <NotificationCard />
                        <NotificationCard />
                        <NotificationCard />
                    </div>
                </div>
            </div>
        </div>
    </section>
}



function OpportunityCard() {
    return (
        <div className="h-auto w-[310px] relative border border-[#E7E6F0] rounded-[16px]">
            <img src={OppCardImg} alt="image" />
            <div className="absolute bg-[#00000080] top-26 px-5 py-1 rounded-tr-[8px] blur-[4]">
                <h2 className="text-[12px] text-white font-normal">Suggested by <span className="font-medium">Mentor</span></h2>
            </div>
            <div className="mx-[15px] py-4">
                <div className="flex justify-between  mt-2 ">
                    <div className="border border-[##E7E6F080] rounded-[4px] text-[12px] px-[8px] py-[2px] inline-flex justify-center items-center text-[#626262]">Languages</div>
                    <div className="flex border border-[#E7E6F080] rounded-[4px] px-[8px] py-[2px] gap-2">
                        <StarIcon className="text-amber-300 w-[16px] text-[16px]" />
                        <span className="text-[#828282]">5.0</span>
                    </div>
                </div>
                <div className="font-semibold text-[20px] mt-3 ">
                    Dynamic World Education Community
                </div>
            </div>
        </div>
    )
}