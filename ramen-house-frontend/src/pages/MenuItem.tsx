import { IoIosClose } from "react-icons/io";
import Header from "../components/header";
import { Link } from "react-router-dom";
import CheckBox from "../components/checkbox";
import Subheading from "../components/subheading";
import PrimaryButton from "../components/primaryButton";
import RamenSelection from "../components/selection";
import { menuData } from "../data/mockData";
import { useParams } from "react-router-dom";

// EACH CARD WILL ACCESS THE DATA BASE ON ID
function MenuItem() {
  // grab the id from the mockData
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const ramenItem = id
    ? menuData.find((item) => item.id === parseInt(id, 10))
    : null;
  console.log(ramenItem, "does this print everything? [ec]");
  return (
    <div className="max-w-md mx-auto p-4 md:max-w-2xl md:p-8 font-nunito">
      <Link to={"/menu"} className="text-3xl">
        <IoIosClose />
      </Link>
      <section about="header and information" className="pt-2 pb-4">
        <Header
          text={ramenItem?.title}
          font="font-montserrat"
          size="text-[20px]"
        />
        <p className="text-gray ">{ramenItem?.description}</p>
      </section>
      <div className="pb-4">
        <img
          className="rounded-lg rounded-br-lg rounded-bl-lg"
          src={ramenItem?.imageUrl}
          alt="ramen item"
        />
      </div>

      <Subheading
        heading="Choose Your Meat"
        subheading="Choose 1"
        size="large"
        font="font-nunito"
      />
      <RamenSelection data={ramenItem?.meats} />

      <Subheading
        heading="Spice Level"
        subheading="Choose 1"
        size="large"
        font="font-nunito"
      />
      <RamenSelection data={ramenItem?.spice} />

      <Subheading
        heading="Soup Base Substitutions"
        subheading="(Optional)"
        size="large"
        font="font-nunito"
      />
      <RamenSelection data={ramenItem?.soupBase} />

      <Link to={"/menu"}>
        <PrimaryButton text="Add to cart total_here" />
      </Link>
    </div>
  );
}

export default MenuItem;
