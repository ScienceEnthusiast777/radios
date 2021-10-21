import React from "react"
import { RadioStation } from "../types/types"
import CSS from "csstype"

interface IStationDisplayProps {
    stations: Array<RadioStation>;
  }

const StationDisplay : React.FC<IStationDisplayProps> = (props)=>{
return (<>{props.stations.map((e,i)=>{
    return (<p key={e.name + i}>{e.name}</p>)
})}</>)
}

export default StationDisplay