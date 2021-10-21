import React from "react"
import { RadioStation } from "../types/types"
import StationClickable from "./StationClickable"
import CSS from "csstype"

const stationDisplayStyle:CSS.Properties = {
    height:"70%",
    // width:"90%",
    backgroundColor:"rgb(58,58,77)",
    display:"flex",
    flexDirection:"column",
    // justifyContent:"space-between",
    alignItems:"center"
}

interface IStationDisplayProps {
    stations: Array<RadioStation>;
  }

const StationDisplay : React.FC<IStationDisplayProps> = (props)=>{
return (<div style={stationDisplayStyle}>{props.stations.map((e,i)=>{
    return (<StationClickable station={e} key={e.name + i}/>)
})}</div>)
}

export default StationDisplay