import BntMM from "./BntMM";
import {connect} from "react-redux";
import {actCrActivateMMenu, actCrClearMemory, actCrMPlus} from "../../redux/memMenuReducer";

let mapStateToProps=(state)=>{
    return {
        mMenuIsNOTActive : state.memMenu.mMenuIsNOTActive,
        mCell : state.memMenu.mCell,
        cV: state.base.currentValue
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        activateMemMenu: ()=>dispatch(actCrActivateMMenu()),
        clickMPlusButton: (cV)=>dispatch(actCrMPlus(cV)),
        clickMClearButton: ()=>dispatch(actCrClearMemory())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BntMM)