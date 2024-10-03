// /Users/elizabethcastillo/Documents/Projects/ramen-house/ramen-house-frontend/public/images/HomePageImage.jpg
// ramen-house-frontend/public/images/HomePageImage.jpg
interface Props {
  imageUrl: string;
}

function Home({ imageUrl }: Props) {
  return (
    <div>
      <img className="w-full" src={imageUrl} alt="dashboard" />
      <button>TAP TO ORDER</button>
    </div>
  );
}

export default Home;
