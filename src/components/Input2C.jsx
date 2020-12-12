import Input2 from "./Input2";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        state: state.mainReducer
    }
}

export default connect(mapStateToProps)(Input2);