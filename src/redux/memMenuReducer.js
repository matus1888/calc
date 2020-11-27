const M_PLUS='memoryPlusCurrentValue';
const M_ACTIVATE="activateMemoryMenu";
const M_CLEAR='clearMemory';
const M_MINUS='memoryMinusCurrentValue';
const M_SAVE='memorySave';
const M_SHOW='memoryShow';

let initialState= {
    mMenuIsNOTActive : true,
    mCell : 0,
    activeMemBuffer: false
}
let memMenuReducer = (state=initialState, action) =>{
    switch (action.type) {
        case M_PLUS:{
            return {
                ...state, mMenuIsNOTActive: false, mCell: state.mCell+action.cV
            }
        }
        case M_MINUS:{
            return {
                ...state, mMenuIsNOTActive: false, mCell: state.mCell-action.cV
            }
        }
        case M_ACTIVATE:{
            return {
                ...state, mMenuIsNOTActive: false
            }
        }case M_CLEAR:{
            return {
                ...state, mMenuIsNOTActive: true, mCell: 0
            }
        }
        case M_SAVE:{
            return {
                ...state, mMenuIsNOTActive: false, mCell: action.cV
            }
        }case M_SHOW:{
            return {
                ...state, activeMemBuffer: !state.activeMemBuffer
            }
        }

        default :  return state;
    }
}

export const actCrMPlus=(cV)=>({type: M_PLUS, cV})
export const actCrMMinus=(cV)=>({type: M_MINUS, cV})
export const actCrActivateMMenu=()=>({type: M_ACTIVATE})
export const actCrClearMemory=()=>({type: M_CLEAR})
export const actCrMSaveTo=(cV)=>({type: M_SAVE, cV})
export const actCrMShow=()=>({type: M_SHOW})


export default memMenuReducer;