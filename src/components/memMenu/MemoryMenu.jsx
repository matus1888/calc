import React, {useEffect, useState} from "react";
import ss from './MemoryMenu.module.css';
import BntMMC from "./ButtonMemoryMenuContainer";
import s from '../../App.module.css'

const MemoryMenu = (props) => {
    let initialSize = window.innerWidth >= 916 ? "XXL" : "XL";

    let initialState = {size: initialSize};
    const [state, setState] = useState(initialState)

    useEffect(() => {
        function func() {
            if (window.innerWidth >= 916) {
                setState({...state, size: "XXL"})
                // console.log(state.size)
            } else {
                setState({...state, size: "XL"})
                // console.log(state.size)
            }


        }

        window.addEventListener('resize', func);
        props.resizeMyCalc();
        // Указываем, как сбросить этот эффект:
        return function () {
            window.removeEventListener('resize', func)
        };
    });
    let bgMM = () => {
        if (props.bg) {
            return s.backgroun2
        } else {
            return s.backgroun4
        }
    }
    return (<div className={`${props.className} ${ss.div} ${bgMM()}`}>
        <BntMMC className={`${ss.b} ${bgMM()}`} name="MC" disUp={props.dis} dis/>
        <BntMMC className={`${ss.b} ${bgMM()}`} name="MR" disUp={props.dis} dis/>
        <BntMMC className={`${ss.b} ${bgMM()}`} name="M+" disUp={props.dis}
                title={'Добавление памяти(CTRL+P)'}/>
        <BntMMC className={`${ss.b} ${bgMM()}`} name="M-" disUp={props.dis}
                title={'Вычитание памяти(CTRL+Q)'}/>
        <BntMMC className={`${ss.b} ${bgMM()}`} name="MS" disUp={props.dis}
                title={'Сохранение в памяти(CTRL+M)'}/>
        {state.size === "XL" && <BntMMC className={`${ss.b} ${bgMM()}`} name="M^" dis/>}
    </div>)
}

export default MemoryMenu