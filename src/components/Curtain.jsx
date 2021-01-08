import React from "react";
import s from '../App.module.css'

class Curtain extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.getVisibility = this.getVisibility.bind(this);
        this.setNotVisible = this.setNotVisible.bind(this);
    }

    getVisibility() {
        const wrapper = this.wrapperRef.current;
        if (this.props.isActive) {
            wrapper.classList.add(s.curtainActive)
        } else if (wrapper && !this.props.isActive) {
            wrapper.classList.toggle(s.curtain)
        }
    }

    setNotVisible = () => {
        const wrapper = this.wrapperRef.current;
        this.props.actHistory ? this.props.closeHist() : this.props.closeMem()
        wrapper.classList.toggle(s.curtainActive)
    }

    render() {
        this.getVisibility()
        return (
            <div className={this.props.className} ref={this.wrapperRef}
                 onClick={this.setNotVisible}></div>
        )
    }
}

export default Curtain;