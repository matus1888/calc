import  React from 'react';

const Button = (props) => {
    let pressButton = () =>{
        let x=Number(props.name)
        let numbersButtons=(x===1)||(x===2)||(x===3)||(x===4)||
            (x===5)||(x===6)||(x===7)||(x===8)||(x===9)||(x===0);
        if (numbersButtons){
            props.addSymbol(props.name)
        }else if(props.id==='='){
            props.clickEQUALS(props.cV)
        }else if(props.id==='-'){
            props.clickMINUS(props.cV)
        }else if(props.id==='+'){
            props.clickPLUS(props.cV)
        }else if(props.id==='x'){
            props.clickMULT(props.cV)
        }else if(props.id==='/'){
            props.clickSHARE(props.cV)
        }else if(props.name==='C'){
            props.clickCLEAR()
        }else if(props.name===','){
            props.clickCOMMA()
        }else if(props.id==='x^2'){
            props.clickSQUARE(props.cV)
        }else if(props.id==='1/x'){
            props.clickINVERSE(props.cV)
        }else if(props.name==='CE'){
            props.clickCE(props.cV)
        }else if(props.id==='root(x)'){
            props.clickROOT(props.cV)
        }else if(props.id==='backspace'){
            props.clickBACKSPACE(props.cV)
        }else if(props.id==='menu'){
            props.clickMENU()
        }else if(props.id==='+/-'){
            props.clickPM()
        }else if(props.id==='Hist'){
            props.clickHSIT()
        }
        else{
            console.log("реализуй функцию для нажатия на эту кнопку"+props.name)
        }
    }
    let img=props.img;
    let getImg= ()=>{if(img){return(<img alt={''} src={img} height={'20px'}></img>)}}
    return (<button className={props.className} disabled={props.disabled} title={props.title}
                    onClick={pressButton}>
        {getImg()}
        {props.name}
    </button>)
}
export default Button;