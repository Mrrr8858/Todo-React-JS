import React from 'react';
import { Carousel } from 'react-bootstrap';


class Slider extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={this.props.img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={this.props.img2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={this.props.img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;