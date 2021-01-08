import React from 'react';

const InputField = (props) => {
    return (<input className={props.className} value={props.base.currentValue} readOnly={true}>
    </input>)
}
export default InputField;