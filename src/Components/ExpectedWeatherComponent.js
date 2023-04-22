import { AppContext } from "../App";
import { useContext } from "react";

// forecast5Data.defaultData.forecast.forecastday[0].day.condition.icon
const ExpectedWeatherCard = (props) => {
  return (
    <div className="weatherForecastCard">
      <h2 className="weatherForecasCard-date">{props.date}</h2>
      <img className="weatherForecasCard-img" src={props.img} />
      <div className="weatherForecastCard-tempContainer">
        <p className="weatherForecasCard-tempC">{props.avgTempC}&deg;C</p>
        <p className="weatherForecasCard-tempF">{props.avgTempF}&deg;F</p>
      </div>
    </div>
  );
};
const ExpectedWeatherComponent = (props) => {
  const forecast5Data = useContext(AppContext);

  return (
    <div className="weatherCardsDiv">
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
