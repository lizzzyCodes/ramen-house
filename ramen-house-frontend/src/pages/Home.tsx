import { Link } from "react-router-dom"; // using Link because wont perform additional actions before clicking tap to order
interface Props {
  imageUrl: string;
}

function Home({ imageUrl }: Props) {
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt="dashboard"
        />
      </div>

      <Link to={"/menu" || "/"}>
        <button className="border-white border-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-burgundy text-white font-bold w-32 h-32 flex flex-col items-center justify-center rounded-full text-center md:w-48 md:h-48 lg:w-56 lg:h-56 md:fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <span className="text-md md:text-lg lg:text-xl">Tap To</span>
          <span className="text-md md:text-lg lg:text-xl">Order</span>
        </button>
      </Link>
    </div>
  );
}

export default Home;
