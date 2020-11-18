import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer"

let reducers=combineReducers({base: mainReducer})
let store=createStore(reducers);

window.store= store;

export default store;