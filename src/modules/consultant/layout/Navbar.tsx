import { useState } from 'react';
import AimshalaLogo from '@/assets/AimshalaLogo.png';
import Output from '@/assets/Output.png';
import Aim from '@/assets/aim_logo.svg';
import { Search, Bell, Menu, X } from 'lucide-react';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='relative'>
            <header className="bg-white shadow-md absolute top-0 left-0 w-full font-poppins z-50">
                <nav className="lg:mx-[75px] flex items-center justify-between py-3 px-6 md:px-8">
                    <img src={AimshalaLogo} alt="Aimshala Logo" className="h-auto w-[150px] md:w-[180px]" />

                    {/* Menu Button for md and lg screens */}
                    <button
                        className="hidden md:block lg:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Nav Links for lg screens */}
                    <ul className="hidden lg:flex items-center space-x-8 text-xl font-medium">
                        <li className="hover:text-[#94278F]">
                            <a href="#">Insights</a>
                        </li>
                        <li className="hover:text-[#94278F]">
                            <a href="#">For</a>
                        </li>
                        <li className="hover:text-[#94278F]">
                            <img src={Aim} alt="" />
                        </li>
                    </ul>

                    {/* Right-side icons and button for lg screens */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Search className="text-gray-500" />
                        <Bell className="text-gray-500" />

                        {/* Clerk authentication */}
                        <SignedOut>
                            <SignInButton>
                                <button className="px-4 py-2 border border-[#94278F] text-[#94278F] hover:bg-purple-100 rounded-[6px] transition duration-300 ease-in-out transform hover:scale-105">
                                    Login
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/">
                                <button className="px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                    Profile
                                </button>
                            </UserButton>
                        </SignedIn>

                        <button className="flex items-center px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-[#94278F] hover:text-white">
                            <img src={Output} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                            For Partners
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile and md menu */}
                    {menuOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-10">
                            <ul className="flex flex-col space-y-4 p-6">
                                <li className="hover:text-[#94278F]">
                                    <a href="#">Insights</a>
                                </li>
                                <li className="hover:text-[#94278F]">
                                    <a href="#">For</a>
                                </li>
                                <li className="hover:text-[#94278F]">
                                    <span
                                        className="p-2"
                                        style={{
                                            backgroundImage: `url(${Aim})`,
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    >
                                        AIM
                                    </span>
                                </li>
                            </ul>
                            <div className="px-6 pb-4 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Search className="text-gray-500" />
                                    <Bell className="text-gray-500" />
                                </div>
                                {/* Mobile Clerk authentication */}
                                <div className='flex flex-row gap-2'>
                                    <SignedOut>
                                        <SignInButton>
                                            <button className="px-4 py-2 border border-[#94278F] text-[#94278F] hover:bg-purple-100 rounded-[6px] transition duration-300 ease-in-out transform hover:scale-105 w-full">
                                                Login
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton afterSignOutUrl="/">
                                            <button className="px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full">
                                                Profile
                                            </button>
                                        </UserButton>
                                    </SignedIn>
                                    <button className="flex items-center px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-[#94278F] hover:text-white">
                                        <img src={Output} alt="Profile" className="h-8 w-8 rounded-full mr-2 hover" />
                                        For Partners
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}

// import { useState } from 'react'
// import {
//     Search,
//     Bell,
//     Menu,
//     X,
//     ArrowRight,
// } from 'lucide-react'
// import {
//     SignInButton,
//     UserButton,
//     SignedIn,
//     SignedOut,
// } from '@clerk/clerk-react'

// // Logos & icons
// import AimshalaLogo from '@/assets/AimshalaLogo.png'
// import Aim from '@/assets/aim_logo.svg'
// import Output from '@/assets/Output.png'

// // Stories (replace with your real SVG/PNG files)
// import Story1 from '@/assets/MegaMenu/Story1.png'
// import Story2 from '@/assets/MegaMenu/Story2.png'
// import Story3 from '@/assets/MegaMenu/Story3.png'
// import Story4 from '@/assets/MegaMenu/Story4.png'

// // Career Insights thumbnails
// import Insight1 from '@/assets/MegaMenu/Insight1.png'
// import Insight2 from '@/assets/MegaMenu/Insight2.png'
// import Insight3 from '@/assets/MegaMenu/Insight3.png'

// type Story = { img: string; label: string }
// const stories: Story[] = [
//     { img: Story1, label: 'Success Stories' },
//     { img: Story2, label: 'Meet‑Up Stories' },
//     { img: Story3, label: 'AIM Stories' },
//     { img: Story4, label: 'Career Stories' },
// ]

// type Insight = { img: string; title: string }
// const insights: Insight[] = [
//     {
//         img: Insight1,
//         title: 'Tech Mahindra Aptitude Test: Top 5 MCQs With Answers For Freshers',
//     },
//     {
//         img: Insight2,
//         title: 'Tech Mahindra Aptitude Test: Top 5 MCQs With Answers For Freshers',
//     },
//     {
//         img: Insight3,
//         title: 'Tech Mahindra Aptitude Test: Top 5 MCQs With Answers For Freshers',
//     },
// ]

// const trendingCareers = [
//     'Artificial Intelligence Engineer',
//     'Machine Learning Engineer',
//     'Cybersecurity Analyst',
//     'Data Scientist',
//     'Product Manager',
//     'Investment Banker',
//     'Robotics Engineer',
//     'Architect',
//     'Content Strategist',
//     'Entrepreneur',
//     'Solution Architect',
//     'UI/UX Designer',
//     'Digital Marketer',
//     'Social Media Manager',
//     'Freelance Writer',
//     'Course Creator',
//     'Fitness Trainer',
//     'Blogger/Vlogger',
//     'Affiliate Marketer',
// ]

// type Exam = {
//     title: string
//     mode: 'Online' | 'Offline'
//     subtitle: string
//     date: string
// }
// const upcomingExams: Exam[] = [
//     {
//         title: 'MAT 2025',
//         mode: 'Online',
//         subtitle: 'Management Aptitude Test',
//         date: '23 Mar 25',
//     },
//     {
//         title: 'CUET',
//         mode: 'Offline',
//         subtitle: 'Common University Entrance Test',
//         date: '15 May 25',
//     },
//     {
//         title: 'JEE Advanced 2025',
//         mode: 'Online',
//         subtitle: 'Joint Entrance Examination Advanced',
//         date: '18 May 25',
//     },
//     {
//         title: 'BITSAT 2025',
//         mode: 'Online',
//         subtitle: 'Birla Institute of Technology and Science Admission Test',
//         date: '26 May 25',
//     },
//     {
//         title: 'NEET 2025',
//         mode: 'Offline',
//         subtitle: 'National Eligibility Cum Entrance Test',
//         date: '23 Jun 25',
//     },
// ]

// const surveys = [
//     'Are you Choosing Streams That Matches your Strengths?',
//     'Passion Vs. Practicality: What's Driving Your Career Choice?',
//     'The Future Of Work: Are You Ready?',
// ]

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false)

//     return (
//         <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//             <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-3 px-6">
//                 {/* Logo */}
//                 <img src={AimshalaLogo} alt="Aimshala Logo" className="h-10 md:h-12" />

//                 {/* Desktop Nav */}
//                 <ul className="hidden lg:flex items-center space-x-8 text-md font-medium">
//                     <li className="relative group">
//                         <button className="hover:text-[#94278F]">Insights</button>
//                         <div className="absolute top-full left-0 w-full bg-white shadow-lg p-8 hidden group-hover:block">
//                             <div className="grid grid-cols-3 gap-6">
//                                 {/* Column 1: Stories & Career Insights */}
//                                 <div className="space-y-8">
//                                     {/* Stories */}
//                                     <div>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <h3 className="text-lg font-semibold">📖 Stories</h3>
//                                             <a href="#" className="text-sm text-[#94278F] hover:underline">
//                                                 View All
//                                             </a>
//                                         </div>
//                                         <div className="grid grid-cols-4 gap-4">
//                                             {stories.map((s) => (
//                                                 <div key={s.label} className="text-center">
//                                                     <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mx-auto">
//                                                         <img src={s.img} alt={s.label} className="w-8 h-8" />
//                                                     </div>
//                                                     <p className="text-xs mt-2">{s.label}</p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     {/* Career Insights */}
//                                     <div>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <h3 className="text-lg font-semibold">📊 Career Insights</h3>
//                                             <a href="#" className="text-sm text-[#94278F] hover:underline">
//                                                 View All
//                                             </a>
//                                         </div>
//                                         <ul className="space-y-4">
//                                             {insights.map((i, idx) => (
//                                                 <li key={idx} className="flex items-center space-x-3">
//                                                     <img src={i.img} alt={i.title} className="w-14 h-14 object-cover rounded" />
//                                                     <p className="text-sm flex-1">{i.title}</p>
//                                                     <ArrowRight className="w-4 h-4 text-gray-400" />
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 {/* Column 2: Trending Careers & Upcoming Exams */}
//                                 <div className="space-y-8">
//                                     {/* Trending Careers */}
//                                     <div>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <h3 className="text-lg font-semibold">💼 Trending Careers</h3>
//                                             <a href="#" className="text-sm text-[#94278F] hover:underline">
//                                                 View All
//                                             </a>
//                                         </div>
//                                         <ul className="grid grid-cols-2 gap-2 text-sm">
//                                             {trendingCareers.map((c) => (
//                                                 <li key={c} className="flex items-center">
//                                                     <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
//                                                     {c}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     {/* Upcoming Exams */}
//                                     <div>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <h3 className="text-lg font-semibold">📅 Upcoming Exams</h3>
//                                             <a href="#" className="text-sm text-[#94278F] hover:underline">
//                                                 View All
//                                             </a>
//                                         </div>
//                                         <ul className="space-y-4 text-sm">
//                                             {upcomingExams.map((e) => (
//                                                 <li key={e.title} className="flex justify-between">
//                                                     <div>
//                                                         <p className="font-medium">{e.title}</p>
//                                                         <p className="text-xs text-gray-500">{e.subtitle}</p>
//                                                     </div>
//                                                     <div className="text-right">
//                                                         <span
//                                                             className={`inline-block text-xs px-2 py-0.5 rounded ${e.mode === 'Online'
//                                                                 ? 'bg-green-100 text-green-700'
//                                                                 : 'bg-gray-100 text-gray-700'
//                                                                 }`}
//                                                         >
//                                                             {e.mode}
//                                                         </span>
//                                                         <p className="mt-1">
//                                                             <a href="#" className="text-xs text-[#94278F] hover:underline">
//                                                                 Apply Now ↗
//                                                             </a>
//                                                         </p>
//                                                         <p className="text-xs text-gray-400">{e.date}</p>
//                                                     </div>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 {/* Column 3: Theory, Helpdesk, Survey, Aimtalk */}
//                                 <div className="space-y-8">
//                                     {/* Theory */}
//                                     <div>
//                                         <h3 className="text-lg font-semibold mb-2">📖 Theory</h3>
//                                         <p className="text-sm">
//                                             AI-driven Career Guidance integrating Self‑Awareness, Mentorship,
//                                             Skill Alignment and structured roadmaps.
//                                         </p>
//                                     </div>

//                                     {/* Helpdesk */}
//                                     <div>
//                                         <h3 className="text-lg font-semibold mb-2">🎧 Helpdesk</h3>
//                                         <ul className="space-y-1 text-sm">
//                                             <li>
//                                                 <a href="#" className="hover:text-[#94278F]">Ask Community →</a>
//                                             </li>
//                                             <li>+91 95602 97602</li>
//                                             <li>
//                                                 <a href="#" className="hover:text-[#94278F]">Chat with Us →</a>
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     {/* Survey */}
//                                     <div>
//                                         <div className="flex justify-between items-center mb-2">
//                                             <h3 className="text-lg font-semibold">📝 New Research Survey</h3>
//                                             <a href="#" className="text-sm text-[#94278F] hover:underline">
//                                                 View All
//                                             </a>
//                                         </div>
//                                         <ul className="space-y-1 text-sm">
//                                             {surveys.map((q) => (
//                                                 <li key={q} className="flex items-center">
//                                                     <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
//                                                     {q}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* Aimtalk */}
//                                     <div className="relative">
//                                         <h3 className="text-lg font-semibold mb-2">🎥 Aimtalk</h3>
//                                         <div className="relative border rounded overflow-hidden">
//                                             <img
//                                                 src="https://via.placeholder.com/300x150"
//                                                 alt="Live Webinar"
//                                                 className="w-full object-cover"
//                                             />
//                                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
//                                                 Upcoming
//                                             </div>
//                                             <div className="p-4">
//                                                 <p className="font-medium">Live Changing Webinars</p>
//                                                 <p className="text-xs text-gray-500">Jan 27, 2023</p>
//                                                 <a href="#" className="mt-2 inline-flex items-center text-sm text-[#94278F] hover:underline">
//                                                     Join →
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>

//                     {/* Other nav items */}
//                     <li>
//                         <a href="#" className="hover:text-[#94278F]">For</a>
//                     </li>
//                     <li>
//                         <img src={Aim} alt="Aim Logo" className="h-6" />
//                     </li>
//                 </ul>

//                 {/* Right side: search, bell, auth buttons, partners */}
//                 <div className="hidden lg:flex items-center space-x-6">
//                     <Search className="text-gray-500" />
//                     <Bell className="text-gray-500" />

//                     <SignedOut>
//                         <SignInButton>
//                             <button className="px-4 py-2 border border-[#94278F] text-[#94278F] rounded hover:bg-purple-100 transition">
//                                 Login
//                             </button>
//                         </SignInButton>
//                     </SignedOut>
//                     <SignedIn>
//                         <UserButton afterSignOutUrl="/">
//                             <button className="px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100 transition">
//                                 Profile
//                             </button>
//                         </UserButton>
//                     </SignedIn>

//                     <button className="flex items-center px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100 transition">
//                         <img src={Output} alt="Partners" className="h-7 w-7 rounded-full mr-2" />
//                         For Partners
//                     </button>
//                 </div>

//                 {/* Mobile toggle */}
//                 <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </nav>

//             {/* Mobile menu */}
//             {menuOpen && (
//                 <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
//                     <ul className="flex flex-col p-6 space-y-4">
//                         <li><a href="#" className="text-lg font-medium hover:text-[#94278F]">Insights</a></li>
//                         <li><a href="#" className="text-lg font-medium hover:text-[#94278F]">For</a></li>
//                         <li><img src={Aim} alt="Aim Logo" className="h-8" /></li>
//                     </ul>
//                     <div className="border-t border-gray-200 mx-6"></div>
//                     <div className="px-6 py-4 flex flex-col gap-4">
//                         <div className="flex items-center gap-4">
//                             <Search className="text-gray-500" />
//                             <Bell className="text-gray-500" />
//                         </div>
//                         <SignedOut>
//                             <SignInButton>
//                                 <button className="w-full px-4 py-2 border border-[#94278F] text-[#94278F] rounded hover:bg-purple-100 transition">
//                                     Login
//                                 </button>
//                             </SignInButton>
//                         </SignedOut>
//                         <SignedIn>
//                             <UserButton afterSignOutUrl="/">
//                                 <button className="w-full px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100 transition">
//                                     Profile
//                                 </button>
//                             </UserButton>
//                         </SignedIn>
//                         <button className="flex items-center justify-center w-full px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100 transition">
//                             <img src={Output} alt="Partners" className="h-7 w-7 rounded-full mr-2" />
//                             For Partners
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     )
// }

