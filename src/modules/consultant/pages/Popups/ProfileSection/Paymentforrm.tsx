import React, { useState } from "react";
import { ChevronDown, X } from 'lucide-react';
import RenderInput from "@/modules/consultant/components/RenderInput";

interface PaymentformProps {
  onClose: () => void;
}

const Paymentform = ({ onClose }: PaymentformProps) => {
  const [form, setForm] = useState({
    accountHolder: "",
    panCard: "",
    accountType: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    gstNo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">
        
        {/* Header with X Button */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Payment Details</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-8 space-y-6">
          <RenderInput
            label="Account Holder Name"
            name="accountHolder"
            value={form.accountHolder}
            onChange={handleInputChange}
            placeholder="Enter Account Holder Name"
          />

          <RenderInput
            label="PAN Card No"
            name="panCard"
            value={form.panCard}
            onChange={handleInputChange}
            placeholder="Enter PAN Card No"
          />

          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                Account Type
              </label>
              <select
                name="accountType"
                value={form.accountType}
                onChange={handleSelectChange}
                className="appearance-none w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              >
                <option value="">Please Select</option>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
            </div>
          </div>

          <RenderInput
            label="Account Number"
            name="accountNumber"
            value={form.accountNumber}
            onChange={handleInputChange}
            placeholder="Enter Account Number"
          />

          <RenderInput
            label="Confirm Account Number"
            name="confirmAccountNumber"
            value={form.confirmAccountNumber}
            onChange={handleInputChange}
            placeholder="Confirm Account Number"
          />

          <RenderInput
            label="IFSC Code"
            name="ifscCode"
            value={form.ifscCode}
            onChange={handleInputChange}
            placeholder="Enter IFSC Code"
          />

          <RenderInput
            label="GST No."
            name="gstNo"
            value={form.gstNo}
            onChange={handleInputChange}
            placeholder="Enter GST No."
          />
        </div>

        {/* Footer */}
        <div className="bg-[#F5F5F5] px-6 py-4 flex justify-end rounded-b-lg">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-sm font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paymentform;
