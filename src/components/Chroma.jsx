import React from 'react';

class Chroma extends React.Component {
    constructor(props) {
        super(props)
    }
    mouse = event => {
        var colorhex = [
            '#7AF377', '#3498DB', '#F1C530', '#F29C29', '#8E44AD', '#4AA086', '#E74C3C', '#65CC71','#D3541B','#EB4367','#74F7D9', '#DDA8FC',
        ]
        var el = document.getElementById('colorstext')
        el.style.color = colorhex[Math.floor(Math.random() * 12)]
    }
    mouseout = event => {
        var white = '#090909'
        var el = document.getElementById('colorstext')
        el.style.color = white
    }

    render() {
        return (

            <a
                onMouseEnter={this.mouse}
                onMouseLeave={this.mouseout}
                id="colorstext"
            >
                Teaxt
            </a>
        )
    }
}
export default Chroma