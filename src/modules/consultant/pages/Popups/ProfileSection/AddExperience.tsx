// import React, { useState } from "react";
// import CalendarIcon from '@/assets/Consultant/Calendar.png';
// import { ChevronDown, X } from "lucide-react";

// interface AddExperienceProps {
//   onClose: () => void;
// }

// interface FormState {
//   title: string;
//   employmentType: string;
//   companyName: string;
//   location: string;
//   locationType: string;
//   startDate: string;
//   endDate: string;
//   description: string;
//   profileHeadline: string;
//   currentlyWorking: boolean;
// }

// const AddExperience = ({ onClose }: AddExperienceProps) => {
//   const [form, setForm] = useState<FormState>({
//     title: "",
//     employmentType: "",
//     companyName: "",
//     location: "",
//     locationType: "",
//     startDate: "",
//     endDate: "",
//     description: "",
//     profileHeadline: "",
//     currentlyWorking: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value
//     }));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins ">
//       <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">

//         {/* Header */}
//         <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
//           <h1 className="text-2xl font-semibold text-[#000000]">Add Experience</h1>
//           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Form */}
//         <div className="px-8 py-8 space-y-5">

//           {/* Title */}
//           <div className="relative w-full max-w-[521.81px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               placeholder="Ex: Retail Sales Manager"
//               className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
//             />
//           </div>

//           {/* Employment Type */}
//           <div className="relative w-full max-w-[521.81px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Employment type</label>
//             <select
//               name="employmentType"
//               value={form.employmentType}
//               onChange={handleChange}
//               className="w-full h-[68px] px-4 pr-10 appearance-none border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
//             >
//               <option value="">Please Select</option>
//               <option value="full-time">Full-time</option>
//               <option value="part-time">Part-time</option>
//               <option value="contract">Contract</option>
//               <option value="internship">Internship</option>
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
//           </div>

//           {/* Company Name */}
//           <div className="relative w-full max-w-[521.81px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Company name</label>
//             <input
//               type="text"
//               name="companyName"
//               value={form.companyName}
//               onChange={handleChange}
//               placeholder="Ex: Microsoft"
//               className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
//             />
//             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94278F] text-sm font-medium cursor-pointer">
//               Create One
//             </span>
//           </div>

//           {/* Location */}
//           <div className="relative w-full max-w-[521.81px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               placeholder="Ex: London, United Kingdom"
//               className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
//             />
//           </div>

//           {/* Location Type */}
//           <div className="relative w-full max-w-[521.81px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Location Type</label>
//             <select
//               name="locationType"
//               value={form.locationType}
//               onChange={handleChange}
//               className="w-full h-[68px] px-4 pr-10 appearance-none border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
//             >
//               <option value="">Please Select</option>
//               <option value="on-site">On-site</option>
//               <option value="remote">Remote</option>
//               <option value="hybrid">Hybrid</option>
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
//           </div>

//           {/* Currently Working */}
//           <div className="relative w-full max-w-[530px] mx-auto">
//             <label className="inline-flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="currentlyWorking"
//                 checked={form.currentlyWorking}
//                 onChange={handleChange}
//                 className="w-5 h-5 text-[#94278F] bg-white border border-[#DCDCDC] rounded focus:outline-none"
//               />
//               <span className="text-[#94278F] text-[15px] font-medium">I am currently working in this role</span>
//             </label>
//           </div>

//           {/* Start and End Date */}
//           <div className="flex justify-between gap-4 max-w-[530px] mx-auto">
//             {[
//               { label: "Start date", name: "startDate" },
//               { label: "End date (or expected)", name: "endDate" }
//             ].map(({ label, name }) => (
//               <div key={name} className="relative w-full max-w-[260px]">
//                 <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">{label}</label>
//                 <input
//                   type="date"
//                   name={name}
//                   id={name}
//                   value={form[name as keyof FormState] as string}
//                   onChange={handleChange}
//                   className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px] [&::-webkit-calendar-picker-indicator]:hidden"
//                 />
//                 <img
//                   src={CalendarIcon}
//                   alt="Calendar"
//                   onClick={() => (document.getElementById(name) as HTMLInputElement)?.showPicker()}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Description */}
//           <div className="relative w-full max-w-[530px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Description</label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Enter Description"
//               maxLength={150}
//               className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
//             />
//             <div className="absolute bottom-2 right-4 text-xs text-[#898989]">{form.description.length}/150</div>
//           </div>

//           {/* Profile Headline */}
//           <div className="relative w-full max-w-[521.81px] mx-auto">
//             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Profile headline</label>
//             <input
//               type="text"
//               name="profileHeadline"
//               value={form.profileHeadline}
//               onChange={handleChange}
//               placeholder="Ex: Senior Manager at Microsoft"
//               className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
//             />
//           </div>

//           {/* Skills */}
//           <div className="w-full max-w-[530px] mx-auto">
//             <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
//             <p className="text-base text-[#6b7175] mb-4">
//               We recommend adding your top 5 used in this experience. They'll also appear in your Skills section.
//             </p>
//             <button className="w-[97px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
//               + Add Skill
//             </button>
//           </div>

//           {/* Media */}
//           <div className="w-full max-w-[530px] mx-auto">
//             <h2 className="text-lg font-semibold text-black mb-2">Media</h2>
//             <p className="text-base text-[#6b7175] mb-4">
//               Add Documents, photos, sites, videos, and presentations.{" "}
//               <span className="text-[#94278F] underline cursor-pointer">Learn more about media file types supported</span>
//             </p>
//             <button className="w-[114px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
//               + Add Media
//             </button>
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-[12px]">
//           <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddExperience;

import React, { useState } from "react";
import CalendarIcon from "@/assets/Consultant/Calendar.png";
import { ChevronDown, X } from "lucide-react";

interface AddExperienceProps {
  onClose: () => void;
}

interface FormState {
  title: string;
  employmentType: string;
  companyName: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
  description: string;
  profileHeadline: string;
  currentlyWorking: boolean;

  // Allow dynamic `[name]` indexing
  [key: string]: string | boolean;
}

const AddExperience: React.FC<AddExperienceProps> = ({ onClose }) => {
  const [form, setForm] = useState<FormState>({
    title: "",
    employmentType: "",
    companyName: "",
    location: "",
    locationType: "",
    startDate: "",
    endDate: "",
    description: "",
    profileHeadline: "",
    currentlyWorking: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // Narrow to HTMLInputElement to safely read `.checked`
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openDatePicker = (field: "startDate" | "endDate") => {
    const input = document.getElementById(
      field
    ) as HTMLInputElement | null;
    input?.showPicker?.();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#000000]">
            Add Experience
          </h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">
          {/* Title */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title as string}
              onChange={handleChange}
              placeholder="Ex: Retail Sales Manager"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
            />
          </div>

          {/* Employment Type */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Employment type
            </label>
            <select
              name="employmentType"
              value={form.employmentType as string}
              onChange={handleChange}
              className="w-full h-[68px] px-4 pr-10 appearance-none border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
            >
              <option value="">Please Select</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
          </div>

          {/* Company Name */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName as string}
              onChange={handleChange}
              placeholder="Ex: Microsoft"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94278F] text-sm font-medium cursor-pointer">
              Create One
            </span>
          </div>

          {/* Location */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location as string}
              onChange={handleChange}
              placeholder="Ex: London, United Kingdom"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
            />
          </div>

          {/* Location Type */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Location Type
            </label>
            <select
              name="locationType"
              value={form.locationType as string}
              onChange={handleChange}
              className="w-full h-[68px] px-4 pr-10 appearance-none border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
            >
              <option value="">Please Select</option>
              <option value="on-site">On-site</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989]" />
          </div>

          {/* Currently Working */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={form.currentlyWorking as boolean}
                onChange={handleChange}
                className="w-5 h-5 text-[#94278F] bg-white border border-[#DCDCDC] rounded focus:outline-none"
              />
              <span className="text-[#94278F] text-[15px] font-medium">
                I am currently working in this role
              </span>
            </label>
          </div>

          {/* Start and End Date */}
          <div className="flex justify-between gap-4 max-w-[530px] mx-auto">
            {(
              [
                { label: "Start date", name: "startDate" },
                { label: "End date (or expected)", name: "endDate" },
              ] as const
            ).map(({ label, name }) => (
              <div key={name} className="relative w-full max-w-[260px]">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                  {label}
                </label>
                <input
                  id={name}
                  type="date"
                  name={name}
                  value={form[name] as string}
                  onChange={handleChange}
                  className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
                />
                <img
                  src={CalendarIcon}
                  alt="Calendar"
                  onClick={() => openDatePicker(name)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="relative w-full max-w-[530px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Description
            </label>
            <textarea
              name="description"
              value={form.description as string}
              onChange={handleChange}
              placeholder="Enter Description"
              maxLength={150}
              className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {(form.description as string).length}/150
            </div>
          </div>

          {/* Profile Headline */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
              Profile headline
            </label>
            <input
              type="text"
              name="profileHeadline"
              value={form.profileHeadline as string}
              onChange={handleChange}
              placeholder="Ex: Senior Manager at Microsoft"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
            />
          </div>

          {/* Skills */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">
              Skills
            </h2>
            <p className="text-base text-[#6b7175] mb-4">
              We recommend adding your top 5 used in this experience. They’ll
              also appear in your Skills section.
            </p>
            <button className="w-[97px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Skill
            </button>
          </div>

          {/* Media */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">
              Media
            </h2>
            <p className="text-base text-[#6b7175] mb-4">
              Add Documents, photos, sites, videos, and presentations.{" "}
              <span className="text-[#94278F] underline cursor-pointer">
                Learn more about media file types supported
              </span>
            </p>
            <button className="w-[114px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Media
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-b-lg">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
