import React from 'react';
import s from "../App.module.css";
import ButtonC from "./ButtonC";
import InputC from "./InputC";
import Input2C from "./Input2C";
import img from "../images/menu.gif"
import imgSquare from "../images/square.gif"
import imgInverse from "../images/revers.gif"
import imgRoot from "../images/root.gif"

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
    return(<div className={s.grid} >
            <div className={s.item}>
                <div className={s.item2}></div>
                <ButtonC className={`${s.btnMENU} ${s.backgroun2}`} img={img} title={'Открыть навигацию'}/>
                <div className={s.divMODE}>Обычный</div>

                <ButtonC className={s.btnPM} name="+/-"/>
                <ButtonC className={s.btn0} name="0"/>
                <ButtonC className={s.btnZPT} name=","/>
                <ButtonC className={s.btnRAVNO} name="="/>

                <ButtonC className={s.btn1} name="1"/>
                <ButtonC className={s.btn2} name="2"/>
                <ButtonC className={s.btn3} name="3"/>
                <ButtonC className={`${s.btnPLUS} ${s.backgroun3}`} name="+"/>

                <ButtonC className={s.btn4} name="4"/>
                <ButtonC className={s.btn5} name="5"/>
                <ButtonC className={s.btn6} name="6"/>
                <ButtonC className={`${s.btnMINUS} ${s.backgroun3}`} name="-"/>

                <ButtonC className={s.btn7} name="7"/>
                <ButtonC className={s.btn8} name="8"/>
                <ButtonC className={s.btn9} name="9"/>
                <ButtonC className={`${s.btnX} ${s.backgroun3}`} name="x"/>

                <ButtonC className={`${s.btnONEX} ${s.backgroun3}`} img={imgInverse} id={'1/x'}/>
                <ButtonC className={`${s.btnKVADRAT} ${s.backgroun3}`} img={imgSquare} id={'x^2'}/>
                <ButtonC className={`${s.btnKOREN} ${s.backgroun3}`} img={imgRoot} id="root(x)"/>
                <ButtonC className={`${s.btnDELEN} ${s.backgroun3}`} name='/'/>

                <ButtonC className={`${s.btnPROC} ${s.backgroun3}`} name="%"/>
                <ButtonC className={`${s.btnCE} ${s.backgroun3}`} name="CE"/>
                <ButtonC className={`${s.btnC} ${s.backgroun3}`} name="C"/>
                <ButtonC className={`${s.btnBACK} ${s.backgroun3}`} name="&#10237;" id='backspace'/>

                <ButtonC className={`${s.btnMC} ${s.backgroun2}`} disabled name="MC"/>
                <ButtonC className={`${s.btnMR} ${s.backgroun2}`} disabled name="MR"/>
                <ButtonC className={`${s.btnMPLUS} ${s.backgroun2}`} name="M+" title={'Добавление памяти(CTRL+P)'}/>
                <ButtonC className={`${s.btnMMINUS} ${s.backgroun2}`} name="M-" title={'Вычитание памяти(CTRL+Q)'}/>
                <ButtonC className={`${s.btnM} ${s.backgroun2}`} disabled name="M"/>

                <InputC className={`${s.input} ${s.backgroun2} `}/>
                <Input2C className={`${s.inputUP} ${s.backgroun2}`}/>

                <div className={s.label}>Калькулятор</div>

                <ButtonC className={`${s.btnCLOSE} ${s.backgroun2}`} name="x"/>
                <ButtonC className={`${s.btnRollUp} ${s.backgroun2}`} name="-"/>
                <ButtonC className={`${s.btnSIDE} ${s.backgroun2}`} name="&#10720;"/>

                <ButtonC className={s.btnHIST} name="&#128337;" title={'Журнал (CTRL+H)'}/>

                <div className={s.item3}></div>
            </div>
        </div>)
}
}
export default Application;