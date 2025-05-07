import { ResourceCard } from "@/modules/consultant/components/ResourceCard";
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
    return (
        <section >
            <div className="py-4">
                <div className="">
                    <span className="border-2 p-2 rounded-l-xl">Active</span>
                    <span className="border-2 p-2 rounded-r-xl">Deactivated</span>
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

