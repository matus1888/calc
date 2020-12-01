import React from 'react';
import s from './SideMenu.module.css'
import imgCode from "../../images/code-black-36dp/2x/baseline_code_black_36dp.png"
import imgCalc from '../../images/calculate-black-36dp/2x/baseline_calculate_black_36dp.png'
import imgIng from '../../images/fingerprint-black-36dp/2x/baseline_fingerprint_black_36dp.png'
import imgMoney from '../../images/monetization_on-black-36dp/2x/baseline_monetization_on_black_36dp.png'
import imgWeb from '../../images/web_asset-black-36dp/2x/baseline_web_asset_black_36dp.png'
import imgLine from '../../images/vertical_distribute-black-36dp/2x/baseline_vertical_distribute_black_36dp.png'
import imgHist from '../../images/calculate-black-36dp/2x/baseline_calculate_black_36dp.png'


const SideMenu=()=>{
    return(<div className={s.cl}>
            <div className={s.header}>header</div>
            <div className={s.body}>
                <div className={s.d}>Калькулятор</div>
                <button className={s.b}><img className={s.img} alt='Калькулятор' src={imgCalc}></img>Обычный</button>
                <button className={s.b}><img className={s.img} alt='Инженерный' src={imgIng} />Инженерный</button>
                <button className={s.b}><img className={s.img} alt='Программист' src={imgCode} />Программист</button>
                <button className={s.b}><img className={s.img} alt='Вычисление даты' src={imgHist} />{'Вычисление Даты'}</button>
                <div className={s.d}>Преобразователь</div>
                <button className={s.b}><img className={s.img} alt='Валюта' src={imgMoney} />Валюта</button>
                <button className={s.b}><img className={s.img} alt='Объем' src={imgLine}></img>Объем</button>
                <button className={s.b}><img className={s.img} alt='Длина' src={imgWeb} />Длина</button>
                <button className={s.b}>Вес и масса</button>
                <button className={s.b}>Температура</button>
                <button className={s.b}>Энергия</button>
                <button className={s.b}>Площадь</button>
                <button className={s.b}>Скорость</button>
                <button className={s.b}>Время</button>
                <button className={s.b}>Мощность</button>
                <button className={s.b}>Данные</button>
                <button className={s.b}>Давление</button>
                <button className={s.b}>Угол</button>
            </div>
            <button className={s.footer}>О программе</button>
        </div>
    )
}

export default SideMenu;