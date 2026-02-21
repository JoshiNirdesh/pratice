import Counter from "./Components/Counter";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard  name={"Nirdesh"} role={"Admin"}/>
      <Counter/>  
    </div>
  );
};

export default App;
