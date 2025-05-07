import {
    PhoneCall,
    Mail,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
} from "lucide-react";
import AimshalaLogo from "@/assets/aimshala_white.png";
import BackgroundImage from "@/assets/Footer.png";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="relative bg-cover bg-center text-white w-full py-6 px-24 font-poppins"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-[1680px] mx-auto">
                <div className="flex items-start lg:items-center gap-16">
                    <img
                        src={AimshalaLogo}
                        alt="Aimshala Logo"
                        className="h-[79px] w-[321.79px] flex-shrink-0"
                    />
                    <p className="text-[18px] leading-relaxed w-[1291px] font-normal ">
                        @ Aimshala where individuals are equipped to Take Charge of their
                        lives, realise their aspirations, and make meaningful contributions
                        to <br /> society, fostering a future of limitless possibilities.
                    </p>
                </div>
            </div>

            <hr className="border-white/30 my-8" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-6  max-w-[1680px] mx-auto">
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Explore
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Career Consulting
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Career Profiling
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                AI-based Psychometric Test
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Experiential Learning
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Prepare
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Entrance Exam Preparation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Up‑skill Programs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                View all Courses
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Mentorship
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                One‑on‑One Mentorship
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Mentor Profiles
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Become a Mentor
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Engage
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Webinars
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Seminars
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Training Programs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Workshops
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Competitions
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Contribute
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Book Contribution
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Educational Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Coin Rewards System
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Redemption Program
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Appointments
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Career Consulting
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Appointments
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Mentorship Session
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Bookings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Second Grid */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-6 text-sm max-w-[1680px] mx-auto">
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Events and Webinars
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Upcoming Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Webinar Schedule
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Insights
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Educational Articles
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Industry Insights
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Testimonials
                    </h3>
                    <ul className="space-y-1 text-[16px]font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Student Reviews
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Success Stories
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Aimshala For
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Colleges
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Schools
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Institutes
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Educators
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Mentors
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Corporates
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        For You
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Career Consulting
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Enrolled Courses
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Progress Tracking
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Achievements
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-[#B490B3] mb-2">
                        Student Support
                    </h3>
                    <ul className="space-y-1 text-[16px] font-normal">
                        <li>
                            <a href="#" className="hover:underline">
                                Discussion Forums
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Peer Networking
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Course Groups
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Technical Assistance
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Academic Support
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 max-w-[1680px] mx-auto">
                <h4 className="text-[16px] font-semibold uppercase tracking-wide text-[#B490B3] mb-2">
                    Aimshala Links
                </h4>
                <ul className="flex flex-wrap gap-6  text-[16px] font-normal">
                    <li>
                        <a href="#" className="hover:underline">
                            @ Aimshala
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Success Stories
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Refer and Earn
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            In the News
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Help Centre
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Life @ Aimshala
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-[1680px] mx-auto w-full">
                <div>
                    <h4 className="text-[16px] font-semibold uppercase tracking-wide text-[#B490B3] mb-2">
                        CONTACT
                    </h4>
                    <div className="flex flex-wrap items-center gap-6 text-[16px] font-normal">
                        <div className="flex items-center gap-2">
                            <PhoneCall className="w-4 h-4" />
                            <span>Contact Us</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>hello@aimshala.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>Whatsapp</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-white/20 my-3 mt-5" />

            <footer>
                <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-4 max-w-[1680px] mx-auto py-4 px-6">
                    {/* Left: Privacy Links */}
                    <p className="text-center sm:text-left text-[14px]">
                        Privacy Policy / Terms of Use / Data Protection Policy / Cookie
                        Policy
                    </p>

                    {/* Center: Social Media */}
                    <div className="flex justify-center gap-6 font-[24px]">
                        <a href="#" className="hover:opacity-75">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <Youtube className="w-4 h-4" />
                        </a>
                    </div>

                    <p className="text-center sm:text-right text-[14px]">
                        ©{year} Aimshala. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </footer>
    );
};
