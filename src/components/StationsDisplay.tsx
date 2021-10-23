import React from "react";
import { RadioStation } from "../types/types";
import StationClickable from "./StationClickable";
import styled from "styled-components";

const StyledStationDisplay = styled.div`
  height: 70%;
  background-color: rgb(58, 58, 77);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none; 
  }
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  overflow-y: scroll;
  overflow-x: hidden;
`;

interface IStationDisplayProps {
  stations: Array<RadioStation>;
  nowPlaying: RadioStation | undefined;
  upDateNowPlaying: (station: RadioStation) => void;
}

const StationDisplay: React.FC<IStationDisplayProps> = (props) => {
  return (
    <StyledStationDisplay>
      {props.stations.map((e, i) => {
        return (
          <StationClickable
            nowPlaying={props.nowPlaying}
            upDateNowPlaying={props.upDateNowPlaying}
            station={e}
            key={e.name + i}
          />
        );
      })}
    </StyledStationDisplay>
  );
};

export default StationDisplay;
