import React, { useState, useEffect } from "react";
import { RadioStation } from "../types/types";
import StationsDisplay from "./StationsDisplay";
import axios from "axios";
import CSS from "csstype";

interface IResponseData {
  radios: Array<RadioStation>;
}

const radioStyles: CSS.Properties = {
  color: "white",
  fontWeight: "lighter",
  backgroundColor: "rgb(42,42,63)",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "300px",
  height: "400px",
  boxShadow: "0px 5px 30px black",
  overflow: "hidden",
};

const headStyle: CSS.Properties = {
  backgroundColor: "rgb(258,178,102)",
  height: "15%",
};

const footStyle: CSS.Properties = {
  backgroundColor: "rgb(42,42,63)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "15%",
  borderTop: "solid grey 1px",
};

const nowPlayingTextStyle: CSS.Properties ={
    fontSize:"0.5em",
    color:"rgb(258,178,102)"
}

const Radio: React.FC = () => {
  useEffect(() => {
    axios
      .get<IResponseData>("https://teclead.de/recruiting/radios")
      .then((response) => {
        let radios = response.data.radios;
        for(let radio of radios){
            radio.image = `https://dummyimage.com/400x400/3d43ff/ffffff&text=${radio.name}`
        }
        setStations(radios);
      });
  });
  const [stations, setStations] = useState<Array<RadioStation>>();
  const [nowPlaying, setNowPlaying] = useState<RadioStation>();
  const upDateNowPlaying = (station: RadioStation) => {
    setNowPlaying(station);
  };
  let hasLoaded = stations ? (
    <StationsDisplay nowPlaying={nowPlaying} upDateNowPlaying={upDateNowPlaying} stations={stations} />
  ) : (
    <></>
  );
  let nowPlayingDisplay = nowPlaying ? (
    <>
      <div style={nowPlayingTextStyle}>CURRENTLY PLAYING</div>
      <div>{nowPlaying.name}</div>
    </>
  ) : (
    <div></div>
  );

  return (
    <div style={radioStyles}>
      <div style={headStyle}>
        <h3>Stations</h3>
      </div>
      {hasLoaded}
      <div style={footStyle}>{nowPlayingDisplay}</div>
    </div>
  );
};

export default Radio;
