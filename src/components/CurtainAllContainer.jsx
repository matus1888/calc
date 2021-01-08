import {connect} from "react-redux";
import {actCrMenuActive} from "../redux/sideMenuReducer";
import CurtainAll from "./CurtainAll";


let mapStateToProps = (state) => {
    return {
        isVisible: state.menuI.activeMenu
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        closeMenu: () => dispatch(actCrMenuActive()),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CurtainAll);