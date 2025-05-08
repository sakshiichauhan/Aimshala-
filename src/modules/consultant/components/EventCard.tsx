import React, { useEffect, useState, MouseEvent } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export type EventCardProps = {
    imageSrc: string;
    category: string;
    author: string;
    title: string;
    startDate: Date;
    mode: "join" | "countdown";
    onJoinClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const EventCard: React.FC<EventCardProps> = ({
    imageSrc,
    category,
    author,
    title,
    startDate,
    mode,
    onJoinClick,
}) => {
    // helper to compute HH:MM:SS until startDate
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const diff = startDate.getTime() - now;
        if (diff <= 0) return "00:00:00";
        const hrs = Math.floor(diff / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0");
        const mins = Math.floor((diff / (1000 * 60)) % 60)
            .toString()
            .padStart(2, "0");
        const secs = Math.floor((diff / 1000) % 60)
            .toString()
            .padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    };

    // state for countdown
    const [timeLeft, setTimeLeft] = useState<string>(calculateTimeLeft);

    useEffect(() => {
        if (mode !== "countdown") return;
        const iv = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(iv);
    }, [mode, startDate]);

    // split into [HH, MM, SS]
    const [hrs, mins, secs] = timeLeft.split(":");

    return (
        <div className="flex items-center bg-white rounded-lg border p-2 space-x-4 w-[474px] h-[112px]">
            {/* Left image */}
            <img
                src={imageSrc}
                alt={title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
            />

            {/* Middle content */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <span className="inline-block border border-[#E7E6F080] rounded px-2 py-1 text-[12px]">
                        {category}
                    </span>
                    <span className="text-[#93268F] font-medium text-[12px] ml-2">
                        • By {author}
                    </span>
                    <h3 className="text-[20px] font-semibold truncate mt-1">{title}</h3>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span className="font-normal">
                        On{" "}
                        <span className="font-semibold">
                            {format(startDate, "MMM d, yyyy")}
                        </span>{" "}
                        at {format(startDate, "h:mm a")}
                    </span>
                </div>
            </div>

            {/* Right action area */}
            <div className="flex-shrink-0">
                {mode === "join" ? (
                    <button
                        onClick={onJoinClick}
                        className="px-3 py-2 bg-[#93268F] text-white rounded-[6px] hover:bg-[#7a1e6b] transition"
                    >
                        Join Now
                    </button>
                ) : (
                    <div>
                        <div className="flex gap-2">
                            {[hrs, mins, secs].map((unit, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center bg-[#F4F4F4] text-[#626262] rounded-[4px] px-1 py-1"
                                >
                                    <span className="text-lg font-medium">{unit}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-2 text-[12px]">Time Left</div>
                    </div>
                )}
            </div>
        </div>
    );
};
