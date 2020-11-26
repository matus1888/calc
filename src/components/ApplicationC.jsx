import Application from "./Application";
import {
    actCrBACKSPACE,
    actCrC, actCrCE, actCrCOMMA,
    actCrEQUALS, actCrINVERSE,
    actCrMINUS,
    actCrMULT,
    actCrPLUS, actCrROOT,
    actCrSHARE, actCrSQUARE,
    addSymbolCreator
} from "../redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return {
        isActive: state.menuI.activeMenu
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        pressKey: (x)=>dispatch(addSymbolCreator(x)),
        pressKeyEQUALS:()=>dispatch(actCrEQUALS()),
        pressKeyMINUS:()=>dispatch(actCrMINUS()),
        pressKeyPLUS:()=>dispatch(actCrPLUS()),
        pressKeyMULT:()=>dispatch(actCrMULT()),
        pressKeySHARE:()=>dispatch(actCrSHARE()),
        pressKeyC:()=>dispatch(actCrC()),
        pressKeyCOMMA:()=>dispatch(actCrCOMMA()),
        pressKeySQUARE:()=>dispatch(actCrSQUARE()),
        pressKeyINVERSE:()=>dispatch(actCrINVERSE()),
        pressKeyCE:()=>dispatch(actCrCE()),
        pressKeyROOT:()=>dispatch(actCrROOT()),
        pressKeyBACKSPACE:()=>dispatch(actCrBACKSPACE()),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Application)