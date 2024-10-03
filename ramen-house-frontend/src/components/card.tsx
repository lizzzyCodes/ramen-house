// interfaces for interfaces contracts that need to be upheld.. usually for React props
// types for data

import { Link } from "react-router-dom";
interface CardProps {
  menuItem: string;
  content: string;
  link?: string; // redirection link
  price: string;
  imageUrl?: string; // Optional prop
}

export default function Card({
  menuItem,
  content,
  imageUrl,
  link,
  price,
}: CardProps) {
  return (
    <Link to={link || "/"}>
      {" "}
      {/* Fallback to '/' if link is undefined */}
      <div className="max-w-sm rounded overflow-hidden">
        <img className="w-full" src={imageUrl} alt="ramen item" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{menuItem}</div>
          <p className="text-gray-700 text-base">{content}</p>
          <p className="text-gray-700 text-base">{price}</p>
        </div>
      </div>
    </Link>
  );
}
