import Auth from "./Components/Auth";
import CharacterCount from "./Components/CharacterCount";
import Counter from "./Components/Counter";
import Fetch from "./Components/Fetch";
import Form from "./Components/Form";
import Memo from "./Components/Memo";
import Mode from "./Components/Mode";
import Pagination from "./Components/Pagination";
import ProductListing from "./Components/ProductListing";
import ProfileCard from "./Components/ProfileCard";
import Todo from "./Components/Todo";
import Todonew from "./Components/Todonew";

const App = () => {
  return (
    <div>
      <ProfileCard name={"Nirdesh"} role={"Admin"} />
      <Counter />
      <Mode />
      <CharacterCount />
      <Fetch />
      <Auth />
      <Todo />
      <Form />
      <Todonew />
      <Memo />
      <ProductListing />
      <Pagination />
    </div>
  );
};

export default App;
