import React, { useState } from "react";
// used to keep track of count, takes in the price of the bowl
import PrimaryButton from "./primaryButton";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CounterProps {
  price: number | undefined;
}

const Counter = ({ price }: CounterProps) => {
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
      <Link to={"/menu"}>
        {price && (
          <PrimaryButton
            text={`Add to Cart ($${(count * price).toFixed(2)})`}
          />
        )}
      </Link>
    </div>
  );
};

export default Counter;
