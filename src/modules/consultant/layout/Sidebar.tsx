import { Link, useLocation } from "react-router-dom";
import profile from "@/assets/profile.png";
import Consultant from "@/assets/Icons/Sidebar/desk.svg";
import Expertise from "@/assets/Icons/Sidebar/Expertise.svg";
import Sessions from "@/assets/Icons/Sidebar/Session.svg";
import Class from "@/assets/Icons/Sidebar/Class.svg";
import Resources from "@/assets/Icons/Sidebar/Resources.svg";
import Community from "@/assets/Icons/Sidebar/Community.svg";
import Calendar from "@/assets/Icons/Sidebar/Calendar.svg";
import Payments from "@/assets/Icons/Sidebar/Payments.svg"
import Subscription from "@/assets/Icons/Sidebar/Subscription.svg"
import Reviews from "@/assets/Icons/Sidebar/Rating.svg"
import Refer from "@/assets/Icons/Sidebar/Refer.svg"
import Profile from "@/assets/Icons/Sidebar/Business.svg"
import Help from "@/assets/Icons/Sidebar/help.png"
import { Separator } from "@/components/ui/separator";


const sidebarItems = [
    { icon: Consultant, item: "Consultant", path: "/consultant" },
    { icon: Expertise, item: "Expertise", path: "/consultant/expertise" },
    { icon: Sessions, item: "Sessions", path: "/consultant/sessions" },
    { icon: Class, item: "Master Class", path: "/consultant/masterclass" },
    { icon: Resources, item: "Resources", path: "/consultant/resources" },
    { icon: Community, item: "Community", path: "/consultant/community" },
    { icon: Calendar, item: "Calendar", path: "/consultant/calendar" },
    { icon: Payments, item: "Payments", path: "/consultant/payments" },
    { icon: Subscription, item: "Subscription", path: "/consultant/subscription" },
    { icon: Reviews, item: "Reviews", path: "/consultant/reviews" },
    { icon: Refer, item: "Refer & Earn", path: "/consultant/refer" },
    { icon: Profile, item: "Business Profile", path: "/consultant/business-profile" },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <nav className="hidden lg:block w-[225px] bg-white py-2 px-2 border shadow-2xs border-[#E8E9E9] rounded-lg m-2 font-poppins mt-20">
            <ul className="space-y-2">
                {sidebarItems.map((item, key) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li key={key}>
                            <Link
                                to={item.path}
                                className={`group flex items-center space-x-2 p-2 rounded-md transition ${isActive ? "bg-[#93268F]/10 text-[#93268F]" : "hover:bg-[#93268F]/10"
                                    }`}
                            >
                                <img className={`${isActive ? "filter-purple" : "filter-gray"} group-hover:filter-purple w-5`}
                                    src={item.icon}
                                />
                                <span className={`${isActive ? "text-[#93268F]" : "text-[#666666] text-[16px]"} `}>
                                    {item.item}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Profile */}
            <div className="mt-4 w-[210px] h-[62px] bg-white rounded-lg flex items-center space-x-2 border border-gray-200 shadow-md py-3">
                <div className="flex items-center gap-1.5">
                    <img src={profile} alt="Profile" className="rounded-full ml-2 w-[45px] h-[45px]" />
                    <div className="flex flex-col">
                        <p className="text-[16px] font-semibold text-[#681A65]">Vikramjeet Singh </p>
                        <div className="inline-flex justify-center">
                            <Link to="/consultant/profile" className="text-[#94278F] text-[14px]">View Profile</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Help */}
            <Separator className="mt-4"/>
            <div className="mt-2 p-2 bg-white flex items-center space-x-2 justify-center">
                <img src={Help} alt="Help" className="w-5 h-5 text-[#0FBBC3]" />
                <p className="text-[12px] font-semibold text-[#0FBBC3]">Questions? Learn more</p>
            </div>
        </nav>
    );
}
