import React from "react";
import s from './MemMenu.module.css';
import BntMMC from "./BntMMC";

const MemMenu=(props)=>{
    return (<div className={`${props.className} ${s.div}`}>
                <BntMMC className={s.b}  name="MC" dis/>
                <BntMMC className={s.b}  name="MR" dis/>
                <BntMMC className={s.b}  name="M+" title={'Добавление памяти(CTRL+P)'}/>
                <BntMMC className={s.b}  name="M-" title={'Вычитание памяти(CTRL+Q)'}/>
                <BntMMC className={s.b}  name="MS" title={'Сохранение в памяти(CTRL+M)'}/>
                <BntMMC className={s.b}  name="M^" dis/>
            </div>)
}

export default MemMenu