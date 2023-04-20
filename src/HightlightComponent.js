import { AppContext } from "./App";
import { useContext } from "react";

const HightlightCard = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <h1>{props.number}{props.sufix}</h1>
        </div>
    );
};

const HightlightComponent = (props) => {
  const dataForHightlight = useContext(AppContext);
  console.log(dataForHightlight.defaultData);
  return (
  <div>
    <HightlightCard text="Wind status" number={dataForHightlight.defaultData.current.wind_mph} sufix=" mph"/>
    <HightlightCard text="Humidity" number={dataForHightlight.defaultData.current.humidity} sufix="%"/>
    <HightlightCard text="Visibility" number={dataForHightlight.defaultData.current.vis_miles} sufix=" miles"/>
    <HightlightCard text="Air Pressure" number={dataForHightlight.defaultData.current.pressure_mb} sufix=" mb"/>
  </div>
  )
};
export default HightlightComponent;
