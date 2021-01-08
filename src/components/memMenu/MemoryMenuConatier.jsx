import MemoryMenu from "./MemoryMenu";
import {connect} from "react-redux";
import {actCrResize} from "../../redux/mainReducer";

let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => {
    return {
        resizeMyCalc: () => dispatch(actCrResize())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryMenu)