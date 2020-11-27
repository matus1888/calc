import HistBuff from "./HistBuff";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        historyValue: state.base.historyValue
    }
}

export default connect(mapStateToProps)(HistBuff)