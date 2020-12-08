import React from 'react';
import IMAGES from '../assets/assets.js';
import './Slideshow.css';

class ImageSlideshow extends React.Component {
    state = {
        index: 0,
        images: [],
    }

    componentDidMount() {
        const newImages = IMAGES[this.props.name]
        this.setState({ images: newImages })
    }

    plusSlides = (num) => {
        let newNum = this.state.index + num;
        if (newNum > this.state.images.length - 1) {
            newNum = 0;
        } else if (newNum < 0) {
            newNum = this.state.images.length - 1
        }

        this.setState({ index: newNum })
    }
    // this.props.images
    // 
    render() {
        // const imagesArr = IMAGES[this.props.name].map((el, index) => {
        //     return (
        //         <div className="mySlides fade" key={index}>
        //             <img src={el} alt='Placeholder'/>
        //         </div>
        //     )
        // })
        const displayedImage = this.state.images[this.state.index]
        return (
            <div className="slideshow-container">
                {displayedImage ? <img src={displayedImage} alt="Project screenshot"/> : ''}
                {this.state.images.length > 1 ? (
                    <>
                        <button className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</button>
                        <button className="next" onClick={() => this.plusSlides(1)}>&#10095;</button>
                    </>
                )
                    : ''
                }
            </div>
        )
    }
}

export default ImageSlideshow;