import React from 'react';
import s from './SideMenu.module.css'

class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
   handleClick() {
        const wrapper=this.wrapperRef.current;
       if(this.props.isActive){
           wrapper.classList.add(s.clActive)
       }else if (wrapper&&!this.props.isActive){
           wrapper.classList.remove(s.clActive)
       }
    }
    componentDidMount() {
    }
    render() {
        this.handleClick()
        return(<div ref={this.wrapperRef} className={s.cl}>
                    <div className={s.header}></div>
                    <div className={s.body}>
                        <div className={s.d}>Калькулятор</div>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xE8EF; <span className={s.fontSeguiSym}>Обычный</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xF196; <span className={s.fontSeguiSym}>Инженерный</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xECCE; <span className={s.fontSeguiSym}>Программист</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xE787; <span className={s.fontSeguiSym}>Вычисление Даты</span></button>
                        <div className={s.d}>Преобразователь</div>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xEB0D;  <span className={s.fontSeguiSym}>Валюта</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xF1AA;  <span className={s.fontSeguiSym}>Объем</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xECC6;  <span className={s.fontSeguiSym}>Длина</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xF4C1;  <span className={s.fontSeguiSym}>Вес и масса</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xE7A3;  <span className={s.fontSeguiSym}>Температура</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xECAD;  <span className={s.fontSeguiSym}>Энергия</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xE809;  <span className={s.fontSeguiSym}>Площадь</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xEADA;  <span className={s.fontSeguiSym}>Скорость</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xE917;  <span className={s.fontSeguiSym}>Время</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xE945;  <span className={s.fontSeguiSym}>Мощность</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xF20F;  <span className={s.fontSeguiSym}>Данные</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xEC4A;  <span className={s.fontSeguiSym}>Давление</span></button>
                        <button className={`${s.b} ${s.fontWinCalc}`}>&#xF515;  <span className={s.fontSeguiSym}>Угол</span></button>
                    </div>
                    <button className={`${s.footer} ${s.fontWinCalc}`}>&#xE946;  <span className={s.fontSeguiSym}>  О программе</span></button>
                 </div>
        )
    }
    }
export default SideMenu;