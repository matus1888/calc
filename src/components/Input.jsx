import React from 'react';

const Input= (props) =>{
    return (<input className={props.className}  value={props.base.currentValue}>
    </input>)
}
export default Input;