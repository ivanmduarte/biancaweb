import React, { Component } from 'react';

class Carousel extends Component {
    render(){
        return(
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#myCarousel" data-bs-slide-to="0" className=""></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="1" className="active"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="2" className=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-start">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777"></rect>
                        </svg>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h2>Example headline.</h2>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                                    Donec id elit non mi porta gravida at eget metus. Nullam id 
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#">
                                        Sign up today
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item carousel-item-next carousel-item-start">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777"></rect>
                        </svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h2>Another example headline.</h2>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                                    Donec id elit non mi porta gravida at eget metus. Nullam id 
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#">
                                        Learn more
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777"></rect>
                        </svg>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h2>One more for good measure.</h2>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                                    Donec id elit non mi porta gravida at eget metus. Nullam id 
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#" >
                                        Browse gallery
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;