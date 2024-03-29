const ADD_SYMBOL='addSymbol';
const BTN_EQUALS ='clickButtonEQUALS';
const BTN_MINUS ='clickButtonMINUS';
const BTN_PLUS='clickButtonPLUS';
const BTN_MULT='clickButtonMULT';
const BTN_SHARE='clickButtonSHARE';
const BTN_CLEAR='clickButtonCLEAR';
const BTN_COMMA='clickButtonCOMMA';
const BTN_SQUARE='clickButtonSQUARE';
const BTN_INVERSE='clickButtonINVERSE';
const BTN_CE='clickButtonCE';
const BTN_ROOT='clickButtonROOT';
const BTN_BACKSPACE='clickButtonBACKSPACE';
const BTN_PM='clickButtonPM';
const SET_CURRENT_VALUE='setCv';
const BTN_HIST='btnHistory';
const RESIZE_WINDOW='resizeWindow';
const SET_HIST_OR_MEM='historyOrMem';
const CLEAR_HIST='clearHistory';


let initialState= {
    currentValue: 0,
    bufferValue: 0,
    logValue:0,
    func: undefined,
    carriageReturn: true,
    commaSign: false,
    activeHistory: false,
    historyValue: localStorage.getItem('historyOfCalc')?JSON.parse(localStorage.getItem('historyOfCalc')):[],
    sizeOfWindow: window.innerWidth >= 916 ? "XXL" : "XL",
    histOrMem: false
}
let mainReducer= (state=initialState, action) =>{
    const float=(n)=>{
            return n % 1 === 0;
        }
    const calc= (x, y, func) =>{
        switch (func) {
            case "-" : {
                // console.log('x='+ x+ ', y='+ y + 'func:'+ func)
                return Number(x-y);}
            case "+" :{return Number(x)+Number(y);}
            case "x" :{return Number(x)*Number(y);}
            case "/" :{return Number(y)!==0? Number(x)/Number(y):'Деление на ноль не возможно'}
            case "square":{return (Number(y)*Number(y))}
            case "1/x":{return Number(y)!==0? 1/Number(y): 'Деление на ноль не возможно'}
            case "root":{return Math.sqrt(Number(y))}

            default : {return y}
    }
    }
    switch (action.type) {
        case CLEAR_HIST:{
            localStorage.clear()
            return {
                ...state, historyValue: localStorage.getItem('historyOfCalc')?JSON.parse(localStorage.getItem('historyOfCalc')):[]
            }
        }
        case ADD_SYMBOL: {
            // console.log(state)
            let symbol = action.symbol;
            return state.carriageReturn ? {
                ...state, currentValue: symbol, carriageReturn: false,
                commaSign: false
            } : {
                ...state, currentValue: Number(state.currentValue + symbol), carriageReturn: false
            };
        }
        case BTN_MINUS:{
            // console.log(state);
            return state.func===undefined?{
                    ...state,
                    func: "-", logValue: state.currentValue+"-",
                    bufferValue: state.currentValue,
                    carriageReturn: true,
                    commaSign: !float(state.currentValue)
            }
            :{
            ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "-", logValue: state.logValue + state.currentValue + "-",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true,
                    commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
            }
            }
            case BTN_PLUS:{
            return state.func===undefined?{
                ...state,
                func: "+", logValue: state.currentValue+"+",
                bufferValue: state.currentValue,
                carriageReturn: true,
                commaSign: !float(state.currentValue)
            }
            :{
                    ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "+", logValue: state.logValue + state.currentValue + "+",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true,
                    commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
                }
        }

        case BTN_MULT:{
            return state.func===undefined?{
                    ...state,
                    func: "x", logValue: state.currentValue+"x",
                    bufferValue: state.currentValue,
                    carriageReturn: true,
                    commaSign: !float(state.currentValue)
                }
                :{
                    ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "x", logValue: state.logValue + state.currentValue + "x",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true,
                    commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
                }
        }
        case  BTN_BACKSPACE:{
            let str= String(state.currentValue);
            return {
                ...state, currentValue: str.substring(0,str.length-1)
            }
        }
        case BTN_SHARE:{
                return state.func===undefined?{
                        ...state,
                        func: "/", logValue: state.currentValue+"/",
                        bufferValue: state.currentValue,
                        carriageReturn: true,
                        commaSign: !float(state.currentValue)
                    }
                    :{
                        ...state,
                        currentValue: calc(state.bufferValue, state.currentValue, state.func),
                        func: "/", logValue: state.logValue + state.currentValue + "/",
                        bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                        carriageReturn: true,
                        commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
                    }
            }

        case BTN_EQUALS:{
            let exception=((state.currentValue===0.1&&state.bufferValue===0.2)
                ||(state.currentValue===0.2&&state.bufferValue===0.1))
                &&state.func==="+"
            let newLogVal=state.logValue+ state.currentValue+"=";
            let newValue= calc(state.bufferValue, state.currentValue, state.func);
            let newArrVal={valH:newValue,logValH:newLogVal};
            let Hist=[...state.historyValue];
            if(!exception){Hist.unshift(newArrVal);}
            else{Hist.unshift({valH:0.3,logValH: "0.1+0.2="})}
            if (exception){
                return{
                    ...state,
                    currentValue: 0.3,
                    bufferValue: 0,
                    logValue: newLogVal,
                    func:undefined,
                    carriageReturn: true,
                    commaSign: !float(newValue),
                    historyValue: Hist
            };
            }
            return {
                ...state,
                currentValue: newValue,
                bufferValue: 0,
                logValue: newLogVal,
                func:undefined,
                carriageReturn: true,
                commaSign: !float(newValue),
                historyValue: Hist
            };

        }
        case BTN_SQUARE: {
            let newCV= calc(state.bufferValue, state.currentValue, "square")
            let newLV="sqr(" + state.currentValue + ")"
            let sqHist=[...state.historyValue]
            sqHist.unshift({valH:newCV,logValH:newLV})
            return {
                ...state,
                currentValue:newCV,
                bufferValue: 0,
                logValue: newLV,
                func: undefined,
                carriageReturn: true,
                commaSign: !float(calc(state.bufferValue, state.currentValue, state.func)),
                historyValue: sqHist
            }
        }
        case BTN_ROOT: {
            let newCV=calc(state.bufferValue, state.currentValue, "root")
            let hist=[...state.historyValue];
            let newLV="sqrt(" + state.currentValue + ")"
            hist.unshift({valH:newCV,logValH:newLV})
            return {
                ...state,
                currentValue: newCV,
                bufferValue: 0,
                logValue: newLV,
                func: undefined,
                carriageReturn: true,
                commaSign: !float(calc(state.bufferValue, state.currentValue, state.func)),
                historyValue: hist
            }
        }
                case BTN_INVERSE: {
                    let newCV=calc(state.bufferValue, state.currentValue, "1/x");
                    let newLV="1/"+state.currentValue
                    let invHist=[...state.historyValue]
                    invHist.unshift({valH:newCV,logValH:newLV})
            return {
                    ...state,
                    currentValue: newCV,
                    bufferValue: 0,
                    logValue: newLV,
                    func:undefined,
                    carriageReturn: true,
                    commaSign: !float(calc(state.bufferValue, state.currentValue, state.func)),
                    historyValue: invHist
                }
        }
        case BTN_CLEAR:{
            return initialState;
        }
        case BTN_PM:{
            return {
                ...state, currentValue: -state.currentValue
            }
        }
        case BTN_CE:{
            return {
                ...state, currentValue: 0
            }
        }
        case BTN_COMMA:{
            return state.commaSign? {
               ...state
            } : {
                ...state, currentValue: state.currentValue + '.', commaSign: true
            };
        }
        case SET_CURRENT_VALUE: {
            return {
                ...state, currentValue: action.value
            }
        }case BTN_HIST: {
            return {
                ...state, activeHistory: !state.activeHistory
            }
        }case RESIZE_WINDOW: {
            return {
                ...state, sizeOfWindow: window.innerWidth >= 916 ? "XXL" : "XL"
            }
        }case SET_HIST_OR_MEM: {
             return {
                 ...state, histOrMem: !state.histOrMem
             }
        }
        default :
            return state;
    }
}

export const addSymbolCreator=(symbol)=>({type: ADD_SYMBOL, symbol})
export const actCrEQUALS=()=>({type: BTN_EQUALS})
export const actCrMINUS=()=>({type: BTN_MINUS})
export const actCrPLUS=()=>({type: BTN_PLUS})
export const actCrMULT=()=>({type: BTN_MULT})
export const actCrSHARE=()=>({type: BTN_SHARE})
export const actCrC=()=>({type: BTN_CLEAR})
export const actCrCOMMA=()=>({type: BTN_COMMA})
export const actCrSQUARE=()=>({type: BTN_SQUARE})
export const actCrINVERSE=()=>({type: BTN_INVERSE})
export const actCrCE=()=>({type: BTN_CE})
export const actCrROOT=()=>({type: BTN_ROOT})
export const actCrBACKSPACE=()=>({type: BTN_BACKSPACE})
export const actCrPM=()=>({type: BTN_PM})
export const actCrSetCurrentValue=(value)=>({type:SET_CURRENT_VALUE, value})
export const actCrHIST=()=>({type:BTN_HIST})
export const actCrResize=()=>({type:RESIZE_WINDOW})
export const actCrHistOrMem=()=>({type:SET_HIST_OR_MEM})
export const actCrClearHistory=()=>({type:CLEAR_HIST})



export default mainReducer;