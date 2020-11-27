import Button from "./Button";
import {connect} from "react-redux";
import {
    actCrBACKSPACE,
    actCrC,
    actCrCE,
    actCrCOMMA,
    actCrEQUALS, actCrHIST,
    actCrINVERSE,
    actCrMINUS,
    actCrMULT,
    actCrPLUS, actCrPM,
    actCrROOT,
    actCrSHARE,
    actCrSQUARE,
    addSymbolCreator
} from "../redux/mainReducer";
import {actCrMenuActive} from "../redux/sideMenuReducer";


let mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue,
        cV: state.base.currentValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addSymbol: (symbolOfButton) =>
            dispatch(addSymbolCreator(symbolOfButton)),
        clickEQUALS: (cV) => dispatch(actCrEQUALS(cV)),
        clickMINUS: (cV) => dispatch(actCrMINUS(cV)),
        clickPLUS: (cV) => dispatch(actCrPLUS(cV)),
        clickMULT:(cV) =>dispatch(actCrMULT(cV)),
        clickSHARE:(cV) =>dispatch(actCrSHARE(cV)),
        clickCLEAR:() =>dispatch(actCrC()),
        clickCOMMA:() =>dispatch(actCrCOMMA()),
        clickSQUARE:(cV) =>dispatch(actCrSQUARE(cV)),
        clickINVERSE:(cV) =>dispatch(actCrINVERSE(cV)),
        clickCE:() =>dispatch(actCrCE()),
        clickROOT:() =>dispatch(actCrROOT()),
        clickBACKSPACE:() =>dispatch(actCrBACKSPACE()),
        clickMENU:()=>dispatch(actCrMenuActive()),
        clickPM:()=>dispatch(actCrPM()),
        clickHSIT:()=>dispatch(actCrHIST())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Button)