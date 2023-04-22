import { AppContext } from "../App";
import { useContext } from "react";
import backgroundImg from "../Images/Cloud-background.png";

const SearchComponents = () => {
  const value = useContext(AppContext);
  if (value.isClicked === false) {
    return (
      <div className="currentWeatherDiv">
        <button 
        className="currentWeatherDiv-btn"
        onClick={() => value.setIsClicked(true)}>
          Search for places
        </button>
        <div className="currentWeatherInfo">
        <img className="currentWeaterDiv-backgroundImg" src={backgroundImg}/>
        <img 
        className="currentWeatherDiv-img"
        src={value.defaultData.current.condition.icon} />
        <h1 className="currentWeatherDiv-temp">{value.defaultData.current.temp_c}&deg;C</h1>
        <h1 className="currentWeatherDiv-text">{value.defaultData.current.condition.text}</h1>
        <p className="currentWeatherDiv-day">Today</p>
        </div>
      </div>
    );
  } else return null;
};

export default SearchComponents;
