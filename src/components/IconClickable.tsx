import React from "react";
import { LookUp } from "../types/types";

interface IIconClickable {
  icon: "back" | "forward" | "power";
//   func: (args: any[]) => any;
}

const iconClickable: LookUp = {
  back: <i className="fas fa-chevron-left"></i>,
  forward: <i className="fas fa-chevron-right"></i>,
  power: <i className="fas fa-power-off"></i>,
};

const IconClickable: React.FC<IIconClickable> = (props) => {
  return <>{iconClickable[props.icon]}</>;
};

export default IconClickable;
