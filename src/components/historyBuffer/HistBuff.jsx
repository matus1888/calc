import React from 'react';
import s from './HistBuff.module.css'
const HistBuff=(props)=>{
    let values=props.historyValue.map(value =>
        <div key={(value.logValH+new Date().toLocaleString()).toString()}>
            <div className={s.logVal}>{value.logValH}</div>
            <div>{value.valH}</div>
        </div>)

    return (<div className={s.buffer}>
            {values}
        </div>
    )
}
export default HistBuff;