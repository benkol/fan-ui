import React, { Component } from 'react';
import Thumb from '../pictureComponents/Thumb';
import './FolderImages.css';

class FolderImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {allPictures, pictures} = this.props;

        return <ul className="folder-images">
        {pictures.map((picture, i) =>
          <li key={i} className="folder-image-container">
            <Thumb pictures={allPictures} picture={picture} />
          </li>
        )}
      </ul>;
    }
  }
export default FolderImages;