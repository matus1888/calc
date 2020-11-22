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


let initialState= {
    currentValue: 0,
    bufferValue: 0,
    logValue:undefined,
    func: undefined,
    carriageReturn: true,
    commaSign: false
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
            case "/" :{return Number(x)/Number(y);}
            case "square":{return (Number(y)*Number(y))}
            case "1/x":{return 1/Number(y)}
            case "root":{return Math.sqrt(Number(y))}

            default : {return y}
    }
    }
    switch (action.type) {
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
            return {
                ...state,
                currentValue: calc(state.bufferValue, state.currentValue, state.func),
                bufferValue: 0,
                logValue: 0,
                func:undefined,
                carriageReturn: true,
                commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
            };

        }
        case BTN_SQUARE: {
            return {
                ...state,
                currentValue: calc(state.bufferValue, state.currentValue, "square"),
                bufferValue: 0,
                logValue: "sqr(" + state.currentValue + ")",
                func: undefined,
                carriageReturn: true,
                commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
            }
        }
        case BTN_ROOT: {
            return {
                ...state,
                currentValue: calc(state.bufferValue, state.currentValue, "root"),
                bufferValue: 0,
                logValue: "sqrt(" + state.currentValue + ")",
                func: undefined,
                carriageReturn: true,
                commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
            }
        }
                case BTN_INVERSE: {
            return {
                    ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, "1/x"),
                    bufferValue: 0,
                    logValue: "1/"+state.currentValue,
                    func:undefined,
                    carriageReturn: true,
                    commaSign: !float(calc(state.bufferValue, state.currentValue, state.func))
                }
        }
        case BTN_CLEAR:{
            return initialState;
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
        default :
            return state;
    }
}

export const addSymbolCreator=(symbol)=>({type: ADD_SYMBOL, symbol})
export const actCrEQUALS=(currentValue)=>({type: BTN_EQUALS, currentValue})
export const actCrMINUS=(currentValue)=>({type: BTN_MINUS, currentValue})
export const actCrPLUS=(currentValue)=>({type: BTN_PLUS, currentValue})
export const actCrMULT=(currentValue)=>({type: BTN_MULT, currentValue})
export const actCrSHARE=(currentValue)=>({type: BTN_SHARE, currentValue})
export const actCrC=()=>({type: BTN_CLEAR})
export const actCrCOMMA=()=>({type: BTN_COMMA})
export const actCrSQUARE=()=>({type: BTN_SQUARE})
export const actCrINVERSE=()=>({type: BTN_INVERSE})
export const actCrCE=()=>({type: BTN_CE})
export const actCrROOT=()=>({type: BTN_ROOT})
export const actCrBACKSPACE=()=>({type: BTN_BACKSPACE})


export default mainReducer;