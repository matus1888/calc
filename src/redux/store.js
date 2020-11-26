import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer"
import sideMenuReducer from "./sideMenuReducer";

let reducers=combineReducers({
    base: mainReducer,
    menuI: sideMenuReducer})
let store=createStore(reducers);

window.store= store;

export default store;