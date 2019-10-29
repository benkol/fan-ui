import React, { Component } from 'react';
import MainImage from '../pictureComponents/MainImage';
import FolderImages from '../pictureComponents/FolderImages';
import './Picture.css';

class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('path')) {
      
      const pictureUrl = urlParams.get('path');
        
      let allPictures = JSON.parse(localStorage.getItem('pictures'));
      var pictureLabel = "";
      var pictureIndex = null;
      const pictures = allPictures.filter(function (picture ,i) {
        if (picture.url === pictureUrl) {
          pictureLabel = picture.label;
          pictureIndex = i;
        }
        return picture.url !== pictureUrl;
      });
        
        return <div className="container">
          <MainImage allPictures={allPictures} pictureUrl={pictureUrl} pictureLabel={pictureLabel} pictureIndex={pictureIndex} />
          <FolderImages allPictures={allPictures} pictures={pictures} />
        </div>;

      } else {
        this.props.history.push('/home');
        return null;
      }
    }
  }

  export default Picture;