import React from "react";
import { RadioStation } from "../types/types";
import StationClickable from "./StationClickable";
import CSS from "csstype";

const stationDisplayStyle: CSS.Properties = {
  height: "70%",
  backgroundColor: "rgb(58,58,77)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowX: "hidden",
  msOverflowY: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

interface IStationDisplayProps {
  stations: Array<RadioStation>;
  nowPlaying: RadioStation | undefined;
  upDateNowPlaying: (station: RadioStation) => void;
}

const StationDisplay: React.FC<IStationDisplayProps> = (props) => {
  return (
    <div style={stationDisplayStyle}>
      {props.stations.map((e, i) => {
        return (
          <StationClickable
            nowPlaying = {props.nowPlaying}
            upDateNowPlaying={props.upDateNowPlaying}
            station={e}
            key={e.name + i}
          />
        );
      })}
    </div>
  );
};

export default StationDisplay;
