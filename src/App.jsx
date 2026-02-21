import Counter from "./Components/Counter";
import Mode from "./Components/Mode";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard name={"Nirdesh"} role={"Admin"} />
      <Counter />
      <Mode />
    </div>
  );
};

export default App;
