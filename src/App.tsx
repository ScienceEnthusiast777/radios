import React from "react";
import Radio from "./components/Radio";

import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const App: React.FC<any> = (props) => {
  return (
    <StyledApp >
      <Radio />
    </StyledApp>
  );
};

export default App;
