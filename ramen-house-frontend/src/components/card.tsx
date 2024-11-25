// interfaces for interfaces contracts that need to be upheld.. usually for React props
// types for data

import { Link } from "react-router-dom";
interface CardProps {
  menuItem: string;
  content: string;
  link?: string; // redirection link
  price: number;
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
    <div className="p-4">
      <Link to={link || "/"}>
        {" "}
        {/* Fallback to '/' if link is undefined */}
        <div className="max-w-sm rounded overflow-hidden border-[#C6322D] border-2 rounded-lg">
          <img className="w-full w-[380px] h-[219px] " src={imageUrl} alt="ramen item" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 font-nunito">
              {menuItem}
            </div>
            <section className="text-gray text-base font-nunito">
              <p>{content}</p>
              <p className="pt-4 pb-4">${price.toFixed(2)}</p>
            </section>
          </div>
        </div>
      </Link>
    </div>
  );
}
