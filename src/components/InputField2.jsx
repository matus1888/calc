import React from 'react';

const InputField2 = (props) => {
    // console.log(store.getState().base)
    localStorage.setItem('historyOfCalc', JSON.stringify(props.historyValue))
    return (<input className={props.className} value={props.state.logValue === 0 ? '' : props.state.logValue}
                   readOnly={true}></input>)
}
export default InputField2;