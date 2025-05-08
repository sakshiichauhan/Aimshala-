import { useState } from 'react';
import AimshalaLogo from '@/assets/AimshalaLogo.png';
import Output from '@/assets/Output.png';
import Aim from '@/assets/aim_logo.svg';
import { Search, Bell, Menu, X } from 'lucide-react';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            <header className="bg-white shadow-md fixed top-0 left-0 w-full font-poppins z-50">
                <nav className="flex items-center justify-between py-2 px-4 md:px-6 lg:px-[75px]">
                    {/* Left: Menu button + Logo */}
                    <div className="flex items-center">
                        <button
                            className="text-gray-700 mr-3 lg:hidden "
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                        <img
                            src={AimshalaLogo}
                            alt="Aimshala Logo"
                            className="h-8 w-auto "
                        />
                    </div>

                    {/* Center nav links (desktop only) */}
                    <ul className="hidden lg:flex items-center space-x-8 text-md font-medium">
                        <li className="hover:text-[#94278F]"><a href="#">Insights</a></li>
                        <li className="hover:text-[#94278F]"><a href="#">For</a></li>
                        <li className="hover:text-[#94278F]"><img src={Aim} alt="Aim Icon" /></li>
                    </ul>

                 {/* Right: Login/Profile + Partner Icon */}
                    <div className="flex items-center gap-3">
                        <SignedOut>
                            <SignInButton>
                                <button className="px-2 py-1 text-sm border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100 transition duration-300 ease-in-out">
                                    Login
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/">
                                <button className="px-2 py-1 text-sm border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100 transition duration-300 ease-in-out">
                                    Profile
                                </button>
                            </UserButton>
                        </SignedIn>

                        <button className="flex items-center px-2 py-1 text-sm border border-[#94278F] text-[#94278F] rounded-full hover:bg-[#94278F] hover:text-white transition duration-300 ease-in-out">
                            <img src={Output} alt="Profile" className="h-6 w-6 rounded-full" />
                            
                        </button>
                    </div>
                </nav>

                {/* Mobile dropdown if needed (optional toggle area) */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-10">
                        <ul className="flex flex-col space-y-4 p-6">
                            <li className="hover:text-[#94278F]"><a href="#">Insights</a></li>
                            <li className="hover:text-[#94278F]"><a href="#">For</a></li>
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
                    </div>
                )}
            </header>
        </div>
    );
}
