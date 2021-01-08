import Values from "./Values"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        historyValue: state.mainReducer.historyValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Values)