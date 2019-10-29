import React, { Component } from 'react';
import './MainImage.css';

class MainImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.testImage = this.testImage.bind(this);
    }

    render() {
        const {allPictures, pictureLabel, pictureIndex, pictureUrl} = this.props;

        this.testImage(pictureUrl, ()=>{}, ()=>{
            this.props.history.push('/home');
            return null;
        });

        let mainImages = allPictures.slice(Math.max(0, pictureIndex-3), pictureIndex + 1);

        return <ul className="main-image-container">
            {mainImages.map((picture, i) =>
                <li key={i} style={{
                    backgroundImage: `linear-gradient(rgba(243, 243, 243, ${1 - 1/(mainImages.length - i)}), rgba(243, 243, 243, ${1 - 1/(mainImages.length - i)})), url('${picture.url}')`,
                    top: `-${ (mainImages.length - i - 1) * 10 }px`,
                    filter: `grayscale(${ (mainImages.length - i - 1) * 30 }%) blur(${ (mainImages.length - i - 1) * 1 }px)`,
                    width: `${ 100 - (5*(mainImages.length - i - 1)) }%`
                }} className="main-image" />
            )}
        </ul>;
    }

    testImage(imgSrc, onload, onerror) {
        var img = document.createElement('img');
        img.onload = onload;
        img.onerror = onerror;
        img.src = imgSrc;
        img.setAttribute('style', 'height: 1px; visibility: hidden;');
        document.getElementsByTagName('body')[0].appendChild(img);
    }
}
export default MainImage;