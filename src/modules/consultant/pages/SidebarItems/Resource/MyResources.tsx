import { ResourceCard } from "@/modules/consultant/components/ResourceCard";
import { useState } from 'react';

const cardData = [
    {
        title: "Winner's PPT - Flipkart - 2023",
        description: "Detailed deck covering key strategies and solutions that won the Flipkart case study competition. Ideal for MBA students.",
        discountedPrice: 1500,
        price: 999,
    },
    {
        title: "Case Study - Amazon Growth Strategy",
        description: "A comprehensive analysis on how Amazon scaled its operations in India. Perfect for consulting prep.",
        discountedPrice: 1300,
        price: 850,
    },
    {
        title: "Marketing Strategy - Coca Cola",
        description: "Explore Coca Cola's global marketing strategy with real campaign breakdowns. Great for marketing enthusiasts.",
        discountedPrice: 1200,
        price: 799,
    },
    {
        title: "Finance Deck - Zomato IPO Analysis",
        description: "Deep dive into Zomato's IPO – financials, SWOT, and future outlook. A must-have for finance aspirants.",
        discountedPrice: 1100,
        price: 749,
    },
    {
        title: "Business Model Canvas - Airbnb",
        description: "A structured breakdown of Airbnb's business model using the BMC framework. Helpful for B-school projects.",
        discountedPrice: 1000,
        price: 699,
    },
    {
        title: "EdTech Revolution - Byju's Strategy",
        description: "Insightful presentation on Byju's rise in the edtech space, covering funding, strategy, and future plans.",
        discountedPrice: 1400,
        price: 899,
    }
];

export default function MyResources() {
    const [activeTab, setActiveTab] = useState<'active' | 'deactivated'>('active');

    return (
        <section >
            <div className="py-4">
                <div className="flex">
                    <button 
                        className={`border-2 p-2 rounded-l-[12px] border-r-0 hover:bg-[#faf4f9] transition-colors ${
                            activeTab === 'active' ? 'bg-[#faf4f9]' : ''
                        }`}
                        onClick={() => setActiveTab('active')}
                    >
                        Active
                    </button>
                    <button 
                        className={`border-2 p-2 rounded-r-[12px] border-l-0 hover:bg-[#faf4f9] transition-colors ${
                            activeTab === 'deactivated' ? 'bg-[#faf4f9]' : ''
                        }`}
                        onClick={() => setActiveTab('deactivated')}
                    >
                        Deactivated
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 rounded-2xl m-2 ">
                {cardData.map((card, index) => (
                    <ResourceCard key={index} {...card} />
                ))}
            </div>
        </section>
    );
}

