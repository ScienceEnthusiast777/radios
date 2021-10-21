import React from "react";
import axios from "axios";
import Radio from "./components/Radio"
import CSS from "csstype"

const appStyle:CSS.Properties = {
  height: "100vh",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
}

const App: React.FC<any> = (props) => {
  
  return <div style={appStyle}><Radio/></div>;
};

export default App;
