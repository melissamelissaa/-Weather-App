import { AppContext } from "./App";
import { useContext } from "react";

const SearchComponent = () => {
  const value = useContext(AppContext);
  
  if(value.isClicked === true) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search location"
        onChange={(e) => value.setInput(e.target.value)}
      ></input>
      <button onClick={value.getData}>Search</button>
      <p onClick={() => value.setIsClicked(false)}>x</p>
    </div>
  )}
  else return null;
};

export default SearchComponent;
