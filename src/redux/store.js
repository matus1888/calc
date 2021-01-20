import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer"
import sideMenuReducer from "./sideMenuReducer";
import memMenuReducer from "./memMenuReducer";

let reducers=combineReducers({
    mainReducer: mainReducer,
    menuI: sideMenuReducer,
    memMenu: memMenuReducer 
})
let store=createStore(reducers);

window.store= store;

export default store;