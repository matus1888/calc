import React from 'react';

const BntMM=(props)=>{
    let clicker=()=>{
        if(props.name==='M+'){
            console.log("в память записали :"+ props.cV)
            return props.clickMPlusButton(props.cV);
        }if(props.name==='MC'){
            console.log("память очищена")
            return props.clickMClearButton();
        } else{
            return console.log('Саня чо то не доделал')
        }
    }
    return (
        <button className={props.className} title={props.title}
                onClick={clicker} disabled={props.dis&&props.mMenuIsNOTActive}>
            {props.name}
        </button>
    )
}
export default BntMM;