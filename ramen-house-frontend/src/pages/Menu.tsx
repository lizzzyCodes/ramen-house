import Card from "../components/card";
import Header from "../components/header";

function Menu() {
  return (
    <div>
      <Header text="Ramen"/>
      <Card
        menuItem="Tonkotsu Bowl"
        content="Mushroom miso broth served with maitake mushrooms, ramen noodles, seasoned egg, locally grown bean sprouts, fresh scallions, black garlic, and toasted sesame. (dairy free, contains peanut oil)"
        imageUrl="/images/TonkotsuBowl.jpg"
        price="$18.00"
        link="/menu-item"
      />
    </div>
  );
}

export default Menu;
