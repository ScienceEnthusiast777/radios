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
  upDateNowPlaying: (station: RadioStation) => void;
}

const StationClickable: React.FC<IStationClickable> = (props) => {
  const clickHandler = (station: RadioStation) => {
    props.upDateNowPlaying(station);
  };

  return (
    <div style={stationClickableStyle}>
      <div
        onClick={() => clickHandler(props.station)}
        style={clickableAreaStyle}
      >
        <div>{props.station.name}</div>
        <div>{props.station.frequency}</div>
      </div>
    </div>
  );
};

export default StationClickable;
