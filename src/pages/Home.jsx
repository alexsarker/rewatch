import Banner from "../components/Banner";
import Category from "../components/Category";
import PopularItems from "../components/PopularItems";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="my-12">
        <Category />
        <PopularItems />
      </div>
    </div>
  );
};

export default Home;
