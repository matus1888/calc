import React from 'react';

const Input2= (props) =>{
    // console.log(store.getState().base)
    return (<input className={props.className} value={props.state.logValue}  readOnly={true}></input>)
    }
export default Input2;