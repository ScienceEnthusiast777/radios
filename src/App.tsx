import React from "react";
import Radio from "./components/Radio";
import CSS from "csstype";
import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

// const appStyle: CSS.Properties = {
//   height: "100vh",
//   textAlign: "center",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   marginTop: "50px",
// };

const App: React.FC<any> = (props) => {
  return (
    <StyledApp >
      <Radio />
    </StyledApp>
  );
};

export default App;
