import { useState } from 'react';
import AimshalaLogo from '@/assets/AimshalaLogo.png';
import Output from '@/assets/Output.png';
import Aim from '@/assets/aim_logo.svg';
import { Search, Bell, Menu, X } from 'lucide-react';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import Insights from '../layout/MegaMenu/Insights'; 

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInsights, setShowInsights] = useState(false);

    return (
        <div className='relative'>
            <header className="bg-white shadow-md absolute top-0 left-0 w-full font-poppins z-50">
                <nav className="lg:mx-[75px] flex items-center justify-between py-3 px-6 md:px-8">
                    <img src={AimshalaLogo} alt="Aimshala Logo" className="h-auto w-[150px] md:w-[180px]" />

                    <button
                        className="hidden md:block lg:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <ul className="hidden lg:flex items-center space-x-8 text-xl font-medium relative">
                        <li
                            className="relative hover:text-[#94278F]"
                            onMouseEnter={() => setShowInsights(true)}
                            onMouseLeave={() => setShowInsights(false)}
                        >
                            <span className="cursor-pointer">Insights</span>
                            {showInsights && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50">
                                    <Insights />
                                </div>
                            )}
                        </li>
                        <li className="hover:text-[#94278F]">
                            <a href="#">For</a>
                        </li>
                        <li className="hover:text-[#94278F]">
                            <img src={Aim} alt="Aim Logo" />
                        </li>
                    </ul>

                    <div className="hidden lg:flex items-center gap-8">
                        <Search className="text-gray-500" />
                        <Bell className="text-gray-500" />

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

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

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
                                        <img src={Output} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
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
