import React, { useState, useEffect } from "react";
import { RadioStation, LookUp } from "../types/types";
import StationsDisplay from "./StationsDisplay";
import IconClickable from "./IconClickable";
import axios from "axios";
import useScript from "../hooks/useScript";
import styled from "styled-components";

interface IResponseData {
  radios: Array<RadioStation>;
}

const StyledRadio = styled.div`
  color: white;
  font-weight: lighter;
  background-color: rgb(42, 42, 63);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  box-shadow: 0px 5px 30px black;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(258, 178, 102);
  height: 15%;
`;

const Foot = styled.div`
  background-color: rgb(42, 42, 63);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15%;
  border-top: "solid grey 1px";
`;

const NowPlaying = styled.div`
  font-size: 0.6em;
  color: rgb(258, 178, 102);
`;

const ScrollingText = styled.p`
  font-size: 0.5em;
  color: rgb(258, 178, 102);

-moz-transform: translateX(100%);
-webkit-transform: translateX(100%);
transform: translateX(100%);

-moz-animation: my-animation 15s linear infinite;
-webkit-animation: my-animation 15s linear infinite;
animation: my-animation 15s linear infinite;
}

@-moz-keyframes my-animation {
from { -moz-transform: translateX(100%); }
to { -moz-transform: translateX(-100%); }
}

@-webkit-keyframes my-animation {
from { -webkit-transform: translateX(100%); }
to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation {
from {
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
to {
  -moz-transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
`;

const dummySongs: LookUp = {
  "Radio 1": "Wonderwall - Oasis",
  "Radio 2": "Blue Flowers - Kool Keith",
  "Radio 3": "O mio babbino caro - Puccini",
  "Radio 4": "Magic and Music - Max Roach",
};

const dummyColors: LookUp = {
  "Radio 1": "91bd0f",
  "Radio 2": "0f6fbd",
  "Radio 3": "bd0f32",
  "Radio 4": "ff491c",
};

const Radio: React.FC = () => {
  useScript("https://kit.fontawesome.com/ddeb8cf297.js");
  useEffect(() => {
    axios
      .get<IResponseData>("https://teclead.de/recruiting/radios")
      .then((response) => {
        let radios = response.data.radios;
        for (let radio of radios) {
          radio.image = `https://dummyimage.com/400x400/${
            dummyColors[radio.name]
          }/ffffff&text=${radio.name}`;
        }
        setStations(radios);
      });
  }, []);
  const [stations, setStations] = useState<Array<RadioStation>>();
  const [stationHistory, setStationHistory] = useState<Array<RadioStation>>();
  const [nowPlaying, setNowPlaying] = useState<RadioStation>();
  const upDateNowPlaying = (station: RadioStation, incOrDec?: -1 | 1) => {
    let newStation = station;
    let shouldUpdateHistory = true;
    if (incOrDec) {
      if (stations![stations!.indexOf(newStation) + incOrDec]) {
        newStation = stations![stations!.indexOf(newStation) + incOrDec];
      } else {
        shouldUpdateHistory = false;
      }
    }
    shouldUpdateHistory && updateHistory(newStation);
    setNowPlaying(newStation);
  };

  const updateHistory = (station: RadioStation) => {
    if (stationHistory) {
      let currentHistory = stationHistory;
      currentHistory.push(station);
      if (currentHistory.length > 10) {
        currentHistory.shift();
      }
      setStationHistory(currentHistory);
    } else {
      setStationHistory([station]);
    }
  };
  const goBack = () => {
    if (stationHistory) {
      let currentHistory = stationHistory;
      currentHistory.pop();
      setStationHistory(currentHistory);
      if (currentHistory[currentHistory.length - 1]) {
        setNowPlaying(currentHistory[currentHistory.length - 1]);
      }
    }
  };
  const turnOff = () => {
    setNowPlaying(undefined);
  };

  let hasLoaded = stations ? (
    <StationsDisplay
      nowPlaying={nowPlaying}
      upDateNowPlaying={upDateNowPlaying}
      stations={stations}
    />
  ) : (
    <></>
  );
  let nowPlayingDisplay = nowPlaying ? (
    <>
      <NowPlaying>CURRENTLY PLAYING</NowPlaying>
      <div>{nowPlaying.name}</div>
      <ScrollingText>{dummySongs[nowPlaying.name]}</ScrollingText>
    </>
  ) : (
    <></>
  );

  return (
    <StyledRadio>
      <Head>
        <IconClickable func={goBack} icon="backChevron" />
        <h3>Stations</h3>
        <IconClickable func={turnOff} icon="power" />
      </Head>
      {hasLoaded}
      <Foot>{nowPlayingDisplay}</Foot>
    </StyledRadio>
  );
};

export default Radio;
