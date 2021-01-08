import HistoryBuffer from "./HistoryBuffer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        historyValue: state.mainReducer.historyValue
    }
}

export default connect(mapStateToProps)(HistoryBuffer)