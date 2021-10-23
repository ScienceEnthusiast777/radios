import styled from "styled-components";

const ScrollingText = styled.p`
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

export default ScrollingText