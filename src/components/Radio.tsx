import React, { useState, useEffect } from "react";
import { RadioStation } from "../types/types";
import StationsDisplay from "./StationsDisplay";
import axios from "axios";
import CSS from "csstype";

interface IResponseData {
  radios: Array<RadioStation>;
}

const radioStyles: CSS.Properties = {
    color:"white",
    fontWeight:"lighter",
    backgroundColor:"rgb(42,42,63)",
    borderRadius:"15px"
};

const Radio: React.FC = () => {
  useEffect(() => {
    axios
      .get<IResponseData>("https://teclead.de/recruiting/radios")
      .then((response) => {
        let radios = response.data.radios;
        setStations(radios);
      });
  });
  const [stations, setStations] = useState<Array<RadioStation>>();
  let hasLoaded = stations ? <StationsDisplay stations={stations} /> : <></>;

  return <div style={radioStyles}>
      <div><h3>Stations</h3></div>
      {hasLoaded}
      </div>;
};

export default Radio;
