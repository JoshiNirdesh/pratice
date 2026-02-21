import Auth from "./Components/Auth";
import CharacterCount from "./Components/CharacterCount";
import Counter from "./Components/Counter";
import Fetch from "./Components/Fetch";
import Mode from "./Components/Mode";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard name={"Nirdesh"} role={"Admin"} />
      <Counter />
      <Mode />
      <CharacterCount />
      <Fetch />
      <Auth />
    </div>
  );
};

export default App;
