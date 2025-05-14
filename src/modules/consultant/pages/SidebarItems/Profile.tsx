import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Facebook, Linkedin, Forward, Camera } from "lucide-react";
import Contactform1 from "../Popups/ProfileSection/Contactform";
import EditProfile from "../Popups/ProfileSection/EditProfile";

import profileFallback from "@/assets/Profile-1.png";
import coverFallback from "@/assets/cover.png";
import About from "./ProfileTabs/About";
import Specialties from "./ProfileTabs/Specialities";
import CareerFeed from "./ProfileTabs/CareerFeed";
import Review from "./ProfileTabs/Review";
import ProfileResource from "./ProfileTabs/ProfileResource";
import suitecase from "@/assets/Icons/ConsultantProfile/suitcase.png";
import Bag from "@/assets/Icons/ConsultantProfile/bag.png";
import at from "@/assets/Icons/ConsultantProfile/mynaui_at.png";
import { Separator } from "@/components/ui/separator";
import pencil from "@/assets/Pencil.png";
import tick from "@/assets/Tick.png";
export default function Profile() {
  const tabs = [
    { label: "About", id: "about", path: "/consultant/profile/about" },
    {
      label: "Specialties",
      id: "specialties",
      path: "/consultant/profile/specialties",
    },
    {
      label: "Resources",
      id: "resources",
      path: "/consultant/profile/resources",
    },
    {
      label: "Career Feed",
      id: "career-feeds",
      path: "/consultant/profile/career-feeds",
    },
    { label: "Review", id: "reviews", path: "/consultant/profile/reviews" },
  ];

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [coverSrc, setCoverSrc] = useState<string>(coverFallback);
  const [profileSrc, setProfileSrc] = useState<string>(profileFallback);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("about");

  const coverInputRef = useRef<HTMLInputElement | null>(null);
  const profileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop() || "about";
    const currentTab = tabs.find((tab) => tab.path.endsWith(currentPath));
    setActiveTab(currentTab?.id || "about");
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (coverSrc !== coverFallback) URL.revokeObjectURL(coverSrc);
      if (profileSrc !== profileFallback) URL.revokeObjectURL(profileSrc);
    };
  }, [coverSrc, profileSrc]);

  const handleChange =
    (setter: (url: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setter(URL.createObjectURL(file));
    };

  return (
    <section>
      {/* Profile Header Section */}
      <div className="mt-20 border rounded-2xl font-poppins relative bg-white">
        {/* Cover */}
        <div className="relative">
          <img
            src={coverSrc}
            alt="cover"
            className="h-[200px] w-full object-cover rounded-t-xl"
          />
          <button
            onClick={() => coverInputRef.current?.click()}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            title="Change cover"
          >
            <Camera className="w-5 h-5" />
          </button>
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChange(setCoverSrc)}
          />
        </div>

        {/* Profile Image */}
        <div className="absolute top-[140px] left-5">
          <div className="relative">
            <img
              src={profileSrc}
              alt="profile"
              className="w-[170px] h-[170px] rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button
              onClick={() => profileInputRef.current?.click()}
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              title="Change profile"
            >
              <Camera className="w-4 h-4" />
            </button>
            <input
              ref={profileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange(setProfileSrc)}
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 absolute right-0 top-[160px] m-3">
          {[Linkedin, Facebook, Forward].map((Icon, i) => (
            <div
              key={i}
              className="w-[40px] h-[40px] bg-white p-2 inline-flex justify-center items-center rounded-xl shadow-md hover:bg-gray-100"
            >
              <Icon />
            </div>
          ))}
        </div>

        {/* Name, Rating, Verified */}
        <div className="mt-30 ml-5 flex flex-wrap items-center gap-3">
          <span className="text-[24px] font-semibold">John Doe</span>

          <div className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              />
            </svg>
            <span>4.5</span>
          </div>

          <div className="inline-flex items-center gap-2 p-1.5 border border-dashed rounded-full bg-[#93268F1A] border-[#93268F]">
            <img src={tick} alt="Verified" className="w-[14px] h-[17px]" />
            <span className="text-[14px] text-[#93268F]">Verified</span>
          </div>
          <img
            src={pencil}
            alt="Edit"
            className="w-[31.43px] h-[31.43px] cursor-pointer"
            onClick={() => setIsEditProfileOpen(true)}
          />
        </div>

        {/* Short Headline */}
        <p className="m-3 ml-5 text-[#4D4D4D] text-[16px] font-medium">
          Flipkart | Bain & Co. | Gold Medalist, IIT Madras | XLRI Jamshedpur ‑
          BM '24 | Accenture, Wipro (PPI)
        </p>
        {/* Experience Info */}
        <div className="m-5  flex items-center flex-wrap gap-4 text-[#4D4D4D] text-[16px]">
          <span className=" flex items-center gap-1">
            <img src={suitecase} alt="experience icon" className="h-5 w-5" />1
            year of Experience
          </span>
          <Separator orientation="vertical" />
          <span className="flex items-center gap-1">
            <img src={at} alt="experience icon" className="h-5 w-5" />
            johndoe123
          </span>
          <Separator orientation="vertical" />
          <span className="flex items-center gap-1">
            <img src={Bag} alt="experience icon" className="h-5 w-5" />
            Business And Management
          </span>
        </div>

        {/* Location */}
        <div className=" ml-5 inline-flex items-center gap-2 text-[#787878] text-[18px]">
          <span>Ambala, Haryana, India</span>
          <button
            className="text-[#93268F] font-medium text-[18px]"
            onClick={() => setIsContactFormOpen(true)}
          >
            Contact Info
          </button>
        </div>

        {/* Skills */}
        <h3 className=" mt-1 mb-2 ml-5 text-[18px] font-medium">Skills</h3>
        <p className="ml-5 mb-4 text-[#4D4D4D] text-[16px]">
          Stream Selection &nbsp;|&nbsp; Career Path Guidance &nbsp;|&nbsp;
          College Selection &nbsp;|&nbsp; Exam Preparation &nbsp;|&nbsp; Study
          Skills &nbsp;|&nbsp; Interview Prep &nbsp;|&nbsp; International
          Studies
        </p>

        {/* About */}
        <p className="m-4 ml-5 text-[#787878] text-[16px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="rounded-2xl p-4 bg-white/80 mt-4">
        <nav className="flex flex-wrap gap-6 ml-2 text-[#787878] text-[20px]">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`cursor-pointer bg-white hover:text-[#93268F] font-semibold ${
                activeTab === tab.id ? "text-[#93268F] bg-[#93268F]" : ""
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Add Popup Modals */}
      {isContactFormOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto ">
         
            <Contactform1 onClose={() => setIsContactFormOpen(false)} />
         
        </div>
      )}

      {isEditProfileOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-[790px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
            <EditProfile onClose={() => setIsEditProfileOpen(false)} />
          </div>
        </div>
      )}

      <Routes>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/resources" element={<ProfileResource />} />
        <Route path="/career-feeds" element={<CareerFeed />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </section>
  );
}
