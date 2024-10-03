import Card from "../components/card";
import Header from "../components/header";
import { menuData } from "../data/mockData";

function Menu() {
  return (
    <div>
      <div about="header and logo" className="flex items-center pl-6 pt-4 ">
        <img
          src="favicon.ico" // Update this to the actual path of your logo
          alt="ramen logo"
          className="h-10 w-auto" // Adjust height and width as needed
        />
        <h1 className="pl-4 font-bold text-[32px]">RAMEN HOUSE</h1>
      </div>
      <div>
        {menuData.map((item) => (
          <Card
            key={item.id}
            menuItem={item.title}
            content={item.description}
            imageUrl={item.imageUrl}
            price={item.bowlPrice}
            link={`/menu-item/${item.id}`} // Link with ID for redirection
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
