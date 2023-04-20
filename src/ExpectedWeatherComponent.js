import { AppContext } from "./App";
import { useContext } from "react";

// forecast5Data.defaultData.forecast.forecastday[0].day.condition.icon
const ExpectedWeatherCard = (props) => {
  return (
    <div>
      <h2>{props.date}</h2>
      <img src={props.img} />
      <div>
        <p>{props.avgTempC}</p>
        <p>{props.avgTempF}</p>
      </div>
    </div>
  );
};
const ExpectedWeatherComponent = (props) => {
  const forecast5Data = useContext(AppContext);

  return (
    <div>
      {forecast5Data.defaultData.forecast.forecastday.map((s) => (
        <ExpectedWeatherCard
          img={s.day.condition.icon}
          date={s.date}
          avgTempC={s.day.avgtemp_c}
          avgTempF={s.day.avgtemp_f}
        />
      ))}
    </div>
  );
};
export default ExpectedWeatherComponent;
