import {connect} from "react-redux";
import Curtain from "./Curtain";
import {actCrHIST} from "../redux/mainReducer";
import {actCrMShow} from "../redux/memMenuReducer";

let mapStateToProps = (state) => {
    return {
        actHistory: state.mainReducer.activeHistory,
        activeMenu: state.memMenu.activeMenu
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        closeHist: () => dispatch(actCrHIST()),
        closeMem: () => dispatch(actCrMShow())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Curtain);