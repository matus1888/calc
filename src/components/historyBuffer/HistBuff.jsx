import React from 'react';
import s from './HistBuff.module.css'

class HistBuff extends React.Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    // this is new REACT method for("Снимок перед обновлением")
    getSnapshotBeforeUpdate(prevProps, prevState) {
        localStorage.setItem('historyOfCalc',JSON.stringify(this.props.historyValue) )
        return null;
    }

    //this method get all values of History
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
                {this.props.historyValue[0]?values:'Журнала еще нет'}
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
}


export default HistBuff;