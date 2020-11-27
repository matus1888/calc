import MemBuffer from "./MemBuffer";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        mCell: state.memMenu.mCell
    }
}

export default connect(mapStateToProps)(MemBuffer)