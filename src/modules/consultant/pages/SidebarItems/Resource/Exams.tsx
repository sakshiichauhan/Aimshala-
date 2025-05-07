import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import examIcon from "@/assets/examIcon.png"
import { LikeButton } from "@/modules/consultant/components/LikeButton";

export default function Exams() {
    return (
        <div className="font-poppins">
            <div className="flex items-center gap-2 w-full">
                <h2 className="text-[28px] whitespace-nowrap">Government <span className="font-bold">Exams</span></h2>
                <Separator className="bg-[#FFCB07] flex-1" />
            </div>
            <div className="grid grid-cols-2 m-4 gap-5">
                <ExamCard />
                <ExamCard />
                <ExamCard />
                <ExamCard />
            </div>
        </div>
    );
}

function ExamCard() {
    return (
        <div className="border rounded-2xl p-4 w-[650px] h-[190px]">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={examIcon} alt="icon" />
                    <p className="font-semibold text-[20px]">UPSC Civil Services Examination (IAS, IPS, IFS)</p>
                </div>
                <LikeButton onToggle={() => console.log("liked")}/>
            </div>
            <div className="mt-2">
                <h1 className="flex justify-between ">
                    <span className="text-[#787878] font-[400]">Conducting Body</span>
                    <span className="font-[500]">Union Public Service Comission</span>
                </h1>
                <div>
                    <h1 className="flex justify-between">
                        <span className="text-[#787878] font-[400]">Exam Category</span>
                        <span className="font-[500]">Defense Services</span>
                    </h1>
                </div>
            </div>
            <Separator className="mt-4" />
            <div className="text-[#93268F] text-[16px]">
                <div className="inline-flex justify-center items-center gap-4 mt-2.5">Website <ArrowRight /></div>
            </div>
        </div>
    )
}