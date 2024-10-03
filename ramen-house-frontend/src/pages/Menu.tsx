import Card from "../components/card";
import Header from "../components/header";
import { menuData } from "../data/mockData";

function Menu() {
  return (
    <div>
      <Header text="RAMEN" />
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
