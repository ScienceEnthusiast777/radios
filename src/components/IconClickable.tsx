import React from "react";
import { LookUp } from "../types/types";

interface IIconClickable {
  icon: "back" | "forward" | "power" | "backChevron";
  func: (args?: any[]) => any;
}

const iconClickable: LookUp = {
  back: <i className="fas fa-arrow-circle-left"></i>,
  forward: <i className="fas fa-arrow-circle-right"></i>,
  power: <i className="fas fa-power-off"></i>,
  backChevron: <i className="fas fa-chevron-left"></i>,
};

const IconClickable: React.FC<IIconClickable> = (props) => {
  const clickHandler = ()=>{
    props.func()
  }
  return <div onClick={() => clickHandler()}>{iconClickable[props.icon]}</div>;
};

export default IconClickable;
