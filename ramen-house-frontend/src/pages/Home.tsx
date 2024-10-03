// /Users/elizabethcastillo/Documents/Projects/ramen-house/ramen-house-frontend/public/images/HomePageImage.jpg
// ramen-house-frontend/public/images/HomePageImage.jpg
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
      <button className="absolute bottom-4 left-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Tap To Order
      </button>
    </div>
  );
}

export default Home;
