import {
    MessageSquare,
    SquarePen,
    PenLine,
    ThumbsUp,
    ThumbsDown,
    Users,
} from "lucide-react";

import boy from "@/assets/Consultant/Community/Image2.png";
import girl from "@/assets/Consultant/Community/Image1.png";
import oldmen from "@/assets/Consultant/Community/Image3.png";
import men from "@/assets/Consultant/Community/image4.png";


export default function Community() {
    return (
        <section className="w-full flex flex-col items-center py-10 font-poppins">
            <div className=" flex gap-20 ">
                <div className="w-full max-w-4xl space-y-8">
                    <div className="flex-1 space-y-8">
                        {/* ---------- Create Post Card ---------- */}
                        <div className="bg-white rounded-xl border border-[#E8E8E8] px-6 py-4 mt-19">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#00B7C7] flex items-center justify-center text-white font-semibold text-sm">
                                    VS
                                </div>
                                <input
                                    type="text"
                                    placeholder="What do you want to ask or share?"
                                    className="flex-1 h-12 rounded-full border border-[#E4E4E4] px-6 text-sm text-[#6E6E6E] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-[#94278F]/30"
                                />
                            </div>
                            <div className="my-4 h-px bg-[#EFEFEF]" />
                            <div className="flex items-center justify-around text-[#6E6E6E]">
                                <button className="flex items-center gap-2 font-medium hover:text-[#94278F]">
                                    <MessageSquare size={20} /> Ask
                                </button>
                                <button className="flex items-center gap-2 font-medium hover:text-[#94278F]">
                                    <SquarePen size={20} /> Answer
                                </button>
                                <button className="flex items-center gap-2 font-medium hover:text-[#94278F]">
                                    <PenLine size={20} /> Post
                                </button>
                            </div>
                        </div>

                        {/* ---------- Feed Post Card ---------- */}
                        <div className="bg-white rounded-xl border border-[#E8E8E8] w-full px-6 py-6">
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src={boy}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-sm text-[#1E1E1E]">
                                        Swati Malik
                                    </h3>
                                    <p className="text-xs text-[#6E6E6E]">
                                        B.Sc, M.Sc Zoology, B.Ed – University of Delhi · 1 Day ago
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="mb-4 overflow-hidden rounded-md">
                                <img
                                    src={girl}
                                    alt="post"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>

                            {/* Text */}
                            <p className="text-sm leading-relaxed text-[#4D4D4D] pb-4">
                                You are to end up doing a job, whether or not it is worth doing
                                and whether or not you want, let alone like, to do it. You might
                                argue that everything that is to be done to earn a living is
                                called a 'job': being a CEO of a company is doing a job, being an
                                archaeologist is doing a job, being a cosmologist is doing a job,
                                yes, but the word 'job' in India has only two or three meanings:
                                'Engineer', 'Doctor' and nowadays, a 'Charted Accountant'. Our
                                parents, with a misplaced sense of being able to decide what is
                                the bes...
                            </p>

                            {/* Reactions & Tags */}
                            <div className="flex flex-wrap items-center gap-6 text-[#6E6E6E] text-sm">
                                <button className="flex items-center gap-1 hover:text-[#94278F]">
                                    <ThumbsUp size={18} className="text-[#00B7C7]" /> 65
                                </button>
                                <button className="flex items-center gap-1 hover:text-[#94278F]">
                                    <ThumbsDown size={18} className="text-[#00B7C7]" /> 12
                                </button>
                                <button className="flex items-center gap-1 hover:text-[#94278F]">
                                    <MessageSquare size={18} /> 65
                                </button>
                                <span className="rounded-full bg-[#F3F3F3] px-3 py-1 text-xs font-medium">
                                    Education
                                </span>
                                <span className="rounded-full bg-[#F3F3F3] px-3 py-1 text-xs font-medium">
                                    Quiz
                                </span>
                            </div>
                        </div>

                        {/* ---------- Comments Card ---------- */}
                        <div className="bg-white rounded-xl border border-[#E8E8E8] w-full ">
                            <div className="bg-[#F4F4F4] rounded-xl border border-[#E8E8E8] w-full h-[89px] px-6 py-6 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-[48px] h-[48px] rounded-full bg-[#00B7C7] flex items-center justify-center text-white font-semibold text-sm">
                                        VS
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="flex-1 h-12 px-4 bg-white border border-[#E4E4E4] rounded-lg text-sm placeholder:text-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-[#94278F]/30"
                                    />
                                    <button className="h-12 px-6 bg-[#94278F] text-white rounded-lg text-sm font-medium hover:bg-[#94278F]/90 transition-colors">
                                        Add Comment
                                    </button>
                                </div>
                            </div>

                            {/* Comment List */}
                            <div className="px-12 py-6 space-y-6 ">
                                {/* Comment 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[48px] h-[48px] rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold text-sm">
                                        JD
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-gray-800">John Doe</p>
                                        <p className="text-sm text-gray-700">
                                            The best time to post on Dribbble and Behance can vary based
                                            on your specific audience and their online habits. However,
                                            in general...
                                        </p>
                                        <div className="flex items-center gap-6 mt-2 text-[#00B7C7] text-sm">
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsUp size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsDown size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <span className="cursor-pointer underline">Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center px-15 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="flex-1 h-12 px-4 bg-white border border-[#E4E4E4] rounded-lg text-sm placeholder:text-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-[#94278F]/30"
                                    />
                                    <button className="h-12 px-6 bg-[#94278F] text-white rounded-lg text-sm font-medium hover:bg-[#94278F]/90 transition-colors">
                                        Reply
                                    </button>
                                </div>

                                {/* Comment 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[48px] h-[48px] rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold text-sm">
                                        SH
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-gray-800">John Doe</p>
                                        <p className="text-sm text-gray-700">
                                            The best time to post on Dribbble and Behance can vary based
                                            on your specific audience and their online habits. However,
                                            in general...
                                        </p>
                                        <div className="flex items-center gap-6 mt-2 text-[#00B7C7] text-sm">
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsUp size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsDown size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <span className="cursor-pointer underline">Reply</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Comment 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[48px] h-[48px] rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold text-sm">
                                        SH
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-gray-800">John Doe</p>
                                        <p className="text-sm text-gray-700">
                                            The best time to post on Dribbble and Behance can vary based
                                            on your specific audience and their online habits. However,
                                            in general...
                                        </p>
                                        <div className="flex items-center gap-6 mt-2 text-[#00B7C7] text-sm">
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsUp size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsDown size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <span className="cursor-pointer underline">Reply</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Comment 4 */}
                                <div className="flex items-start px-22 gap-4">
                                    <img
                                        src={boy}
                                        alt="Amara"
                                        className="w-9 h-9 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-gray-800">Amara</p>
                                        <p className="text-sm text-gray-700">
                                            The best time to post on Dribbble and Behance can vary based
                                            on your specific audience and their online habits. However,
                                            in general it’s recommended to post during peak hours when
                                            your...
                                        </p>
                                        <div className="flex items-center gap-6 mt-2 text-[#00B7C7] text-sm">
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsUp size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                                <ThumbsDown size={16} className="text-[#00B7C7]" /> 65
                                            </button>
                                            <span className="cursor-pointer underline">Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- Feed Post Card ---------- */}
                    <div className="bg-white rounded-xl border border-[#E8E8E8] w-full px-6 py-6">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <img
                                src={men}
                                alt="avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-sm text-[#1E1E1E]">
                                    Akshay Malik
                                </h3>
                                <p className="text-xs text-[#6E6E6E]">
                                    Author: The Promises We Made · 1 Day ago
                                </p>
                            </div>
                        </div>
                        <h3 className="font-semibold text-sm text-[#1E1E1E]">
                            What is wrong with the Indian education system?
                        </h3>
                        <p className="text-xs text-[#6E6E6E]">
                            I watched a video on my friend’s WhatsApp story in which sir HC
                            Verma was talking about his school days and the experiment in which
                            he had to find the value of ‘g’. He talked about his school days and
                            he still sees the students doing the same experiment.
                        </p>
                        {/* Image */}
                        <div className="mb-4 overflow-hidden rounded-md">
                            <img
                                src={oldmen}
                                alt="post"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>

                        {/* Text */}
                        <p className="text-sm leading-relaxed text-[#4D4D4D] pb-4">
                            So, first thing about indian education system that I hate is that,
                            you don't get to learn the things that are beneficial for your
                            future, instead you learn those poems and all those craps which
                            makes literary no sense, the second thing is that you don't have
                            freedom to write your own notes, (atleast in our school) students
                            are not allowed to write their own notes, they have to byheart and
                            learn what their teacher has given or written, Now the thing that I
                            want in our education system, first thing would be that... (more)
                        </p>

                        {/* Reactions & Tags */}
                        <div className="flex flex-wrap items-center gap-6 text-[#6E6E6E] text-sm">
                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                <ThumbsUp size={18} className="text-[#00B7C7]" /> 65
                            </button>
                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                <ThumbsDown size={18} className="text-[#00B7C7]" /> 12
                            </button>
                            <button className="flex items-center gap-1 hover:text-[#94278F]">
                                <MessageSquare size={18} /> 65
                            </button>
                            <span className="rounded-full bg-[#F3F3F3] px-3 py-1 text-xs font-medium">
                                Education
                            </span>
                            <span className="rounded-full bg-[#F3F3F3] px-3 py-1 text-xs font-medium">
                                Quiz
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <aside className="w-80 flex-shrink-0 space-y-4 mt-20">
                        <h2 className="text-lg font-semibold text-[#1E1E1E]">Top Networks</h2>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-[#E8E8E8] px-4 py-3 flex items-center justify-between"
                            >
                                <div>
                                    <p className="font-semibold text-sm text-[#1E1E1E]">
                                        Education community
                                    </p>
                                    <p className="text-xs text-[#6E6E6E]">Learning and Education</p>
                                    <div className="mt-1 flex items-center gap-2 text-xs text-[#00B7C7]">
                                        <Users size={12} /> 59M members
                                        <MessageSquare size={12} /> 65
                                    </div>
                                </div>
                                <button className="bg-[#94278F] text-white text-sm font-medium px-3 py-1 rounded-lg">
                                    Join
                                </button>
                            </div>
                        ))}
                    </aside>
                </div>
            </div>
        </section>
    );
}

