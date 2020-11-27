const M_PLUS='memoryPlusCurrentValue';
const M_ACTIVATE="activateMemoryMenu";
const M_CLEAR='clearMemory';

let initialState= {
    mMenuIsNOTActive : true,
    mCell : undefined
}
let memMenuReducer = (state=initialState, action) =>{
    switch (action.type) {
        case M_PLUS:{
            return {
                ...state, mMenuIsNOTActive: false, mCell: action.cV
            }
        }
        case M_ACTIVATE:{
            return {
                ...state, mMenuIsNOTActive: false
            }
        }case M_CLEAR:{
            return {
                ...state, mMenuIsNOTActive: true, mCell: undefined
            }
        }
        default :  return state;
    }
}

export const actCrMPlus=(cV)=>({type: M_PLUS, cV})
export const actCrActivateMMenu=()=>({type: M_ACTIVATE})
export const actCrClearMemory=()=>({type: M_CLEAR})


export default memMenuReducer;