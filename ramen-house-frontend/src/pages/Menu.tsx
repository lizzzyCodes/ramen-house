import Card from "../components/card";
import Header from "../components/header";
import { menuData } from "../data/mockData";

function Menu() {
  return (
    <div>
      <div about="header and logo" className="flex items-center pl-6 pt-4 ">
        <img src="favicon.ico" alt="ramen logo" className="h-10 w-auto" />
        <h1 className="pl-4 font-bold text-[32px]">RAMEN HOUSE</h1>
      </div>
      <div className="flex flex-wrap gap-4 md:flex-row md:gap-4">
        {menuData.map((item) => (
          <div key={item.id} className="p-4">
            <Card
              menuItem={item.title}
              content={item.description}
              imageUrl={item.imageUrl}
              price={item.bowlPrice}
              link={`/menu-item/${item.id}`} // Link with ID for redirection
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
