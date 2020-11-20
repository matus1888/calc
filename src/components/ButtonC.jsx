import Button from "./Button";
import {connect} from "react-redux";
import {
    actCrC,
    actCrEQUALS,
    actCrMINUS,
    actCrMULT,
    actCrPLUS,
    actCrSHARE,
    addSymbolCreator
} from "../redux/mainReducer";


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
        clickCLEAR:() =>dispatch(actCrC())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Button)