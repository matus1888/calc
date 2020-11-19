import  React from 'react';

const Button = (props) => {
    let pressButton = () =>{
        let x=Number(props.name)
        let numbersButtons=(x===1)||(x===2)||(x===3)||(x===4)||
            (x===5)||(x===6)||(x===7)||(x===8)||(x===9)||(x===0);
        console.log()
        if (numbersButtons){
            props.addSymbol(props.name)
        }else if(props.name==='='){
            props.clickEQUALS(props.cV)
        }else if(props.name==='-'){
            props.clickMINUS(props.cV)
        }
        else{
            console.log("реализуй функцию для нажатия на эту кнопку")
        }
    }
    return (<button className={props.className} disabled={props.disabled}
                    onClick={pressButton}>{props.name}
    </button>)
}
export default Button;