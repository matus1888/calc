import Input from "./Input";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        base: state.mainReducer
    }
}

export default connect(mapStateToProps)(Input);