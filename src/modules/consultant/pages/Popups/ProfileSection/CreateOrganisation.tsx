import React, { useState } from "react";
import { X } from "lucide-react";
import RenderInput from "@/modules/consultant/components/RenderInput";

interface CreateOrganisationProps {
  onClose: () => void;
}

interface FormState {
  organisationName: string;
  organisationType: string;
  location: string;
  aboutOrganisation: string;
  logo: File | null;
}

const CreateOrganisation = ({ onClose }: CreateOrganisationProps) => {
  const [form, setForm] = useState<FormState>({
    organisationName: "",
    organisationType: "",
    location: "",
    aboutOrganisation: "",
    logo: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;

    if (name === "logo") {
      setForm({ ...form, logo: files?.[0] || null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  font-poppins ">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center  min-h-[60px] px-6 justify-between">
          <h1 className="text-2xl font-semibold text-[#000000]">
            Create Organisation
          </h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">
          <RenderInput
            label="Organisation Name"
            name="organisationName"
            value={form.organisationName}
            onChange={handleChange}
            placeholder="Ex: Microsoft"
          />

          <RenderInput
            label="Organisation Type"
            name="organisationType"
            value={form.organisationType}
            onChange={handleChange}
            placeholder="Please Select"
          />

          <RenderInput
            label="Location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Ex: London, United Kingdom"
          />

          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-base font-semibold text-[#1C1C1C] mb-2">
              Upload Logo
            </h2>
            <input
              type="file"
              accept="image/*"
              name="logo"
              onChange={handleChange}
              className="hidden"
              id="logo-upload"
            />
            <label
              htmlFor="logo-upload"
              className="block w-full h-[100px] border-2 border-dashed border-[#DCDCDC] rounded-md cursor-pointer hover:border-[#94278F] transition-colors duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full text-[#898989]">
                <span>Click to upload or drag and drop</span>
                <span className="text-sm">
                  SVG, PNG, JPG (max. 400x400px)
                </span>
              </div>
            </label>
          </div>

          <RenderInput
            label="About Organisation"
            name="aboutOrganisation"
            value={form.aboutOrganisation}
            onChange={handleChange}
            placeholder="Enter Description"
            isTextarea={true}
          />
        </div>

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-[12px]">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrganisation;
