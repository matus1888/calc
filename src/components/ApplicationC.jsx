import Application from "./Application";
import {addSymbolCreator} from "../redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps= (state)=>{
    return {
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        pressKey: (x)=>dispatch(addSymbolCreator(x))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Application)