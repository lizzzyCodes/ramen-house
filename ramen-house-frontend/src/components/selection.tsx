import React, { useState } from "react";
import CheckBox from "./checkbox";
// soup base, meats and spicy levels.
interface RamenOptions {
  label: string; // The label of the soup base
  price?: number; // The price associated with the soup base
  isPopular?: boolean | undefined;
}

interface SelectionProps {
 // label: string; // item
  // price?: number | undefined; // price
 // isPopular?: boolean | undefined; // if popular display popular tag
  isChecked?: boolean; // if checked it should disable everything else
  onChange?: (label: string) => void;
  disabled?: boolean | undefined;
  data?: RamenOptions[];
}

const RamenSelection = ({ data }: SelectionProps) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  return (
    <div>
      {data?.map((item) => (
        <CheckBox
          key={item.label}
          label={item.label}
          price={item.price}
          isPopular={item.isPopular}
          //  isChecked={selectedCheckbox === meat.label}
          // onChange={handleCheckboxChange}
          // disabled={selectedCheckbox && selectedCheckbox !== meat.label}
        />
      ))}
    </div>
  );
};

export default RamenSelection;
