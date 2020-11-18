import Button from "./Button";
import {connect} from "react-redux";
import {addSymbolCreator} from "../redux/mainReducer";


let mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addSymbol:(symbolOfButton)=>
            dispatch(addSymbolCreator(symbolOfButton))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Button)