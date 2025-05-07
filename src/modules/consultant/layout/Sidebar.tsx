import Consultant from "@/assets/Icons/Sidebar/Consultant.png";
import Expertise from "@/assets/Icons/Sidebar/Expertise.png";
import Sessions from "@/assets/Icons/Sidebar/Session.png";
import Class from "@/assets/Icons/Sidebar/Class.png";
import Resources from "@/assets/Icons/Sidebar/Resources.png";
import Community from "@/assets/Icons/Sidebar/Community.png";
import Calendar from "@/assets/Icons/Sidebar/Calendar.png";
import Payments from "@/assets/Icons/Sidebar/Payments.png"
import Subscription from "@/assets/Icons/Sidebar/Subscription.png"
import Reviews from "@/assets/Icons/Sidebar/Rating.png"
import Refer from "@/assets/Icons/Sidebar/Refer.png"
import Profile from "@/assets/Icons/Sidebar/Business.png"
import Help from "@/assets/Icons/Sidebar/help.png"


import { Link, useLocation } from "react-router-dom";
import profile from "@/assets/profile.png";

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
        <nav className="hidden lg:block w-[223px] bg-white py-2 px-2 border shadow-2xs border-gray-200 rounded-lg m-2 font-poppins mt-20">
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
                                <img className={`w-5 ${isActive ? "text-[#93268F]" : "text-[#666666]"}`}
                                    src={item.icon}
                                />
                                <span className={`${isActive ? "text-[#93268F]" : "text-[#666666]"} group-hover:text-[#93268F]`}>
                                    {item.item}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Profile */}
            <div className="mt-4 p-2 bg-white rounded-md flex items-center space-x-2 border border-gray-200 shadow-md">
                <img src={profile} alt="Profile" className="rounded-full w-[36px] h-[36px]" />
                <div>
                    <p className="text-[16px] font-semibold text-[var(--color-purple)]">Vikramjeet Singh</p>
                    <Link to="/consultant/profile" className="text-[var(--color-purple)] text-[14px]">View Profile</Link>
                </div>
            </div>

            {/* Help */}
            <div className="mt-4 p-2 bg-white flex items-center space-x-2 justify-center border-t border-gray-200">
                <img src={Help} alt="Help" className="w-5 h-5 text-[#0FBBC3]" />
                <p className="text-[12px] font-semibold text-[#0FBBC3]">Questions? Learn more</p>
            </div>
        </nav>
    );
}
