import React, { useState } from "react";
import CheckBox from "./checkbox";
interface RamenOptions {
  label: string; // The label of the soup base
  price?: number; // The price associated with the soup base
  isPopular?: boolean | undefined;
}

interface SelectionProps {
  isChecked?: boolean;
  onChange?: (label: string) => void;
  disabled?: boolean | undefined;
  data?: RamenOptions[];
}

const RamenSelection = ({ data }: SelectionProps) => {
  return (
    <div>
      {data?.map((item) => (
        <CheckBox
          key={item.label}
          label={item.label}
          price={item.price}
          isPopular={item.isPopular}
        />
      ))}
    </div>
  );
};

export default RamenSelection;
