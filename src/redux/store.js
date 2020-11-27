import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer"
import sideMenuReducer from "./sideMenuReducer";
import memMenuReducer from "./memMenuReducer";

let reducers=combineReducers({
    base: mainReducer,
    menuI: sideMenuReducer,
    memMenu: memMenuReducer
})
let store=createStore(reducers);

window.store= store;

export default store;