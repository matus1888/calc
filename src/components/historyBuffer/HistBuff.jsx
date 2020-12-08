import React from 'react';
import s from './HistBuff.module.css'

class HistBuff extends React.Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    values(){return this.props.historyValue.map(value =>
        <div key={(value.logValH + new Date().toLocaleString()).toString()}>
            <div className={s.logVal}>{value.logValH}</div>
            <div>{value.valH}</div>
        </div>)}

    handleClick() {

        const wrapper=this.wrapperRef.current;
        if(this.props.isActive){
            wrapper.classList.add(s.bufferActive)
        }else if (wrapper&&!this.props.isActive){
            wrapper.classList.remove(s.bufferActive)
        }
    }
    render() {
        let values=this.values()
        this.handleClick()
        return (<div ref={this.wrapperRef} className={s.buffer}>
                {values}
            </div>
        )
    }
}


export default HistBuff;