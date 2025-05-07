import { Clock4, EllipsisVertical, FileText, MessageCircleMore, Pencil, Plus, Video, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import ActiveTag from "../../components/ActiveTag";
import DeactiveTag from "../../components/DeactivateTag";
import { useState } from 'react';
import activate from "@/assets/Icons/activate.svg";
import deactivate from "@/assets/Icons/deactivate.svg"
import { Doubts } from "../Popups/Expertise/Doubts";


export default function Expertise() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <section className="flex flex-col border rounded-2xl font-poppins p-8 mt-20 bg-white">
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div className="flex rounded-full bg-white p-1 text-[#898989]">
                        <h1 className="px-4 py-1 text-sm border border-[#898989] rounded-l-3xl text-[16px]">Consulting</h1>
                        <h1 className="px-4 py-1 text-sm border rounded-r-3xl border-[#898989] text-[16px]">Mentorship</h1>
                    </div>
                    <button className="bg-[var(--color-purple)] text-white rounded-[6px] px-6 py-2.5 text-[16px] ">
                        Add Expertise
                    </button>
                </div>

                {/* Main title */}
                <div className="flex justify-center items-center space-x-4">
                    <h1 className="text-[28px] min-w-[350px]">Manage Your Expertise</h1>
                    <span className="flex-1 h-[2px] bg-[#FFCB07]"></span>
                </div>

                {/* Doubt Pucho section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[32px] font-bold">Doubt Pucho</h1>
                            <ActiveTag />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <EllipsisVertical className="text-[var(--color-purple)]" />
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
                            <button>
                                <Pencil className="text-[var(--color-purple)]" />
                            </button>
                        </div>
                    </div>
                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="bg-[#D8D8D833] rounded-lg p-2">
                            <MessageCircleMore size={60} className="text-[var(--color-purple)]" />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[20px]"> Ask Query</h1>
                                <h2 className="text-[16px] text-[#747677]">Some Query</h2>
                            </div>
                            <div>
                                <span className="text-[16px]"> Query Response Time</span>
                                <span className="text-[16px]"> Follow Up</span>
                                <span className="text-[16px] inline-flex gap-2">
                                    <span>Price</span>
                                    <span>Discounted Price</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-[32px] font-bold">Resources</h1>
                        <Plus className="text-[var(--color-purple)]" />
                    </div>
                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="bg-[#D8D8D833] rounded-lg p-2">
                            <FileText size={60} className="text-[var(--color-purple)]" />
                        </div>
                        <div className="flex-1">
                            <div className="mb-2">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[20px]">Resource Title</h1>
                                    <div className="flex items-center gap-3">
                                        <EllipsisVertical className="text-[var(--color-purple)]" />
                                        <Pencil className="text-[var(--color-purple)]" />
                                    </div>
                                </div>
                                <h2 className="text-[16px] text-[#747677]">Resource Description</h2>
                            </div>
                            <div className="flex gap-4 text-[16px]">
                                <span>Price: $XX.XX</span>
                                <span>Discounted: $XX.XX</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Academic consultant section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[32px] font-bold">Academic Consultant</h1>
                            <ActiveTag />
                            <DeactiveTag />
                        </div>
                        <Plus className="text-[var(--color-purple)]" />
                    </div>
                    <div className="p-4 space-y-4">
                        <p>Help with Educational Planning</p>

                        <div className="border rounded-lg p-2">
                            <div className="">
                                <h2 className="text-[20px]">LOrem ipsum</h2>
                                <p className="text-[#747677] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[20px]">Area of Expertise</h2>
                                <p className="text-[#747677] text-[16px]">Stream Selection  |  Career Path Guidance  |  College Selection  |  Exam Preparation  |  Study Skills  |  Interview Prep  |  Study Abroad  |  Peer & Parental Pressure
                                    Work-Life Balance  |  Confidence Building  |  Resume Help</p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[20px]">Target Group</h2>
                                <p className="text-[#747677] text-[16px]">Class 5th-8th  |  Class 9th-10th  |  Class 11th-12th  |  College & Graduates  |  Postgraduates  |  Entrepreneurs  |  Career Changers  |  Peer & Parental Pressure</p>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div className="inline-flex items-center gap-2">
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <Video />
                                    <span>1:1 Call</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span>30 mins</span>
                                </div>
                                <span>Price: $XX.XX</span>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div>
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <Video />
                                    <span>In-Person</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span>1:1 Call</span>
                                </div>
                                <div>
                                    <span>Price: $XX.XX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career counselling section */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-[32px] font-bold">Career Consultation</h1>
                            <h3 className="text-[16px] text-[#747677]">Assist with Career Choices</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <EllipsisVertical className="text-[var(--color-purple)]" />
                            <Pencil className="text-[var(--color-purple)]" />
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


