import s from "./App.module.css";

function App() {
  return (
      <div className={s.grid}  >
          <div className={s.item}>
              <button className={s.btnPM}>+/-</button>
              <button className={s.btn0}>0</button>
              <button className={s.btnZPT}>,</button>
              <button className={s.btnRAVNO}>=</button>

              <button className={s.btn1}>1</button>
              <button className={s.btn2}>2</button>
              <button className={s.btn3}>3</button>
              <button className={`${s.btnPLUS} ${s.backgroun3}`}>+</button>

              <button className={s.btn4}>4</button>
              <button className={s.btn5}>5</button>
              <button className={s.btn6}>6</button>
              <button className={`${s.btnMINUS} ${s.backgroun3}`}>-</button>

              <button className={s.btn7}>7</button>
              <button className={s.btn8}>8</button>
              <button className={s.btn9}>9</button>
              <button className={`${s.btnX} ${s.backgroun3}`}>x</button>

              <button className={`${s.btnONEX} ${s.backgroun3}`}>1/x</button>
              <button className={`${s.btnKVADRAT} ${s.backgroun3}`}>x^2</button>
              <button className={`${s.btnKOREN} ${s.backgroun3}`}>&#8730;x</button>
              <button className={`${s.btnDELEN} ${s.backgroun3}`}>&#247;</button>

              <button className={`${s.btnPROC} ${s.backgroun3}`}>%</button>
              <button className={`${s.btnCE} ${s.backgroun3}`}>CE</button>
              <button className={`${s.btnC} ${s.backgroun3}`}>C</button>
              <button className={`${s.btnBACK} ${s.backgroun3}`}>&#10237;</button>

              <button className={`${s.btnMC} ${s.backgroun2}`} disabled>MC</button>
              <button className={`${s.btnMR} ${s.backgroun2}`} disabled>MR</button>
              <button className={`${s.btnMPLUS} ${s.backgroun2}`} >M+</button>
              <button className={`${s.btnMMINUS} ${s.backgroun2}`}>M-</button>
              <button className={`${s.btnM} ${s.backgroun2}`}  disabled>M</button>

              <input className={`${s.input} ${s.backgroun2}`}></input>
              <input className={`${s.inputUP} ${s.backgroun2}`}></input>

              <div className={s.label}>Калькулятор</div>

              <button className={s.btnCLOSE}>x</button>
              <button className={s.btnRollUp}>-</button>
              <button className={s.btnSIDE}>&#10720;</button>

              <button className={s.btnHIST}>&#128337;</button>

          </div>
      </div>
  );
}

export default App;
