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
  boxShadow: "0px 5px 10px black",
  overflow: "hidden",
};

const headStyle: CSS.Properties = {
  backgroundColor: "rgb(258,178,102)",
  height:"15%"
};

const footStyle: CSS.Properties = {
    height:"15%",
    borderTop:"solid grey 1px"
}

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

  return (
    <div style={radioStyles}>
      <div style={headStyle}>
        <h3>Stations</h3>
      </div>
      {hasLoaded}
      <div style={footStyle}>

      </div>
    </div>
  );
};

export default Radio;
