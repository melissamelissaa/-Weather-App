import { AppContext } from "./App";
import { useContext } from "react";

const DefaultSearchComponents = () => {
  const value = useContext(AppContext);
  if (value.isClicked === false) {
    return (
      <div>
        <button onClick={() => value.setIsClicked(true)}>
          Search for places
        </button>
        <img src={value.defaultData.current.condition.icon} />
        <h1>{value.defaultData.current.temp_c}c</h1>
        <h1>{value.defaultData.current.condition.text}</h1>
        <p>Today</p>
      </div>
    );
  } else return null;
};

export default DefaultSearchComponents;
