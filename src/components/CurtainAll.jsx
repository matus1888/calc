import React from 'react';
import s from '../App.module.css'

class CurtainAll extends React.Component {
    render() {
        let x;
        if (this.props.isVisible) {
            x = s.curtainAllActive
        } else {
            x = s.curtainAll
        }
        return (
            <div className={x} onClick={this.props.closeMenu}></div>
        )
    }
}

export default CurtainAll;