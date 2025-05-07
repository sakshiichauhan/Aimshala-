import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function VerifyForm() {
    return (
        <section className="font-poppins bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8]">
            <div className="max-w-[740px] bg-white p-4 mx-auto">
                <div className="flex gap-3 bg-[var(--color-purple)]/4">
                    <span className="border-l-3 border-[var(--color-purple)] "></span>
                    <p className="text-lg font-medium">Verify Business Address for In-Person Sessions</p>
                </div>
                <div className="mt-4">
                    <p>Enter Location Details</p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                            Location Type
                        </label>
                        <input
                            type="text"
                            placeholder="Select location type"
                            className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                            Office/Institute Name (if applicable)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Office/Institute Name"
                            className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                        />
                    </div>
                    {/* tag */}
                    <div className="flex gap-4 p-2">
                        <span className="bg-[var(--color-purple)] p-2 text-white rounded-sm">Search by Google</span>
                        <span className="text-[var(--color-purple)] p-2 border rounded-sm border-[var(--color-purple)]/20">Manual Coordinates</span>
                        <p className=" gap-1 text-[var(--color-purple)] inline-flex justify-center items-center">
                            <span><MapPin size={14} /></span>
                            <p>Drop Pin</p>
                        </p>
                    </div>
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                            Full Address
                        </label>
                        <input
                            type="text"
                            placeholder="Start typing and find your place in google map"
                            className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                        />
                    </div>
                    {/* tag */}
                    <div className="flex gap-4 p-2">
                        <span className="bg-[var(--color-purple)] p-2 text-white rounded-sm">Search by Google</span>
                        <span className="text-[var(--color-purple)] p-2 border rounded-sm border-[var(--color-purple)]/20">Manual Coordinates</span>
                        <p className=" gap-1 text-[var(--color-purple)] inline-flex justify-center items-center">
                            <span><MapPin size={14} /></span>
                            <p>Drop Pin</p>
                        </p>
                    </div>
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                            Add Custom Address
                        </label>
                        <input
                            type="text"
                            placeholder="Start typing and find your place in google map"
                            className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="relative w-1/2">
                            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                                Latitute
                            </label>
                            <input
                                type="text"
                                placeholder="40.7143528"
                                className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                            />
                        </div>
                        <div className="relative w-1/2">
                            <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                                Longitude
                            </label>
                            <input
                                type="text"
                                placeholder="-74.0059731"
                                className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                            />
                        </div>
                    </div>
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-gray-600">
                            Landmark (Optional)
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: D-79, Block D, Sector 48"
                            className="w-full p-3 border text-gray-400 border-[var(--color-border-gray)] rounded-md focus:outline-none focus:ring-2 focus:[var(--color-purple)]/20"
                        />
                    </div>
                    <div className="inline-flex justify-center mt-3">
                        <Button className="w-[170px]">Next</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}