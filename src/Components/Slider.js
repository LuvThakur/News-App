import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export class Slider extends Component {

    componentDidMount() {

        var x = 0;
        this.props.setProgress(x);

        const interval = setInterval(() => {
            x += 33.33;
            if (x <= 100)
                this.props.setProgress(x);
            else
                clearInterval(interval);
        }, 100);

    }

    render() {
        return (
            <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ height: '100vh', overflow: 'hidden' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://media.istockphoto.com/id/842826116/photo/media-concept-video-wall-with-small-screens.jpg?s=2048x2048&w=is&k=20&c=Y4yhuLP8IXaxGwHpohLUp6afrTC37oscMbUgUE-ftQk=" className="d-block" style={{ width: '100%', height: '100%' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1032516808/photo/video-archives-concept.jpg?s=2048x2048&w=is&k=20&c=kF3Bdl5iKZWtjKagtdQCTx_e3vKp2LCvfOgzm1q3q3k=" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control ">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '50px' }} />
                    </span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control" aria-hidden="true">
                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '50px', color: 'white' }} />
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Slider