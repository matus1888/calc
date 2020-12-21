import React from 'react';
import s from './XXLBlock.module.css';


const XXLBlock=(props)=>{
    let values=()=>{return props.historyValue.map(value =>
        <div key={(value.logValH + new Date().toLocaleString()).toString()}>
            <div className={s.logVal}>{value.logValH}</div>
            <div>{value.valH}</div>
        </div>)}
    return (<div className={s.XXLVBlock}>
        <div className={s.a} >
            <button className={s.side}>_</button>
            <button className={s.fullScreen}>&#10720;</button>
            <button className={s.close}>x</button>
        </div>
        <div className={s.b}>
            <span className={s.history} onClick={props.switchMenu}>Журнал</span>
            <span className={s.memory} onClick={props.switchMenu}>Память</span>
        </div>
        <div className={s.bb}>
            {props.histOrMem&&<div className={s.line}></div>}
            {!props.histOrMem&&<div className={s.line2}></div>}
        </div>
        <div className={s.c}>
            {props.histOrMem&&<div>{props.mCell}</div>}
            {!props.histOrMem&&<div>{props.historyValue[0]?values():'Журнала еще нет'}
            </div>}
        </div>
        <div className={s.d}>4</div>
            </div>)
}

export default XXLBlock;