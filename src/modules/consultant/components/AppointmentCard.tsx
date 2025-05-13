import { Calendar } from "lucide-react";
import { Clock, Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/Profile-1.png"

const AppointmentCardData = [
    {
        id: "a1b2c3",
        type: "1:1 Call",
        participantType: "Individual Student",
        duration: "30 Mins",
        price: "₹100",
        mentor: {
            name: "John Doe",
            profilePic: profilePicture,
            description: "Electronics communication engineering"
        },
        consulting: "Goal Setting",
        date: "Sep 20, 2024",
        time: "5:00 PM"
    },
    {
        id: "d4e5f6",
        type: "1:1 Call",
        participantType: "Group Session",
        duration: "45 Mins",
        price: "₹150",
        mentor: {
            name: "Jane Smith",
            profilePic: profilePicture,
            description: "Software Engineering | Google"
        },
        consulting: "Resume Review",
        date: "Sep 21, 2024",
        time: "3:30 PM"
    },
    {
        id: "g7h8i9",
        type: "Interview",
        participantType: "Individual Student",
        duration: "60 Mins",
        price: "₹250",
        mentor: {
            name: "Ravi Kumar",
            profilePic: profilePicture,
            description: "Data Scientist | Microsoft"
        },
        consulting: "DSA Interview Prep",
        date: "Sep 22, 2024",
        time: "11:00 AM"
    },
    {
        id: "j1k2l3",
        type: "1:1 Call",
        participantType: "Individual Student",
        duration: "30 Mins",
        price: "₹120",
        mentor: {
            name: "Neha Sharma",
            profilePic: profilePicture,
            description: "Product Manager | Amazon"
        },
        consulting: "Career Switch",
        date: "Sep 23, 2024",
        time: "6:00 PM"
    },
    {
        id: "m4n5o6",
        type: "Q&A Session",
        participantType: "Group Session",
        duration: "20 Mins",
        price: "₹80",
        mentor: {
            name: "Arjun Mehta",
            profilePic: profilePicture,
            description: "UI/UX Designer | Adobe"
        },
        consulting: "Design Portfolio Review",
        date: "Sep 24, 2024",
        time: "4:00 PM"
    }
];


export default function AppointmentCard() {
    return (
        <>
            {AppointmentCardData.map((items) => (
                <div key={items.id} className="border border-[#E7E6F0] rounded-[8px] p-4 mt-2 w-[474px] bg-white relative">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="inline-flex items-center gap-1">
                                <Video size={16} /> <span className="text-[14px]">{items.type}</span>
                            </span>
                            <Separator orientation="vertical"  />
                            <span className="text-[14px]">
                                <span className="font-semibold">{items.participantType.split(' ')[0]}</span> {items.participantType.split(' ').slice(1).join(' ')}
                            </span>
                            <Separator orientation="vertical" />
                            <span className="inline-flex items-center gap-1">
                                <Clock size={16} /> <span className="text-[14px]">{items.duration}</span>
                            </span>
                            <Separator orientation="vertical"/>
                            <span className="font-semibold text-[14px]">
                                Price: <span className="font-normal text-[#4D4D4D]">{items.price}</span>
                            </span>
                        </div>

                        <div className="flex gap-3 items-center">
                            <img src={items.mentor.profilePic} alt="profile" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h2 className="text-lg font-semibold">{items.mentor.name}</h2>
                                <p className="text-sm text-gray-500 text-[12px]">{items.mentor.description}</p>
                            </div>
                        </div>

                        <div className="w-[300px] h-[2px]  bg-gradient-to-r from-transparent to-[#93268F]/40"></div>

                        <div className="text-sm">
                            <span className="border border-[#E7E6F080] py-1 px-2 rounded-md text-[#626262] bg-white">
                                <span className="font-semibold">Career Consulting:</span> {items.consulting}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#626262]">
                            <Calendar size={16} />
                            <span className="text-[#626262]">
                                On <span className="font-semibold">{items.date}</span> at <span className="font-normal">{items.time}</span>
                            </span>
                        </div>

                        <div className="self-end absolute top-32">
                            <Button className="bg-[#93268F] hover:bg-[#93268F] text-white w-[121px] h-[48px] rounded-[6px] text-[16px]">Join Now</Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

