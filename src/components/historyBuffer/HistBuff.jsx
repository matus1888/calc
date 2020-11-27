import React from 'react';
import s from './HistBuff.module.css'
const HistBuff=(props)=>{
    return (<div className={s.buffer}>{props.historyValue}</div>
    )
}
export default HistBuff;