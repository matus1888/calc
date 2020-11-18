const ADD_SYMBOL='addSymbol';

let initialState= {
    currentValue: 0
}
let mainReducer= (state=initialState, action) =>{
    switch (action.type) {
        case ADD_SYMBOL:{
            let symbol=action.symbol;
            return {
                ...state, currentValue: state.currentValue+symbol
            }
        }
        default :
            return state;
    }
}

export const addSymbolCreator=(symbol)=>({type:ADD_SYMBOL, symbol})

export default mainReducer;