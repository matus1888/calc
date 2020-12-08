import React from 'react';
import s from './MemBuff.module.css'


class MemBuffer extends React.Component{
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const wrapper=this.wrapperRef.current;
        if(this.props.isActive){
            wrapper.classList.add(s.bufferActive)
        }else if (wrapper&&!this.props.isActive){
            wrapper.classList.remove(s.bufferActive)
        }
    }
    render() {
        this.handleClick()
        return (
            <div ref={this.wrapperRef} className={s.buffer}>{this.props.mCell}</div>
        )
    }

}
export default MemBuffer;