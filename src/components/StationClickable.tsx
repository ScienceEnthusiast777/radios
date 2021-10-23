import React from "react";
import { RadioStation } from "../types/types";
import IconClickable from "./IconClickable";
import styled from "styled-components";

const StyledStationClickable = styled.div`
  width: 90%;
  border-bottom: solid 1px grey;
`;

const ClickableArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const HighlightedImage = styled.img`
  height: 80px;
  border-radius: 50%;
  border: solid white 1px;
`;

const HighlightedDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 7px;
`;

interface IStationClickable {
  station: RadioStation;
  upDateNowPlaying: (station: RadioStation, incOrDec?: -1 | 1) => void;
  nowPlaying: RadioStation | undefined;
}

const StationClickable: React.FC<IStationClickable> = (props) => {
  const clickHandler = (station: RadioStation) => {
    props.upDateNowPlaying(station);
  };

  let highlightedDisplay =
    props.nowPlaying && props.station.name === props.nowPlaying.name ? (
      <HighlightedDisplay>
        <IconClickable
          func={() => props.upDateNowPlaying(props.station, -1)}
          icon="back"
        />
        <HighlightedImage src={props.station.image} alt={props.station.name} />
        <IconClickable
          func={() => props.upDateNowPlaying(props.station, 1)}
          icon="forward"
        />
      </HighlightedDisplay>
    ) : (
      <></>
    );

  return (
    <StyledStationClickable>
      {highlightedDisplay}
      <ClickableArea onClick={() => clickHandler(props.station)}>
        <div>{props.station.name}</div>
        <div>{props.station.frequency}</div>
      </ClickableArea>
    </StyledStationClickable>
  );
};

export default StationClickable;
