import ActiveTag from "./ActiveTag";
import Docs from "@/assets/Icons/Docs.svg"
import Edit from "@/assets/Icons/edit.svg"


interface ResourceCardProps {
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    // tag: boolean;
}

export function ResourceCard({ title, description, discountedPrice, price }: ResourceCardProps) {
    return (
        <div className="w-full bg-white  rounded-lg overflow-hidden border">
            <div className="p-4 flex items-center gap-5">
                <div className="bg-[#D8D8D833] rounded-lg p-2">
                    <img src={Docs} className="w-15"/>
                </div>
                <div className="flex-1">
                    <div className="mb-2">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center gap-5">
                                <h1 className="text-[20px] font-semibold">{title}</h1>
                                <span><ActiveTag/></span>
                            </div>
                            <div className="flex items-center">
                                <button>
                                    <img src={Edit} alt="edit " />
                                </button>
                            </div>
                        </div>
                        <h2 className="text-[16px] text-[#747677] mt-1">{description}</h2>
                    </div>
                    <div className="flex gap-4 text-[16px]">
                        <span className="font-bold text-[var(--color-purple)]">₹{price}</span>
                        <span className="line-through text-gray-500">₹{discountedPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
