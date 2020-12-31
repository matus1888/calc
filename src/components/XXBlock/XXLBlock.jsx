import React from 'react';
import s from './XXLBlock.module.css';


class XXLBlock extends React.Component {
    values() {
        return  this.props.historyValue.map(value =>
            <div key={(value.logValH + new Date().toLocaleString()).toString()}>
                <div className={s.logVal}>{value.logValH}</div>
                <div>{value.valH}</div>
            </div>)
    }

    render() {
        return (<div className={s.XXLVBlock}>
            <div className={s.a}>
                <button className={`${s.side} ${s.fontSeguiSym}`}>&#x2013;</button>
                <button className={`${s.fullScreen} ${s.fontSeguiSym}`}>&#x20E3;</button>
                <button className={`${s.close} ${s.fontSeguiSym}`}>&#x2715;</button>
            </div>
            <div className={s.b}>
                <span className={s.history} onClick={this.props.switchMenu}>Журнал</span>
                <span className={s.memory} onClick={this.props.switchMenu}>Память</span>
            </div>
            <div className={s.bb}>
                {!this.props.histOrMem && <div className={s.line}></div>}
                {this.props.histOrMem && <div className={s.line2}></div>}
            </div>
            <div className={s.c}>
                {this.props.histOrMem && <div>{this.props.mCell}</div>}
                {!this.props.histOrMem && <div>{this.props.historyValue[0] ? this.values() : 'Журнала еще нет'}
                </div>}
            </div>
            <div className={s.d}>
                <button className={`${s.buttonDelete} ${s.fontWinCalc}`}
                        onClick={this.props.clearHistory}>&#xE74D;</button>
            </div>
        </div>)
    }
}

export default XXLBlock;