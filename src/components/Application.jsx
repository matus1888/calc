import React from 'react';
import s from "../App.module.css";
import ButtonC from "./ButtonC";
import InputC from "./InputC";
import Input2C from "./Input2C";
import img from "../images/menu.gif"
import imgHist from '../images/history-black-36dp/2x/baseline_history_black_36dp.png'
import SideMenu from "./sideMenu/SideMenu";
import MemBuffC from "./memMenu/MemBuffC";
import HistBuffC from "./historyBuffer/HistBuffC";
import CurtainContainer from "./CurtainContainer";
import CurtainAllContainer from "./CurtainAllContainer";
import MemMenuConatienr from "./memMenu/MemMenuConatienr";
import XXLBlockContainer from "./XXBlock/XXLBlockContainer";

class Application extends React.Component {
    constructor(props) {
        super(props);
        // Эта привязка обязательна для работы `this` в колбэке.
        this.keyFunction = this.keyFunction.bind(this);

    }
    keyFunction(event){
        //todo all calc buttons on real keyboard keys
        let condition=(numpad, digit=true)=>{return ((event.keyCode===numpad)||(event.keyCode===digit))}
        if(condition(97,49)) {this.props.pressKey('1')
        }else if(condition(98,50)){this.props.pressKey('2')
        }else if(condition(99,51)){this.props.pressKey('3')
        }else if(condition(100,52)){this.props.pressKey('4')
        }else if(condition(101,53)){this.props.pressKey('5')
        }else if(condition(102,54)){this.props.pressKey('6')
        }else if(condition(103,55)){this.props.pressKey('7')
        }else if(condition(104,56)){this.props.pressKey('8')
        }else if(condition(105,57)){this.props.pressKey('9')
        }else if(condition(96,48)){this.props.pressKey('0')
        }else if(condition(111)){this.props.pressKeySHARE()
        }else if(condition(106)){this.props.pressKeyMULT()
        }else if(condition(189,109)){this.props.pressKeyMINUS()
        }else if(condition(107)){this.props.pressKeyPLUS()
        }else if(condition(187,13)){this.props.pressKeyEQUALS()
        }else if(condition(8)){this.props.pressKeyBACKSPACE()
        }else if(condition(110)){this.props.pressKeyCOMMA()
        }else if(condition(46)){this.props.pressKeyC()
        }
    }
    componentDidMount() {
        document.title="Калькулятор";
        document.addEventListener("keydown", this.keyFunction, false);
        // console.log(this.props)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyFunction, false);
    }

    render(){
        let bg=()=>{
            if(this.props.isActiveMemMenu||this.props.isActiveHistoryMenu){
                return s.backgroun4
            }else {
                return s.backgroun2
            }
        }
    return(<div className={s.grid} >
           <SideMenu isActive={this.props.isActive} />
            <div className={s.item2}> </div>
            <div className={`${s.item} ${bg()}`}>
                   <ButtonC className={`${s.btnMENU} ${bg()}`}  img={img} title={'Открыть навигацию'} id='menu'/>
                   <div className={s.divMODE}>Обычный</div>

                   <MemBuffC  isActive={this.props.isActiveMemMenu}/>
                   <HistBuffC isActive={this.props.isActiveHistoryMenu}/>
                   <CurtainContainer className={s.curtain} isActive={this.props.isActiveMemMenu||this.props.isActiveHistoryMenu} />
                   <CurtainAllContainer />
                   <ButtonC className={`${s.btnPM} ${s.fontWinCalc}`} name="&#xF898;" id="+/-"/>
                   <ButtonC className={s.btn0} name="0"/>
                   <ButtonC className={s.btnZPT} name=","/>
                   <ButtonC className={`${s.btnRAVNO} ${s.fontWinCalc}`} id="=" name="&#xE94E;"/>

                   <ButtonC className={s.btn1} name="1"/>
                   <ButtonC className={s.btn2} name="2"/>
                   <ButtonC className={s.btn3} name="3"/>
                   <ButtonC className={`${s.btnPLUS} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xE948;" id='+'/>

                   <ButtonC className={s.btn4} name="4"/>
                   <ButtonC className={s.btn5} name="5"/>
                   <ButtonC className={s.btn6} name="6"/>
                   <ButtonC className={`${s.btnMINUS} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xE949;" id='-'/>

                   <ButtonC className={s.btn7} name="7"/>
                   <ButtonC className={s.btn8} name="8"/>
                   <ButtonC className={s.btn9} name="9"/>
                   <ButtonC className={`${s.btnX} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xe947;" id='x'/>

                   <ButtonC className={`${s.btnONEX} ${s.backgroun3} ${s.fontWinCalc} `}  name="&#xF7C9;" id={'1/x'}/>
                   <ButtonC className={`${s.btnKVADRAT} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xF7C8;" id={'x^2'}/>
                   <ButtonC className={`${s.btnKOREN} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xF899;" id="root(x)"/>
                   <ButtonC className={`${s.btnDELEN} ${s.backgroun3} ${s.fontWinCalc}`} id="/" name="&#xE94A;"/>

                   <ButtonC className={`${s.btnPROC} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xE94C;" id='/' />
                   <ButtonC className={`${s.btnCE} ${s.backgroun3} ${s.fontSegoeUI}`} name='CE' />
                   <ButtonC className={`${s.btnC} ${s.backgroun3}`} name="C"/>
                   <ButtonC className={`${s.btnBACK} ${s.backgroun3} ${s.fontWinCalc}`} name="&#xE94F;" id='backspace'/>

                   <MemMenuConatienr className={s.memMenu} dis={this.props.isActiveMemMenu||this.props.isActiveHistoryMenu} bg={bg()===s.backgroun2?true:false} init={{size:"XXL"}} />

                   <InputC className={`${s.input} ${bg()} `}/>
                   <Input2C className={`${s.inputUP} ${bg()}`}/>

                   <div className={s.label}>Калькулятор</div>
                {this.props.sizeOfMyCalc==="XL"&&<ButtonC className={`${s.btnCLOSE} ${bg()} ${s.fontSeguiSym}`} name="&#x2715;"/>}
                {this.props.sizeOfMyCalc==="XL"&&<ButtonC className={`${s.btnRollUp} ${bg()} ${s.fontSeguiSym}`} name="&#x2013;"/>}
                {this.props.sizeOfMyCalc==="XL"&&<ButtonC className={`${s.btnSIDE} ${bg()} ${s.fontSeguiSym}`} name="&#x20E3;"/>}

                {this.props.sizeOfMyCalc==="XL"&&<ButtonC className={`${s.btnHIST} ${bg()} ${s.fontWinCalc}`} name="&#xE81C;" title={'Журнал (CTRL+H)'} id={'Hist'}/>}
                {this.props.sizeOfMyCalc==="XXL"&&<XXLBlockContainer />}
                <div className={s.item3}></div>
            </div>
        </div>)
}
}
export default Application;