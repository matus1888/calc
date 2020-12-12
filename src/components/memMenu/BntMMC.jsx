import BntMM from "./BntMM";
import {connect} from "react-redux";
import {
    actCrActivateMMenu,
    actCrClearMemory,
    actCrMMinus,
    actCrMPlus,
    actCrMSaveTo,
    actCrMShow
} from "../../redux/memMenuReducer";
import {actCrSetCurrentValue} from "../../redux/mainReducer";

let mapStateToProps=(state)=>{
    return {
        mMenuIsNOTActive : state.memMenu.mMenuIsNOTActive,
        mCell : state.memMenu.mCell,
        cV: state.mainReducer.currentValue
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        activateMemMenu: ()=>dispatch(actCrActivateMMenu()),
        clickMPlusButton: (cV)=>dispatch(actCrMPlus(cV)),
        clickMCallValue: (cV)=>dispatch(actCrSetCurrentValue(cV)),
        clickMMinusButton: (cV)=>dispatch(actCrMMinus(cV)),
        clickMSaveTo: (cV)=>dispatch(actCrMSaveTo(cV)),
        clickMShow: ()=>dispatch(actCrMShow()),
        clickMClearButton: ()=>dispatch(actCrClearMemory())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BntMM)