import React, { Component } from 'react';
import logo from '../../imgs/banner.jpg';

class Carousel extends Component {
    render(){
        return(
            <div id="myCarousel" className="carousel" data-bs-ride="carousel">
                <img src={logo} style={{width: '100%'}}></img>
            </div>
        )
    }
}

export default Carousel;