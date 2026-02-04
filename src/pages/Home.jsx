
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <BestSeller/>
    </div>
  );
};

export default Home;
