const ADD_SYMBOL='addSymbol';
const BTN_EQUALS ='clickButtonEQUALS';
const BTN_MINUS ='clickButtonMINUS';

let initialState= {
    currentValue: 0,
    bufferValue:0
}
let mainReducer= (state=initialState, action) =>{
    switch (action.type) {
        case ADD_SYMBOL:{
            let symbol=action.symbol;
            return {
                ...state, currentValue: Number(state.currentValue+symbol)
            }
        }
        case BTN_MINUS:{ return{
            ...state, currentValue: '', bufferValue: action.currentValue
        }

        }
        default :
            return state;
    }
}

export const addSymbolCreator=(symbol)=>({type: ADD_SYMBOL, symbol})
export const actCrEQUALS=(currentValue)=>({type: BTN_EQUALS, currentValue})
export const actCrMINUS=(currentValue)=>({type: BTN_MINUS, currentValue})

export default mainReducer;