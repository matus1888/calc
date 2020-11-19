import s from "./App.module.css";
import React from "react";
import ButtonC from "./components/ButtonC";
import InputC from "./components/InputC";
import Input2C from "./components/Input2C";

function App() {
  return (
      <div className={s.grid}>
          <div className={s.item}>
              <ButtonC className={s.btnPM} name="+/-" />
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

              <ButtonC className={`${s.btnONEX} ${s.backgroun3}`} name="1/x"/>
              <ButtonC className={`${s.btnKVADRAT} ${s.backgroun3}`} name="x^2"/>
              <ButtonC className={`${s.btnKOREN} ${s.backgroun3}`} name="&#8730;x"/>
              <ButtonC className={`${s.btnDELEN} ${s.backgroun3}`} name="&#247;"/>

              <ButtonC className={`${s.btnPROC} ${s.backgroun3}`} name="%"/>
              <ButtonC className={`${s.btnCE} ${s.backgroun3}`} name="CE"/>
              <ButtonC className={`${s.btnC} ${s.backgroun3}`} name="C"/>
              <ButtonC className={`${s.btnBACK} ${s.backgroun3}`} name="&#10237;"/>

              <ButtonC className={`${s.btnMC} ${s.backgroun2}`} disabled name="MC"/>
              <ButtonC className={`${s.btnMR} ${s.backgroun2}`} disabled name="MR"/>
              <ButtonC className={`${s.btnMPLUS} ${s.backgroun2}`} name="M+"/>
              <ButtonC className={`${s.btnMMINUS} ${s.backgroun2}`} name="M-"/>
              <ButtonC className={`${s.btnM} ${s.backgroun2}`} disabled name="M"/>

              <InputC className={`${s.input} ${s.backgroun2}`}/>
              <Input2C className={`${s.inputUP} ${s.backgroun2}`}/>

              <div className={s.label}>Калькулятор</div>

              <ButtonC className={s.btnCLOSE} name="x"/>
              <ButtonC className={s.btnRollUp} name="-"/>
              <ButtonC className={s.btnSIDE} name="&#10720;"/>

              <ButtonC className={s.btnHIST} name="&#128337;"/>

          </div>
      </div>
  );
}

export default App;
