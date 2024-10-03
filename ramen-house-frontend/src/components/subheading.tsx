import React from "react";

interface SubheadingProps {
  heading: string; // Main heading text
  subheading?: string; // Optional subheading text
  size?: "small" | "medium" | "large"; // Size for the heading
  font?: string; // Optional font class
}

function Subheading({ heading, subheading, size, font }: SubheadingProps) {
  const sizeClass = {
    small: "text-sm",
    medium: "text-lg",
    large: "text-2xl",
  };

  return (
    <div className="mb-4">
      <h1 className={`${font} ${sizeClass} font-bold`}>{heading}</h1>
      {subheading && (
        <h2 className={`${font} text-gray text-sm`}>{subheading}</h2>
      )}
    </div>
  );
}
export default Subheading;
