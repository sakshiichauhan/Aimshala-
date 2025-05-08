import { ArrowRightIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export default function NotificationCard() {
    return <div className="flex flex-col p-3 border border-[#E8E9E9] rounded-[16px] max-w-[398px] max-h-[245px] bg-white">
        <div>
            <h1 className="text-[16px] font-bold">CLAT 2024 Sample Paper Set 3 Out, Know How to Download</h1>
            <h2 className="text-[12px] text-[#787878] mt-2">Sept 13, 2024</h2>
            <p className="text-[12px] text-[#787878] mt-2">
                CLAT 2024 Sample Paper Set 3 has been released by NLU Consortium today, October 3. Candidates have to use their login ID and password created at the time of registration to download CLAT 3rd set of sample question papers.
            </p>
            <Separator orientation="horizontal" className="mt-3" />
            <div className="flex justify-between items-center gap-2 mt-3">
                <h2 className="text-[#93268F] font-semibold">View More</h2>
                <ArrowRightIcon className="text-[#93268F]" />
            </div>
        </div>
    </div>
}
