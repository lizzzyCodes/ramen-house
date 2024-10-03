import { IoIosClose } from "react-icons/io";
import Header from "../components/header";
import { Link } from "react-router-dom";
import CheckBox from "../components/checkbox";
import Subheading from "../components/subheading";
import PrimaryButton from "../components/primaryButton";

function MenuItem() {
  return (
    <div className="max-w-md mx-auto p-4 md:max-w-2xl md:p-8 font-typewriter">
      <Link to={"/menu"} className="text-3xl">
        <IoIosClose />
      </Link>
      <section about="header and infomation" className="pt-4 pb-4">
        <Header
          text="Tonkotsu Bowl"
          font="font-montserrat"
          size="text-[20px]"
        />
        <p className="text-gray ">
          our most traditional ramen. rich and hearty pork broth, tokyo wavy
          noodles, green onion, pork belly, wakame seaweed, molten egg, bamboo
          shoots, fried garlic and sesame seeds
        </p>
      </section>
      <img
        className="rounded-lg pb-4"
        src="/images/TonkotsuBowl.jpg"
        alt="ramen item"
      />
      <Subheading
        heading="Choose Your Meat"
        subheading="Choose 1"
        size="large"
        font="font-typewriter"
      />
      <CheckBox label="Beef Cha Shu" price={3} />
      <CheckBox label="Prime" price={5} />
      <CheckBox label="Wagyu Misuji" price={1.5} isPopular={true} />
      <Link to={"/payment-confirmation"}>
        <PrimaryButton text="Add to cart total_here" />
      </Link>
    </div>
  );
}

export default MenuItem;
