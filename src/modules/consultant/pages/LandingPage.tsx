import { useState } from "react";
import { useNavigate } from "react-router-dom";
import asset1 from "@/assets/Consultant/Landing/asset1.png";
import asset2 from "@/assets/Consultant/Landing/asset2.png";
import ribbon from "@/assets/Consultant/Landing/ribbon.png";
import { Bell, ChevronRight, Plus, Circle, Quote, ChevronLeft, ChevronUp, ChevronDown, Users, Award, Headphones, ArrowRight } from "lucide-react";

// images
import card1 from "@/assets/Consultant/Landing/card1.png";
import card2 from "@/assets/Consultant/Landing/card2.png";
import card3 from "@/assets/Consultant/Landing/card3.png";
import card4 from "@/assets/Consultant/Landing/card4.png";
import card5 from "@/assets/Consultant/Landing/card5.png";
import design from "@/assets/Consultant/Landing/designDots.png";

import girl from "@/assets/Consultant/Landing/girl.png";

import icon1 from "@/assets/Consultant/Landing/icon1.png";
import icon2 from "@/assets/Consultant/Landing/icon2.png";
import icon3 from "@/assets/Consultant/Landing/icon3.png";
import icon4 from "@/assets/Consultant/Landing/icon4.png";
import smile from "@/assets/Consultant/Landing/smile.svg";

import wave from "@/assets/Consultant/Landing/Wave.png";

const faqs = [
    'How do I sign up as a counselor on Aimshala?',
    'Are there any charges for signing up as a counselor?',
    'How do I create a session?',
    'What type of content can I upload?',
    'How does the royalty system work?',
    'When and how will I get paid?',
    'What if I face technical issues?',
    'Can I collaborate with other counselors?',
    'Do I need prior online counseling experience to join?',
];

const cards = [
    {
        id: 1,
        image: card1,
        title: "Flexible Scheduling",
    },
    {
        id: 2,
        image: card2,
        title: "Royality Earnings",
    },
    {
        id: 3,
        image: card3,
        title: "Cutting Edge AI Tools",
    }, {
        id: 4,
        image: card4,
        title: "Contiuous Growth",
    }, {
        id: 5,
        image: card5,
        title: "Competitive Compensation",
    }
]

export default function Landing() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return <div>
        <section className="flex gap-30 mx-[150px] font-poppins py-35">
            <div className="max-w-[900px]">
                <div className="relative">
                    <img src={wave} alt="wave" className="absolute left-0 rotate-90 w-[1000px] h-[1000px] -z-10" />
                </div>
                {/* banner */}
                <div className="flex justify-start items-center gap-2 border-2 rounded-full p-1 max-w-[560px] border-[#93268F]/50 bg-[#FFF5FF]">
                    <Bell className="text-[var(--color-purple)]" />
                    <h2 className="inline ">Unlocking the Potential of Education with AI <span className="inline-flex items-center text-[var(--color-purple)] ml-2"> | Watch Now <ChevronRight className="inline ml-2" /></span></h2>
                </div>

                <h1 className="text-[#0FBBC3] font-semibold text-[38px] mt-8">Empower the Next Generation with <div className="text-[#94278F]">Aimshala.</div></h1>
                <h3 className="font-normal text-[24px]">Join our community of dedicated counselors and make a lasting impact.</h3>

                <button
                    onClick={() => navigate('/consultant')}
                    className="relative w-[300px] h-[50px] text-[22px] mt-8 rounded-[12px]
                        border-2 border-[#94278F]
                        bg-[var(--color-purple)] text-white
                        hover:bg-white hover:text-[var(--color-purple)]
                        cursor-pointer z-10 transition duration-300"
                >
                    Become A Counselor
                </button>
            </div>
            <div className="flex gap-6 overflow-visible">
                <img src={asset1} alt="asset 1" className="w-[450px] h-[374px]" />
                <img src={asset2} alt="asset 2" className="w-[350px] h-[374px]" />
            </div>

            <div className="relative">
                <Plus size={35} className="absolute top-25 -left-250 text-[#A855F7]" />
                <Circle size={50} className="absolute top-70 right-250 text-[#D1B5FD]" />
            </div>

        </section>
        {/* Section 2 */}
        <section className="font-poppins w-full">
            <div className="relative">
                <img className="absolute top-18 left-20" src={design} alt="design" />
            </div>
            <div className="bg-linear-to-r from-[#94278F] to-[#71006B] h-[530px] w-full">
                <div className="inline-flex items-center gap-2 mx-[150px] mt-10">
                    <img src={ribbon} alt="ribbon" className="w-[100px] h-[100px]" />
                    <p className="text-white text-[48px] font-semibold">Why Counsel with Aimshala?</p>
                </div>
                <div className="flex gap-5 mt-10 mx-auto justify-center">
                    {cards.slice(0, 5).map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </section>
        {/* Section 3 */}
        <section className="relative py-20 bg-gradient-to-br from-[#FFFDEB] via-[#FFF9F1] to-[#F9F0FF] font-poppins">
            <span className="absolute left-24 top-1/3 w-2 h-2 rounded-full bg-[#FFCB0A]" />
            <span className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-[#FFCB0A]" />

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-50 lg:flex-row lg:items-start">
                {/* ---------- LEFT : mentor card ---------- */}
                <div className="relative shrink-0">
                    {/* yellow background block behind the card */}
                    <div className="absolute -inset-6 rounded-[40px] bg-[#FFCB0A] rotate-6" />

                    {/* concentric outline rings */}
                    <div className="absolute -inset-10 rounded-full border-2 border-[#FFCB0A]/40" />
                    <div className="absolute -inset-[60px] rounded-full border-[1.5px] border-[#FFCB0A]/30" />

                    {/* main card */}
                    <img
                        src={girl}
                        alt="Counselor pointing"
                        className="relative z-10 w-[400px] rounded-[40px] rotate-[13deg] bg-white object-cover shadow-2xl"
                    />

                    {/* 300K lives impacted badge */}
                    <div className="absolute -bottom-12 -right-45 z-20 flex -translate-x-1/2 items-center gap-5 rounded-tl-xl bg-white/80 px-8 py-3 backdrop-blur-sm shadow-lg w-[300px] h-[90px]">
                        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[8px] bg-white">
                            <img src={smile} alt="" className="w-8" />
                        </span>
                        <div className="text-[24px] font-bold leading-none">
                            300K+
                            <p className="text-[20px] font-medium text-[#828282]">Lives&nbsp;Impacted</p>
                        </div>
                    </div>
                </div>

                {/* ---------- RIGHT : steps list ---------- */}
                <div className="relative w-full max-w-xl lg:pl-14">
                    {/* vertical guide line */}
                    <span className="absolute left-[2.75rem] top-0 hidden h-full  lg:block" />

                    {/* heading with scribble underline */}
                    <h2 className="mb-10 text-5xl font-light">
                        How&nbsp;It&nbsp;
                        <span className="relative font-semibold">
                            Works
                            <span className="absolute -bottom-1 left-0 -z-10 h-2 w-full bg-[#FFCB0A] skew-x-[-12deg]" />
                        </span>
                    </h2>

                    <ul className="space-y-10">
                        {[
                            {
                                icon: icon1,
                                title: 'Sign Up',
                                desc: 'Register as a mentor by providing basic details.',
                            },
                            {
                                icon: icon2,
                                title: 'Create Profile',
                                desc: 'Craft your counselor profile to showcase your expertise.',
                            },
                            {
                                icon: icon3,
                                title: 'Teach & Engage',
                                desc:
                                    'Conduct live sessions, upload recorded lectures, and interact with students.',
                            },
                            {
                                icon: icon4,
                                title: 'Receive Feedback & Royalties',
                                desc:
                                    'Get ratings, reviews, and a share of the course fee each time a student enrolls.',
                            },
                        ].map(({ icon, title, desc }) => (
                            <li key={title} className="relative flex items-start gap-6">
                                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[40px] bg-[#FFCB0A]">
                                    <img src={icon} alt="" className="w-[45px]" />
                                </span>

                                {/* text block */}
                                <div>
                                    <p className="text-2xl font-semibold">{title}</p>
                                    <p className="mt-1 max-w-md text-lg text-gray-600">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        {/* section 4 */}
        <section className="bg-gradient-to-b from-pink-50 to-white py-16 relative overflow-hidden font-poppins">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-yellow-400 text-2xl">+</div>
            <div className="absolute top-20 left-40 text-purple-300 text-2xl">○</div>
            <div className="absolute bottom-10 right-10 text-yellow-400 text-2xl">+</div>
            <div className="absolute bottom-20 right-40 text-purple-300 text-2xl">○</div>

            <div className="text-center max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
                    <Quote className="w-7 h-7" />
                    Testimonials
                </h2>

                {/* Avatar and Info */}
                <div className="flex flex-col items-center mt-10">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Priya Singh"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <h3 className="mt-3 text-lg font-semibold text-gray-800">Priya Singh</h3>
                    <p className="text-sm text-gray-500">Teacher</p>
                </div>

                {/* Testimonial Text */}
                <p className="mt-6 text-gray-600 text-base px-4 md:px-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor.
                </p>

                {/* Arrows */}
                <div className="mt-8 flex justify-center items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100">
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100">
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
        {/* section 5 */}
        <section className="bg-[#F0F9F9] py-16 px-6 md:px-12 font-poppins">
            <div className="max-w-7xl mx-auto flex flex-ro md:flex-row gap-10">
                {/* Left Side - Commitment */}
                <div className="bg-white rounded-lg shadow-sm p-8 w-full md:w-1/2 inline-flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Aimshala&apos;s Commitment</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Support */}
                        <div className="flex items-start gap-4 p-4 rounded-md bg-white border border-gray-300 ">
                            <div className="bg-[#17CFC2] text-white p-4 rounded-full">
                                <Headphones className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">Support</h3>
                                <p className="text-sm text-gray-500">Dedicated support team to assist you.</p>
                            </div>
                        </div>

                        {/* Community */}
                        <div className="flex items-start gap-4 p-4 rounded-md bg-white border border-gray-300">
                            <div className="bg-[#17CFC2] text-white p-4 rounded-full">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">Community</h3>
                                <p className="text-sm text-gray-500">Engage with a network of educators for collaborations and idea exchanges.</p>
                            </div>
                        </div>

                        {/* Recognition */}
                        <div className="flex items-start gap-4 p-4 rounded-md bg-white border border-gray-300">
                            <div className="bg-[#17CFC2] text-white p-4 rounded-full">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">Recognition</h3>
                                <p className="text-sm text-gray-500">Regular educator spotlights, awards, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - FAQ */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((question, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-md px-6 py-4 flex justify-between items-center cursor-pointer shadow-sm"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-sm font-medium text-gray-800">{question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* section 6 */}
        <section
            className="w-full py-8 md:py-16 flex flex-col items-center gap-12 font-poppins"
            style={{
                background: 'linear-gradient(180deg, #F0F8F8 0%, #FFFBED 100%)',
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    src="/path/to/decorations.png" // Add the yellow plus and teal circle SVGs here if needed
                    alt=""
                    className="absolute top-0 left-0"
                />
                {/* Add more decoration placements as needed */}
            </div>

            <div className="text-center relative z-10">
                <h1 className="text-3xl md:text-5xl font-light text-black">
                    Shape <span className="font-bold">Minds</span>, Earn <span className="font-bold">Reward</span>
                </h1>
                <p className="text-sm md:text-base font-semibold mt-4 text-gray-800">JOIN THE REVOLUTION!</p>

                <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg text-base font-medium gap-2 hover:scale-105 transition inline-flex justify-center items-center">
                    Become an Counselor with Aimshala
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    </div>
}


// Card Component
const Card = ({ image, title }: { image: string, title: string }) => {
    return <div>
        <div className="bg-white rounded-[12px] h-[270px] w-[290px] inline-flex flex-col items-center justify-center">
            <img src={image} alt="card" />
            <p className="text-[20px] font-semibold inline-flex items-center">{title}</p>
        </div>
    </div>
}