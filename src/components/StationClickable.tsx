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

const highlightedImgStyle: CSS.Properties = {
  height: "80px",
  borderRadius: "50%",
  border:"solid white 1px"
};

const highlightedDisplayStyle : CSS.Properties = {
    paddingTop : "7px"
}

interface IStationClickable {
  station: RadioStation;
  upDateNowPlaying: (station: RadioStation) => void;
  nowPlaying: RadioStation | undefined
}

const StationClickable: React.FC<IStationClickable> = (props) => {
  const clickHandler = (station: RadioStation) => {
    props.upDateNowPlaying(station);
  };

  let highlightedDisplay = props.nowPlaying && props.station.name === props.nowPlaying.name ? (
    <div style={highlightedDisplayStyle}>
      <img
        style={highlightedImgStyle}
        src={props.station.image}
        alt={props.station.name}
      />
    </div>
  ) : (
    <></>
  );

  return (
    <div style={stationClickableStyle}>
      {highlightedDisplay}
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
