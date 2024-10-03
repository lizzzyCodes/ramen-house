import React, { useState } from "react";
// used to keep track of count, takes in the price of the bowl
import PrimaryButton from "./primaryButton";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

const AddCounter = () => {
  const [count, setCount] = useState(1); // Default is one item

  const handleIncrement = () => {
    setCount(count + 1); // Increase count by 1
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1); // Increase count by 1
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={handleSubtract} className="text-black p-2">
        <FiMinusCircle />
      </button>
      <span className="text-xl">{count}</span>
      <button onClick={handleIncrement} className="text-black p-2">
        <FiPlusCircle />
      </button>
      <PrimaryButton text={`Add to Cart ($${(count * 3).toFixed(2)})`} />
    </div>
  );
};

export default AddCounter;
