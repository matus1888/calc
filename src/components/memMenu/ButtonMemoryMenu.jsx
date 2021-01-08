import React from 'react';

const ButtonMemoryMenu = (props) => {
    let clicker = () => {
        if (props.name === 'M+') {
            console.log("в память прибавили:" + props.cV)
            return props.clickMPlusButton(props.cV);
        }
        if (props.name === 'M-') {
            console.log("из памяти вычли:" + props.cV)
            return props.clickMMinusButton(props.cV);
        }
        if (props.name === 'MC') {
            console.log("память очищена")
            return props.clickMClearButton();
        }
        if (props.name === 'MR') {
            console.log("вызов из памяти")
            return props.clickMCallValue(props.mCell);
        }
        if (props.name === 'MS') {
            console.log("сохранено в память" + props.cV)
            return props.clickMSaveTo(props.cV);
        }
        if (props.name === 'M^') {
            return props.clickMShow(props.cV);
        } else {
            return console.log('Саня чо то не доделал')
        }
    }
    return (
        <button className={props.className} title={props.title}
                onClick={clicker} disabled={props.disUp || (props.dis && props.mMenuIsNOTActive)}>
            {props.name}
        </button>
    )
}
export default ButtonMemoryMenu;