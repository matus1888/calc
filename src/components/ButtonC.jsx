import Button from "./Button";
import {connect} from "react-redux";
import {actCrEQUALS, actCrMINUS, addSymbolCreator} from "../redux/mainReducer";


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
        clickMINUS: (cV) => dispatch(actCrMINUS(cV))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Button)