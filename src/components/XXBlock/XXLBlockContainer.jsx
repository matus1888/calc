import XXLBlock from "./XXLBlock";
import {connect} from "react-redux";
import {actCrHistOrMem} from "../../redux/mainReducer";

let mapStateToProps=(state)=>{
    return {
        mCell: state.memMenu.mCell,
        historyValue: state.mainReducer.historyValue,
        histOrMem: state.mainReducer.histOrMem
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        switchMenu: ()=>dispatch(actCrHistOrMem())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(XXLBlock)