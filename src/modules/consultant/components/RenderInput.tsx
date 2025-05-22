import Calendar from "@/assets/Consultant/Calendar.png";

interface RenderInputProps {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    isDate?: boolean;
    isTextarea?: boolean;
    maxLength?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function RenderInput({
    label,
    name,
    placeholder = "",
    type = "text",
    isDate = false,
    isTextarea = false,
    maxLength,
    value,
    onChange
}: RenderInputProps) {
    return (
        <div className="relative w-full max-w-[530px] mx-auto mb-5">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                {label}
            </label>

            {isTextarea ? (
                <>
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
                    />
                    {maxLength && (
                        <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
                            {value.length}/{maxLength}
                        </div>
                    )}
                </>
            ) : (
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989] ${isDate
                        ? "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:z-[-10]"
                        : ""
                        }`}
                />
            )}

            {isDate && !isTextarea && (
                <img
                    src={Calendar}
                    alt="Calendar"
                    onClick={() =>
                        (document.getElementById(name) as HTMLInputElement)?.showPicker?.()
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
            )}
        </div>
    );
}