import { Upload } from "lucide-react"

export default function MediaUpload() {
    return (
        <div className="font-poppins bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] flex justify-center items-center min-h-screen">
            <div className="max-w-[730px] h-[535px] flex flex-col gap-4 bg-white rounded-[12px] p-4 shadow-lg px-10 ">
                <div className="flex gap-3 bg-[var(--color-purple)]/4">
                    <span className="border-l-3 border-[var(--color-purple)]"></span>
                    <p className="text-[20px] font-medium ">Verify Business Address for In-Person Sessions</p>
                </div>
                <div className="flex justify-center items-center gap-4 border border-[#E5E7EB] rounded-lg p-3">
                    <span className="bg-[var(--color-green)] rounded-[64px] p-3 h-[20px] w-[20px]  text-white inline-flex items-center justify-center font-medium ">1</span>
                    <p className="text-[14px] text-[#686868]" >Create a short video and images that clearly showcase the building's entrance, including the approach.</p>
                </div>

                <div className="flex justify-center items-center gap-4 border border-[#E5E7EB] rounded-lg p-3">
                    <span className="bg-[var(--color-green)] rounded-[64px] p-3 h-[20px] w-[20px]  text-white inline-flex items-center justify-center font-medium ">2</span>
                    <p className="text-[14px] text-[#686868]" >Include visuals of the interior spaces, such as reception areas, workspaces, and meeting rooms.</p>
                </div>

                <div className="flex justify-center items-center gap-4 border border-[#E5E7EB] rounded-lg p-3">
                    <span className="bg-[var(--color-green)] rounded-[64px] p-3 h-[20px] w-[20px]  text-white inline-flex items-center justify-center font-medium ">3</span>
                    <p className="text-[14px] text-[#686868]" >Highlight notable landmarks around the location, along with nearby transit hubs and commercial areas.</p>
                </div>

                <div className="flex items-center flex-col justify-center w-full border rounded-lg border-gray-200">
                    <div className="p-2">
                        <label className="flex flex-col items-center justify-center w-full border-gray-300 rounded-lg cursor-pointer outline-none">
                            <div className="flex items-center justify-center gap-2 py-2">
                                <div className="flex justify-center items-center">
                                    <Upload className="w-8 h-8" />
                                </div>
                                <p className="text-[16px]">Upload Images or Video</p>
                            </div>
                            <div className="text-[#767676]">
                                <p className="text-[14px]">Drag and drop files here or <span className="underline text-[var(--color-purple)]">Browse files</span></p>
                            </div>
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="">
                        <p className="text-[14px] text-[#767676] m-1 border-t-1 border-[#767676] flex justify-center">Supported formats for upload: .jpg, .png, .mp4, .mov, .avi</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button className="border border-[var(--color-purple)] text-[var(--color-purple)] px-4 py-2 rounded-[12px] w-[170px] font-medium">Back</button>
                    <button className="bg-[var(--color-purple)] text-white px-4 py-2 rounded-[12px] w-[170px] font-medium">Next</button>
                </div>
            </div>
        </div>
    )
}