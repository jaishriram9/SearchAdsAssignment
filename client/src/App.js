import { useEffect } from "react";
import SearchBox from "./Components/SearchBox";
import Add from "./Components/Add";
import { useSelector } from "react-redux";
import "./App.css";
function App() {
  const adsList = useSelector((state) => state.adsList);
  const { ads } = adsList;
  useEffect(() => {
    
  });
  return (
    <div className="App">
      <SearchBox></SearchBox>
      <div className="App__row">
        {ads && ads.map((add) => {
          return <Add key={add._id} add={add}></Add>;
        })}
      </div>
    </div>
  );
}

export default App;
