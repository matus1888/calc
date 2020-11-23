import React from 'react';
import store from '../redux/store';

const Input2= (props) =>{
    // console.log(store.getState().base)
    return (<input className={props.className} value={props.state.logValue} ></input>)
    }
export default Input2;