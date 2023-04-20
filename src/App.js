import "./App.css";
import axios from "axios";
import { useState, createContext, useEffect } from "react";

import DefaultSearchComponents from "./DefaultSearchComponents";
import SearchComponent from "./SearchComponent";
import ExpectedWeatherComponent from "./ExpectedWeatherComponent";
import HightlightComponent from "./HightlightComponent";

export const AppContext = createContext();

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState("tbilisi");
  const [defaultData, setDefaultData] = useState({
    current: {
      condition: {},
    },
    forecast: {
      forecastday: [
        {
          day: {
            condition: {
              icon: {},
            },
          },
        },
      ],
    },
  });

  const URL = `http://api.weatherapi.com/v1/forecast.json?key=cd69bc61249f49c0b96190446231804&q=${input}&days=6&aqi=no&alerts=no`;
  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setDefaultData(res.data);
    });
  }, []);

  const getData = () => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setDefaultData(res.data);
    });
  };
  const obj = {
    getData,
    setInput,
    defaultData,
    setIsClicked,
    isClicked,
  };

  return (
    <div className="App">
      <AppContext.Provider value={obj}>
        <DefaultSearchComponents />
        <SearchComponent />
        <ExpectedWeatherComponent />
      </AppContext.Provider>
    </div>
  );
}

export default App;
