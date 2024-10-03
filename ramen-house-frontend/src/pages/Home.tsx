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
        <button className="absolute bottom-4 left-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Tap To Order
        </button>
      </Link>
    </div>
  );
}

export default Home;
