import React from "react";
import ss from './MemMenu.module.css';
import BntMMC from "./BntMMC";
import s from '../../App.module.css'

const MemMenu=(props)=>{
let bgMM=()=>{
    if(props.bg){
        return s.backgroun2
    }else{
        return s.backgroun4
    }
}
    return (<div className={`${props.className} ${ss.div} ${bgMM()}`}>
                <BntMMC className={`${ss.b} ${bgMM()}`}  name="MC" disUp={props.dis} dis/>
                <BntMMC className={`${ss.b} ${bgMM()}`}  name="MR" disUp={props.dis} dis/>
                <BntMMC className={`${ss.b} ${bgMM()}`}  name="M+" disUp={props.dis} title={'Добавление памяти(CTRL+P)'}/>
                <BntMMC className={`${ss.b} ${bgMM()}`}  name="M-" disUp={props.dis} title={'Вычитание памяти(CTRL+Q)'}/>
                <BntMMC className={`${ss.b} ${bgMM()}`}  name="MS" disUp={props.dis} title={'Сохранение в памяти(CTRL+M)'}/>
                <BntMMC className={`${ss.b} ${bgMM()}`}  name="M^"  dis/>
            </div>)
}

export default MemMenu