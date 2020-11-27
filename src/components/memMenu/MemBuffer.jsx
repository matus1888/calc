import React from 'react';
import s from './MemBuff.module.css'
const MemBuffer=(props)=>{
    return (<div className={s.buffer}>{props.mCell}</div>
    )
}
export default MemBuffer;