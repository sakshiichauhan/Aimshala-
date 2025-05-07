import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
    const { pathname } = useLocation();
    const hideSidebar = pathname === "/"
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8]">
            <nav className="flex-shrink-0">
                <Navbar />
            </nav>

            <div className="flex flex-1 overflow-hidden">
                {!hideSidebar && (
                    <aside className="flex-shrink-0 p-5 overflow-auto">
                        <Sidebar />
                    </aside>
                )}

                <main className={`flex-1 overflow-auto ${hideSidebar ? '' : 'p-4'}`}>
                    {children}
                </main>
            </div>
            <div className="mt-10">
                <Footer/>
            </div>
        </div>
    );
}
