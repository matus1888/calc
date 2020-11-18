import  React from 'react';

const Button = (props) => {
    let pressButton = () =>props.addSymbol(props.name)
    return (<button className={props.className} disabled={props.disabled}
                    onClick={pressButton}>{props.name}
    </button>)
}
export default Button;