import { Clock4, Pencil, Video } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import ActiveTag from "../../components/ActiveTag";
import DeactiveTag from "../../components/DeactivateTag";
import { useState } from 'react';
import activate from "@/assets/Icons/activate.svg";
import deactivate from "@/assets/Icons/deactivate.svg"
import { Doubts } from "../Popups/Expertise/Doubts";
import Edit from "@/assets/Icons/edit.svg";
import Delete from "@/assets/Icons/delete.svg";
import Add from "@/assets/Icons/plus.svg"
import CloudChatIcon from "@/assets/Icons/Cloud.svg"
import Docs from "@/assets/Icons/Docs.svg"
import Location from "@/assets/location.svg"
import { Separator } from "@/components/ui/separator";

export default function Expertise() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'Consulting' | 'Mentorship'>('Consulting');

    return (
        <section className="flex flex-col border rounded-2xl font-poppins p-8 mt-20 bg-white">
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div className="flex rounded-full bg-white p-1 text-[#898989]">
                        <button
                            className={`px-4 py-1 text-sm border border-[#dadada] rounded-l-[8px] text-[16px] transition-colors
                                ${activeTab === 'Consulting' ?
                                    'bg-[#93268f] text-white hover:bg-[#93268f]' :
                                    'hover:text-[#93268f] hover:bg-[#faf4f9]'}`}
                            onClick={() => setActiveTab('Consulting')}
                        >
                            Consulting
                        </button>
                        <button
                            className={`px-4 py-1 text-sm border rounded-r-[8px] border-[#dadada] text-[16px] transition-colors
                                ${activeTab === 'Mentorship' ?
                                    'bg-[#93268f] text-white hover:bg-[#93268f]' :
                                    'hover:text-[#93268f] hover:bg-[#faf4f9]'}`}
                            onClick={() => setActiveTab('Mentorship')}
                        >
                            Mentorship
                        </button>
                    </div>
                    <button className="bg-[var(--color-purple)] text-white rounded-[6px] px-6 py-2.5 text-[16px] ">
                        Add Expertise
                    </button>
                </div>

                {/* Main title */}
                <div className="flex justify-center items-center">
                    <h1 className="text-[28px] font-normal min-w-[330px]">Manage Your Expertise</h1>
                    <span className="flex-1 h-[2px] bg-[#FFCB07]"></span>
                </div>

                {/* Career counselling section */}
                <div className="border border-gray-200 rounded-lg p-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-[32px] font-semibold">Career Consultation</h1>
                            <h3 className="text-[16px] font-normal text-[#828282]">Assist with Career Choices</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <button>
                                <img src={Edit} alt="edit icon" />
                            </button>
                            <button>
                                <img src={Delete} alt="delete icon" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* International studies */}
                <div className="border border-gray-200 rounded-[12px]">
                    <div className="flex justify-between items-center px-4 py-1.5">
                        <div className="flex items-center gap-2">
                            <h1 className="text-[32px] font-semibold">International studies</h1>
                            <ActiveTag />
                            <DeactiveTag />
                        </div>
                        <button>
                            <img src={Add} alt="add icon" />
                        </button>
                    </div>

                    {/* Moved paragraph up here */}
                    <div className="px-4">
                        <p className="text-[#747677]">Help with Educational Planning</p>
                    </div>

                    <div className="p-4 py-3 space-y-2">
                        <div className="border rounded-lg p-2">
                            <div>
                                <h2 className="text-[20px] font-medium">LOrem ipsum</h2>
                                <p className="text-[#747677] font-normal text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[16px] font-medium">Area of Expertise</h2>
                                <p className="text-[#626262] text-[16px]">Stream Selection  |  Career Path Guidance  |  College Selection  |  Exam Preparation  |  Study Skills  |  Interview Prep  |  Study Abroad  |  Peer & Parental Pressure
                                    Work-Life Balance  |  Confidence Building  |  Resume Help</p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[16px] font-medium">Target Group</h2>
                                <p className="text-[#626262] font-normaltext-[16px]">Class 5th-8th  |  Class 9th-10th  |  Class 11th-12th  |  College & Graduates  |  Postgraduates  |  Entrepreneurs  |  Career Changers  |  Peer & Parental Pressure</p>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div className="inline-flex items-center gap-2">
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <Video />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">1:1 Call</span>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">30 mins</span>
                                    <Separator orientation="vertical" />
                                </div>
                                <div className="text-[#626262]">
                                    <span className="font-semibold text-[16px] text-[#626262]">Price: <span className=" font-normal"> ₹999</span></span>
                                    <span className=" font-normal text-[16px] line-through"> ₹999</span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div>
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <img src={Location} alt="" className="inline-flex justify-center items-center" />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">In-Person</span>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">1:1 Call</span>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="text-[#626262]">
                                    <span className="font-semibold text-[16px]">Price: <span className="font-normal"> ₹999</span></span>
                                    <span className="font-normal text-[16px] line-through"> ₹999</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Academic consultant section */}
                <div className="border border-gray-200 rounded-[12px]">
                    <div className="flex justify-between items-center px-4 py-1.5">
                        <div className="flex items-center gap-2">
                            <h1 className="text-[32px] font-semibold">Academic Consultant</h1>
                            <ActiveTag />
                            <DeactiveTag />
                        </div>
                        <button>
                            <img src={Add} alt="add icon" />
                        </button>
                    </div>

                    {/* Moved paragraph up here */}
                    <div className="px-4">
                        <p className="text-[#747677]">Help with Educational Planning</p>
                    </div>

                    <div className="p-4 py-3 space-y-2">
                        <div className="border rounded-lg p-2">
                            <div>
                                <h2 className="text-[20px] font-medium">LOrem ipsum</h2>
                                <p className="text-[#747677] font-normal text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[16px] font-medium">Area of Expertise</h2>
                                <p className="text-[#626262] text-[16px]">Stream Selection  |  Career Path Guidance  |  College Selection  |  Exam Preparation  |  Study Skills  |  Interview Prep  |  Study Abroad  |  Peer & Parental Pressure
                                    Work-Life Balance  |  Confidence Building  |  Resume Help</p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[16px] font-medium">Target Group</h2>
                                <p className="text-[#626262] font-normaltext-[16px]">Class 5th-8th  |  Class 9th-10th  |  Class 11th-12th  |  College & Graduates  |  Postgraduates  |  Entrepreneurs  |  Career Changers  |  Peer & Parental Pressure</p>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div className="inline-flex items-center gap-2">
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <Video />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">1:1 Call</span>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">30 mins</span>
                                    <Separator orientation="vertical" />
                                </div>
                                <div className="text-[#626262]">
                                    <span className="font-semibold text-[16px] text-[#626262]">Price: <span className=" font-normal"> ₹999</span></span>
                                    <span className=" font-normal text-[16px] line-through"> ₹999</span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div>
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <img src={Location} alt="" className="inline-flex justify-center items-center" />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">In-Person</span>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span className="text-[16px] font-normal text-[#4D4D4D]">1:1 Call</span>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="text-[#626262]">
                                    <span className="font-semibold text-[16px]">Price: <span className="font-normal"> ₹999</span></span>
                                    <span className="font-normal text-[16px] line-through"> ₹999</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doubt Pucho section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[32px] font-semibold">Doubt Pucho</h1>
                            <ActiveTag />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <img src={Add} alt="" />
                                </button>
                                {isMenuOpen && (
                                    <div className="absolute right-7 -top-1 mt-2 w-48 rounded-md shadow-lg bg-white">
                                        <ul className="py-1 ">
                                            {[
                                                { icon: <Pencil />, label: 'Edit', action: () => { setIsEditOpen(true) } },
                                                { icon: <img src={activate} alt="activate" className="w-6 h-6" />, label: <span className="text-blue-500">Activate</span>, action: () => { /* handle activate */ } },
                                                { icon: <img src={deactivate} alt="activate" className="w-6 h-6" />, label: <span className="text-red-500"> Deactivate</span>, action: () => { /* handle deactivate */ } }
                                            ].map((item, index) => (
                                                <li key={index}>
                                                    <button
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                        onClick={() => {
                                                            item.action();
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="">{item.icon}</span>
                                                            <span>{item.label}</span>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="border-t p-4 flex items-center gap-2">
                        <div className="flex  flex-col gap-2">
                            <div className="flex items-center justify-center bg-[#D8D8D833] rounded-[8px] py-1.5">
                                <Switch />
                            </div>
                            <div className="bg-[#D8D8D833] rounded-[8px] p-2.5">
                                <div>
                                    <img src={CloudChatIcon} alt="messages" className="w-10" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center gap-4">
                                <h1 className="text-[20px]"> Ask Query</h1>
                                <h2 className="text-[16px] text-[#747677]">Some Query</h2>
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="text-[16px] font-semibold">Query Response Time : <span className="font-normal">48 hours</span></span>
                                <Separator orientation="vertical" className="h-4" />
                                <span className="text-[16px] font-semibold">Follow Up : <span className="font-normal">None</span></span>
                                <Separator orientation="vertical" className="h-4" />
                                <span className="text-[16px] inline-flex items-center gap-2">
                                    <span className="font-semibold">Price:</span>
                                    <span className="font-normal">$99</span>
                                    <span className="text-[#747677] line-through font-normal">$1500</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-[32px] font-semibold">Resources</h1>
                        <button>
                            <img src={Edit} alt="" />
                        </button>
                    </div>
                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-center bg-[#D8D8D833] rounded-[8px] py-1.5">
                                <Switch />
                            </div>
                            <div className="bg-[#D8D8D833] rounded-lg p-2">
                                <img src={Docs} alt="docs" className="w-15" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mb-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex w-full gap-2 items-center">
                                        <h1 className="text-[20px] font-medium">Title: 10th Class Math Exam Syllabus</h1>
                                        <ActiveTag />
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mt-2">
                                        <button>
                                            <img src={Edit} alt="edit" />
                                        </button>
                                        <button>
                                            <img src={Delete} alt="delete" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-[16px] text-[#747677]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </h2>
                                </div>
                            </div>
                            <div className="flex gap-4 text-[16px]">
                                <span className="font-semibold text-[#747677]">Price: <span className="font-normal text-[#747677]">$99</span></span>
                                <span className="line-through text-[#747677]"> $ 150</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-center bg-[#D8D8D833] rounded-[8px] py-1.5">
                                <Switch />
                            </div>
                            <div className="bg-[#D8D8D833] rounded-lg p-2">
                                <img src={Docs} alt="docs" className="w-15" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mb-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex w-full gap-2 items-center">
                                        <h1 className="text-[20px]  font-medium">Title: 10th Class Math Exam Syllabus</h1>
                                        <ActiveTag />
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mt-2">
                                        <button>
                                            <img src={Edit} alt="edit" />
                                        </button>
                                        <button>
                                            <img src={Delete} alt="delete" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-[16px] text-[#747677]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </h2>
                                </div>
                            </div>
                            <div className="flex gap-4 text-[16px]">
                                <span className="font-semibold text-[#626262]">Price: <span className="font-normal text-[#747677]">$99</span></span>
                                <span className="line-through text-[#747677]"> $ 150</span>
                            </div>
                        </div>
                    </div>
                    {/* res3 */}
                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-center bg-[#D8D8D833] rounded-[8px] py-1.5">
                                <Switch />
                            </div>
                            <div className="bg-[#D8D8D833] rounded-lg p-2">
                                <img src={Docs} alt="docs" className="w-15" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mb-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex w-full gap-2 items-center">
                                        <h1 className="text-[20px]  font-medium">Title: 10th Class Math Exam Syllabus</h1>
                                        <ActiveTag />
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mt-2">
                                        <button>
                                            <img src={Edit} alt="edit" />
                                        </button>
                                        <button>
                                            <img src={Delete} alt="delete" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-[16px] text-[#747677]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </h2>
                                </div>
                            </div>
                            <div className="flex gap-4 text-[16px]">
                                <span className="font-semibold text-[#626262] ">Price: <span className="font-normal text-[#747677]">$99</span></span>
                                <span className="line-through text-[#747677]"> $ 150</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isEditOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto ">
                    <div className="w-full max-w-[790px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
                        <Doubts onClose={() => setIsEditOpen(false)} />
                    </div>
                </div>
            )}
        </section>
    );
}


