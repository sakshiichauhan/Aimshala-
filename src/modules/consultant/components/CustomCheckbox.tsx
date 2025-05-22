import React from 'react';

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  name,
  onChange,
}) => {  const checkboxClass =
    "appearance-none cursor-pointer w-[21px] h-[21px] rounded-[4px] \
    border-2 border-[#DCDCDC] transition-colors checked:bg-[#FFFFFF] \
    checked:border-[#94278F] relative after:content-[''] after:absolute \
    after:top-[3px] after:left-[7px] after:w-[5px] after:h-[11px] \
    after:border-r-[2px] after:border-b-[2px] after:border-[#94278F] \
    after:rotate-45 after:scale-0 checked:after:scale-100 ";

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={checkboxClass}
      />
      <span className="text-[#898989] text-[15px] font-medium">
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;
