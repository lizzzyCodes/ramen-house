import React, { useState } from "react";
// Each individual checkbox
interface CheckboxProps {
  label: string;
  price?: number | undefined; // Optional extra price
  isPopular?: boolean | undefined; // Optional popular tag
  isChecked?: boolean;
  disabled?: boolean | undefined;
}

export default function CheckBox({
  label,
  price,
  isPopular,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="mb-4 font-nunito">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          className="mr-2"
        />
        <label className="flex-grow flex items-center">
          <span className="">{label}</span>
        </label>
      </div>

      <div className="ml-6 mt-1">
        {price && <span className="text-gray">+${price?.toFixed(2)}</span>}
      </div>

      <div className="ml-6 mt-1">
        {isPopular && (
          <span className="bg-yellow-300 text-yellow-800 rounded-full px-2 text-xs font-bold">
            Popular
          </span>
        )}
      </div>
      <div className="w-full border-b border-[#C6322D] mt-1"></div>
    </div>
  );
}
