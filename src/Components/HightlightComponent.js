import { AppContext } from "../App";
import { useContext } from "react";

const HightlightCard = (props) => {
    return (
        <div className="hightlightDiv-card">
            <p className="hightlightDiv-card-text">{props.text}</p>
            <h1 className="hightlightDiv-card-number">{props.number}{props.sufix}</h1>
        </div>
    );
};

const HightlightComponent = (props) => {
  const dataForHightlight = useContext(AppContext);
  return (
  <div className="hightlightsDiv">
    <HightlightCard text="Wind status" number={dataForHightlight.defaultData.current.wind_mph} sufix=" mph"/>
    <HightlightCard text="Humidity" number={dataForHightlight.defaultData.current.humidity} sufix="%"/>
    <HightlightCard text="Visibility" number={dataForHightlight.defaultData.current.vis_miles} sufix=" miles"/>
    <HightlightCard text="Air Pressure" number={dataForHightlight.defaultData.current.pressure_mb} sufix=" mb"/>
  </div>
  )
};
export default HightlightComponent;
