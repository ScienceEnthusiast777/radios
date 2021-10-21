import React from "react";
import { RadioStation } from "../types/types";
import CSS from "csstype";

const stationClickableStyle: CSS.Properties = {
  width: "90%",
  borderBottom: "solid 1px grey",
};

const clickableAreaStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "15px",
  paddingBottom: "15px",
};

interface IStationClickable {
  station: RadioStation;
  // clickAction : (args:any[])=>void
}

const StationClickable: React.FC<IStationClickable> = (props) => {
  const clickHandler = (name:string) => {console.log(name)};

  return (
    <div style={stationClickableStyle}>
      <div onClick={()=>clickHandler(props.station.name)} style={clickableAreaStyle}>
        <div>{props.station.name}</div>
        <div>{props.station.frequency}</div>
      </div>
    </div>
  );
};

export default StationClickable;
