const ADD_SYMBOL='addSymbol';
const BTN_EQUALS ='clickButtonEQUALS';
const BTN_MINUS ='clickButtonMINUS';
const BTN_PLUS='clickButtonPLUS';
const BTN_MULT='clickButtonMULT';
const BTN_SHARE='clickButtonSHARE';
const BTN_CLEAR='clickButtonCLEAR';

let initialState= {
    currentValue: 0,
    bufferValue: 0,
    logValue:undefined,
    func: undefined,
    carriageReturn: true
}
let mainReducer= (state=initialState, action) =>{
    const calc= (x, y, func) =>{
        switch (func) {
            case "-" : {
                // console.log('x='+ x+ ', y='+ y + 'func:'+ func)
                return Number(x-y);}
            case "+" :{return Number(x)+Number(y);}
            case "x" :{return Number(x)*Number(y);}
            case "/" :{return Number(x)/Number(y);}
            default : {return y}
    }
    }
    switch (action.type) {
        case ADD_SYMBOL: {
            // console.log(state)
            let symbol = action.symbol;
            return state.carriageReturn ? {
                ...state, currentValue: symbol, carriageReturn: false
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
                    carriageReturn: true
            }
            :{
            ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "-", logValue: state.logValue + state.currentValue + "-",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true
            }
            }
            case BTN_PLUS:{
            return state.func===undefined?{
                ...state,
                func: "+", logValue: state.currentValue+"+",
                bufferValue: state.currentValue,
                carriageReturn: true
            }
            :{
                    ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "+", logValue: state.logValue + state.currentValue + "+",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true
                }
        }

        case BTN_MULT:{
            return state.func===undefined?{
                    ...state,
                    func: "x", logValue: state.currentValue+"x",
                    bufferValue: state.currentValue,
                    carriageReturn: true
                }
                :{
                    ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "x", logValue: state.logValue + state.currentValue + "x",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true
                }
        }

        case BTN_SHARE:{
            return state.func===undefined?{
                    ...state,
                    func: "/", logValue: state.currentValue+"/",
                    bufferValue: state.currentValue,
                    carriageReturn: true
                }
                :{
                    ...state,
                    currentValue: calc(state.bufferValue, state.currentValue, state.func),
                    func: "/", logValue: state.logValue + state.currentValue + "/",
                    bufferValue: calc(state.bufferValue, state.currentValue, state.func),
                    carriageReturn: true
                }
        }

        case BTN_EQUALS:{
            return {
                ...state,
                currentValue: calc(state.bufferValue, state.currentValue, state.func),
                bufferValue: 0,
                logValue: 0,
                func:undefined,
                carriageReturn: true
            };

        }
        case BTN_CLEAR:{
            return initialState;
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


export default mainReducer;