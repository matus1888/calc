import MemoryBuffer from "./MemoryBuffer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        mCell: state.memMenu.mCell
    }
}

export default connect(mapStateToProps)(MemoryBuffer)