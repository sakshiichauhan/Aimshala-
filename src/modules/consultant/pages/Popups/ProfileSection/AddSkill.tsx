import React, { useState } from "react";
import { X } from "lucide-react";

interface AddSkillProps {
  onClose: () => void;
}

const AddSkill = ({ onClose }: AddSkillProps) => {
  const [form, setForm] = useState({
    skill: "",
    selectedOptions: [],
    followSkill: false,
  });

  const suggestedSkills = ["Social Media", "Business", "Advertisement", "Marketing", "Sales"];
  const experienceOptions = [
     "Senior UI/UX Designer at Alpheric" ,
     "Senior UI/UX designer at RewardLion" ,
     "User Experience Designer at Kadritech" ,
  ];
  const educationOptions = ["Tilak Raj Chadha Institute of Management & Technology"];
  const licensesOptions = ["UI/UX design"];
  const projectsOptions = ["Beauty Club Platform / UI/UX Design of Mobile & Website"];
  const coursesOptions = ["UI/UX design"];
  const honorsOptions = ["UI/UX design award", "Follow this skill to keep up with relevant content." ];

  const handleCheckboxChange = (label: string) => {
    if (form.selectedOptions.includes(label)) {
      setForm((prev) => ({
        ...prev,
        selectedOptions: prev.selectedOptions.filter((item) => item !== label),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        selectedOptions: [...prev.selectedOptions, label],
      }));
    }
  };

  return (
    <div className="flex items-center justify-center font-poppins">
      <div className="w-[791px] rounded-lg shadow-md overflow-hidden bg-white">
        
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Skill</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
      <div className="px-8 py-8 space-y-3">
  {/* Skill Input */}
  <div className="flex justify-center">
    <div className="relative w-full max-w-[522px]">
      <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-black">Skill</label>
      <input
        type="text"
        value={form.skill}
        onChange={(e) => setForm({ ...form, skill: e.target.value })}
        placeholder="Ex: Retail Sales Manager"
        className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
      />
    </div>
  </div>

  {/* Suggested Skills */}
  <div className="flex justify-center">
  <div className="w-full max-w-[522px] border border-[#DCDCDC] rounded-lg px-5 py-4 space-y-2">
    <h2 className="text-sm font-medium text-[#1D1D1F]">
      Suggested based on your profile
    </h2>
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      { suggestedSkills.map((item, index) => (
        <span
          key={index}
          className="bg-[#F4F4F4] text-[#747677] text-[16px] px-4 py-1.5 rounded-full cursor-pointer"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</div>





          {/* Context Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-[530px] space-y-2">
              <h2 className="text-[20px] font-semibold text-black ">Show us where you used this skill</h2>
              <p className="text-[16px] text-[#6D7175]">
                75% of hirers value skill context. Select at least one item to show where you used this skill.
              </p>

              {/* Dynamic Sections */}
              {[
                { title: "Experience", options: experienceOptions },
                { title: "Education", options: educationOptions },
                { title: "Licenses & certifications", options: licensesOptions },
                { title: "Projects", options: projectsOptions },
                { title: "Courses", options: coursesOptions },
                { title: "Honors & awards", options: honorsOptions },
              ].map(({ title, options }) => (
                <div key={title} className="space-y-3">
                  <h3 className="font-semibold text-[15px] text-[#898989]">{title}</h3>
                  <div className="space-y-2">
                    {options.map((option, index) => (
                      <label key={index} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={form.selectedOptions.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className="w-[27px] h-[27px] text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                        />
                        <span className="text-[#898989] text-[14px]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Follow Skill */}
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
