import React, { useState } from "react";
import { ChevronDown, X } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

          {/* Account Holder Name */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                Account Holder Name 
              </label>
              <input
                type="text"
                name="accountHolder"
                value={form.accountHolder}
                onChange={handleChange}
                placeholder="Enter Account Holder Name"
                className="w-full h-[68px] px-1 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* PAN Card No */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                PAN Card No 
              </label>
              <input
                type="text"
                name="panCard"
                value={form.panCard}
                onChange={handleChange}
                placeholder="Enter PAN Card No"
                className="w-full h-[68px] px-1 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* Account Type */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                Account Type
              </label>
              <select
                name="accountType"
                value={form.accountType}
                onChange={handleChange}
                className="appearance-none w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              >
                <option value="">Please Select</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
            </div>
          </div>

          {/* Account Number */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                Account Number 
              </label>
              <input
                type="text"
                name="accountNumber"
                value={form.accountNumber}
                onChange={handleChange}
                placeholder="Enter Account Number"
                className="w-full h-[68px] px-1 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
              />
            </div>
          </div>

          {/* Confirm Account Number */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                Confirm Account Number 
              </label>
              <input
                type="text"
                name="confirmAccountNumber"
                value={form.confirmAccountNumber}
                onChange={handleChange}
                placeholder="Confirm Account Number"
                className="w-full h-[68px] px-1 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* IFSC Code */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                IFSC Code 
              </label>
              <input
                type="text"
                name="ifscCode"
                value={form.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC Code"
                className="w-full h-[68px] px-1 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* GST No */}
          <div className="relative flex justify-center">
            <div className="relative w-[521.81px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
                GST No.
              </label>
              <input
                type="text"
                name="gstNo"
                value={form.gstNo}
                onChange={handleChange}
                placeholder="Enter GST No."
                className="w-full h-[68px] px-1 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px]"
              />
            </div>
          </div>
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
