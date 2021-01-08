import InputField2 from "./InputField2";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.mainReducer,
        historyValue: state.mainReducer.historyValue
    }
}

export default connect(mapStateToProps)(InputField2);