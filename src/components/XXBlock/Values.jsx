import s from "./XXLBlock.module.css";
import React from "react";

const Values=(props)=>{
    let x=props.historyValue.map(value =>
        <div key={(value.logValH + new Date().toLocaleString()).toString()}>
            <div className={s.logVal}>{value.logValH}</div>
            <div>{value.valH}</div>
        </div>)
    return(<div>{x}</div>
    )
}
export default Values