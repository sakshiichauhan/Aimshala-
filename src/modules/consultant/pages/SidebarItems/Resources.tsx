import { useState } from "react";
import {
    BriefcaseIcon,
    ChartBarIcon,
    AcademicCapIcon,
} from "@heroicons/react/outline";
import CareerCluster from "@/assets/Resources/CareerIcon.svg"
import TrendingCareer from "@/assets/Resources/Trending.svg";
import FuturePredection from "@/assets/Resources/Future.svg";

// Primary Sector Images
import Agriculture from "@/assets/Resources/Primary/image1.jpg";
import Forestry from "@/assets/Resources/Primary/image2.png";
import Mining from "@/assets/Resources/Primary/image3.png";
import OilAndGas from "@/assets/Resources/Primary/image4.png";

// Secondary Sector Images
import Automotive from "@/assets/Resources/Secondary/image1.png";
import Aerospace from "@/assets/Resources/Secondary/image2.png";
import Construction from "@/assets/Resources/Secondary/image3.png";
import Chemical from "@/assets/Resources/Secondary/image4.png";
import Electronics from "@/assets/Resources/Secondary/image5.png";
import Energy from "@/assets/Resources/Secondary/image6.png";
import FoodAndBeverages from "@/assets/Resources/Secondary/image7.png";
import Textiles from "@/assets/Resources/Secondary/image8.png";
import Metallurgy from "@/assets/Resources/Secondary/image9.png";
import Plastics from "@/assets/Resources/Secondary/image10.png";

// Tertiary Sector Images
import Education from "@/assets/Resources/Tertiary/image2.png";
import Tourism from "@/assets/Resources/Tertiary/image2.png";
import IT from "@/assets/Resources/Tertiary/image3.png";
import Media from "@/assets/Resources/Tertiary/image4.png";
import Telecom from "@/assets/Resources/Tertiary/image5.png";
import Retail from "@/assets/Resources/Tertiary/image6.png";
import Transport from "@/assets/Resources/Tertiary/image7.png";
import RealEstate from "@/assets/Resources/Tertiary/image8.png";
import Banking from "@/assets/Resources/Tertiary/image9.png";
import Healthcare from "@/assets/Resources/Tertiary/image9.png";

// Quaternary Sector Images
import Consulting from "@/assets/Resources/Quaternary/image1.png";
import RnD from "@/assets/Resources/Quaternary/image2.png";
import InfoServices from "@/assets/Resources/Quaternary/image3.png";
import EduTech from "@/assets/Resources/Quaternary/image4.png";

// Quinary Sector Images
import Government from "@/assets/Resources/Quinary/image1.png";
import Nonprofit from "@/assets/Resources/Quinary/image2.png";

// Distinct Sector Images
import Agribusiness from "@/assets/Resources/Distinct/image1.png";
import Environment from "@/assets/Resources/Distinct/image2.png";
import Arts from "@/assets/Resources/Distinct/image3.png";
import Sports from "@/assets/Resources/Distinct/image3.png";


// Import new components for each tab
import MyResources from '@/modules/consultant/pages/SidebarItems/Resource/MyResources';
import CareerLibrary from '@/modules/consultant/pages/SidebarItems/Resource/CareerLibrary';
import Exams from '@/modules/consultant/pages/SidebarItems/Resource/Exams';
import Scholarship from '@/modules/consultant/pages/SidebarItems/Resource/Scholarship';
import Colleges from '@/modules/consultant/pages/SidebarItems/Resource/Colleges';
import { Heart } from "lucide-react";
import { LikeButton } from "../../components/LikeButton";
import { Separator } from "@/components/ui/separator";

const sectors = [
    {
        title: "Primary Sector (Extraction and Agriculture)",
        items: [
            { image: Agriculture, title: "Agriculture", description: "Farming, crops, livestock" },
            { image: Forestry, title: "Forestry", description: "Timber products" },
            { image: Mining, title: "Mining", description: "Coal, gold, minerals" },
            { image: OilAndGas, title: "Oil & Gas", description: "Exploration, drilling" },
        ],
    },
    {
        title: "Secondary Sector (Manufacturing and Industry)",
        items: [
            { image: Automotive, title: "Automotive", description: "Vehicles, machinery" },
            { image: Aerospace, title: "Aerospace", description: "Aircraft, spacecraft" },
            { image: Construction, title: "Construction", description: "Buildings, infrastructure" },
            { image: Chemical, title: "Chemical", description: "Industrial chemicals" },
            { image: Electronics, title: "Electronics", description: "Devices, circuits" },
            { image: Energy, title: "Energy", description: "Power generation" },
            { image: FoodAndBeverages, title: "Food & Beverages", description: "Processing, packaging" },
            { image: Textiles, title: "Textiles", description: "Clothing, fabrics" },
            { image: Metallurgy, title: "Metallurgy", description: "Metal products" },
            { image: Plastics, title: "Plastics", description: "Polymers & plastic products" },
        ],
    },
    {
        title: "Tertiary Sector (Services)",
        items: [
            { image: Education, title: "Education", description: "Schools, universities" },
            { image: Tourism, title: "Tourism & Hospitality", description: "Hotels, travel" },
            { image: IT, title: "Information Technology", description: "Software, IT services" },
            { image: Media, title: "Media & Entertainment", description: "Film, TV, music" },
            { image: Telecom, title: "Telecommunications", description: "Networks, communication" },
            { image: Retail, title: "Retail", description: "Shops, e‑commerce" },
            { image: Transport, title: "Transportation & Logistics", description: "Shipping, freight" },
            { image: RealEstate, title: "Real Estate", description: "Property development" },
            { image: Banking, title: "Banking & Finance", description: "Banks, investments" },
            { image: Healthcare, title: "Healthcare", description: "Hospitals, clinics" },
        ],
    },
    {
        title: "Quaternary Sector (Knowledge‑Based)",
        items: [
            { image: Consulting, title: "Consulting", description: "Advisory services" },
            { image: RnD, title: "R&D", description: "Innovation, labs" },
            { image: InfoServices, title: "Info Services", description: "Data, analytics" },
            { image: EduTech, title: "EdTech", description: "E‑learning platforms" },
        ],
    },
    {
        title: "Quinary Sector (High‑Level Decision Making)",
        items: [
            { image: Government, title: "Government", description: "Public administration & policy" },
            { image: Nonprofit, title: "Non‑Profits", description: "NGOs, charities, foundations" },
        ],
    },
    {
        title: "Distinct Sectors",
        items: [
            { image: Agribusiness, title: "Agribusiness", description: "Agri supply chain & equipment" },
            { image: Environment, title: "Environment", description: "NGOs & sustainability groups" },
            { image: Arts, title: "Arts & Culture", description: "Museums, galleries & performances" },
            { image: Sports, title: "Sports & Recreation", description: "Teams, fitness centers" },
        ],
    },
];

const careers = [
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
    {
        category: "Agriculture",
        title: "Communications and Online Marketing Coordinator",
        image: Agriculture,
    },
];


export default function Resources() {
    const primaryTabs = [
        { item: "My Resources", path: "/consultant/resources/my-resources", component: <MyResources /> },
        { item: "Career Library", path: "/consultant/resources/career-library", component: <CareerLibrary /> },
        { item: "Exams", path: "/consultant/resources/exams", component: <Exams /> },
        { item: "Scholarship", path: "/consultant/resources/scholarship", component: <Scholarship /> },
        { item: "Colleges", path: "/consultant/resources/colleges", component: <Colleges /> }
    ];
    const secondaryTabs = [
        { item: "Career Cluster", path: "/consultant/resources/career-cluster" },
        { item: "Trending Careers", path: "/consultant/resources/trending-career" },
        { item: "Future Career Prediction", path: "/consultant/resources/career-prediction" }
    ];

    const [activePrimaryTab, setActivePrimaryTab] = useState("Career Library");
    const [activeSecondaryTab, setActiveSecondaryTab] = useState("Career Cluster");

    // Find the active tab's component
    const activeTabComponent = primaryTabs.find(tab => tab.item === activePrimaryTab)?.component;

    return (
        <div className="px-6 sm:px-8 mx-auto font-poppins border rounded-2xl mt-20 bg-white">
            <div className="w-full mt-5 mb-6 bg-white">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">Resources</h2>
                <p className="text-xl text-gray-600">Help with educational planning.</p>
            </div>

            <div className="mb-4">
                <Separator />
            </div>

            {/* Primary Tabs */}
            <div className="max-w-[1360px] h-[53px] inline-flex bg-white border border-gray-300 rounded-[12px] shadow-sm mb-6 mt-2">
                {primaryTabs.map((tab, index) => (
                    <button key={index} onClick={() => {
                        console.log("Setting tab to:", tab.item);
                        setActivePrimaryTab(tab.item);
                        setActiveSecondaryTab("Career Cluster");
                    }}
                        className={`px-8 h-full flex items-center text-xl transition-colors duration-200 rounded-[inherit] ${activePrimaryTab === tab.item
                            ? "text-[#94278F] font-medium bg-[#93268F0F]"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {tab.item}
                    </button>
                ))}
            </div>

            {/* Section Title */}
            <div className="flex items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">{activePrimaryTab}</h3>
                <div className="flex-grow ml-4 h-0.5 bg-yellow-400" />
            </div>

            {/* Secondary Tabs */}
            {activePrimaryTab === "Career Library" && (
                <div className="flex justify-center mb-10">
                    <div className="flex w-[1010px] h-[56px] border border-gray-300 rounded-full overflow-hidden shadow">
                        {secondaryTabs.map((tab, index) => (
                            <button key={index} onClick={() => setActiveSecondaryTab(tab.item)}
                                className={`flex-1 flex items-center justify-center space-x-2 text-[20px] transition-colors duration-200 ${activeSecondaryTab === tab.item
                                    ? "bg-[#94278F] text-white"
                                    : "text-[#94278F] hover:bg-[#94278F] hover:text-white"
                                    }`}
                            >
                                {tab.item === "Career Cluster" && <img src={CareerCluster} className={`${activeSecondaryTab === tab.item ? 'filter brightness-0 invert' : ''}`} />}
                                {tab.item === "Trending Careers" && <img src={TrendingCareer} className={`${activeSecondaryTab === tab.item ? 'filter brightness-0 invert' : ''}`} />}
                                {tab.item === "Future Career Prediction" && <img src={FuturePredection} className={`${activeSecondaryTab === tab.item ? 'filter brightness-0 invert' : ''}`} />}
                                <span>{tab.item}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Content Area */}
            {activePrimaryTab === "Career Library" ? (
                <>
                    {activeSecondaryTab === "Career Cluster" && (
                        <>
                            {sectors.map((sector, i) => (
                                <section key={i} className="mb-8">
                                    <div className="flex items-center mb-4">
                                        <h2 className="text-2xl text-gray-800 whitespace-nowrap">
                                            <span className="font-semibold">{sector.title.split("(")[0].trim()}</span>
                                            {sector.title.includes("(") && (
                                                <span className="font-normal ml-2">({sector.title.split("(")[1]}</span>
                                            )}
                                        </h2>
                                        <div className="flex-grow h-0.5 bg-yellow-400 ml-4" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
                                        {sector.items.map((item, j) => (
                                            <div key={j} className="relative overflow-hidden rounded-lg shadow-lg group">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                                    <p className="text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </>
                    )}
                    {activeSecondaryTab === "Trending Careers" && (
                        <div className="p-6 text-center text-gray-600">
                            <section className="p-5 font-poppins">
                                <div className="flex items-center mb-10">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        Primary Sector (Extraction and Agriculture)
                                    </h3>
                                    <div className="flex-grow ml-4 h-0.5 bg-yellow-400" />
                                </div>

                                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    {careers.map((career, index) => (
                                        <div
                                            key={index}
                                            className={`relative overflow-hidden rounded-md border border-[#FFFFFF] group
                                                ${index === 0
                                                    ? 'after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[3px] after:bg-[#A855FF]'
                                                    : ""
                                                }`}
                                        >
                                            <img
                                                src={career.image}
                                                alt={career.title}
                                                className="absolute inset-0 h-full w-full object-cover grayscale opacity-40
                                                transition-transform duration-300 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-[#FFFFFF]/20 mix-blend-luminosity" />

                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/60 to-transparent" />

                                            <div className="absolute top-4 right-4 z-60 bg-white rounded-full">
                                                <LikeButton />
                                            </div>

                                            <div className="relative z-30 p-6">
                                                <p className="text-[14px] font-semibold text-gray-400">
                                                    {career.category}
                                                </p>
                                                <h3 className="mt-2 text-[20px] font-semibold leading-tight text-gray-900">
                                                    {career.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}
                    {activeSecondaryTab === "Future Career Prediction" && (
                        <div className="p-6 text-center text-gray-600">
                            <section className="p-5 font-poppins">
                                <div className="flex items-center mb-10">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        Primary Sector (Extraction and Agriculture)
                                    </h3>
                                    <div className="flex-grow ml-4 h-0.5 bg-yellow-400" />
                                </div>

                                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    {careers.map((career, index) => (
                                        <div
                                            key={index}
                                            className={`relative overflow-hidden rounded-md border border-[#FFFFFF] group
                                                ${index === 0
                                                    ? 'after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[3px] after:bg-[#A855FF]'
                                                    : ""
                                                }`}
                                        >
                                            <img
                                                src={career.image}
                                                alt={career.title}
                                                className="absolute inset-0 h-full w-full object-cover grayscale opacity-40
                                                transition-transform duration-300 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-[#FFFFFF]/20 mix-blend-luminosity" />

                                            <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/60 to-transparent" />

                                            <div className="absolute top-4 right-4 z-60">
                                                <LikeButton />
                                            </div>

                                            <div className="relative z-30 p-6">
                                                <p className="text-[14px] font-semibold text-gray-400">
                                                    {career.category}
                                                </p>
                                                <h3 className="mt-2 text-[20px] font-semibold leading-tight text-gray-900">
                                                    {career.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}
                </>
            ) : (
                <div>
                    {activeTabComponent}
                </div>
            )}
        </div >
    );
}

