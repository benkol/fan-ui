import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Thumb.css';

class Thumb extends Component {
    constructor(props) {
    
        super(props);
    
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {picture} = this.props;
        return <button
            type="button"
            style={{backgroundImage: `url('${picture.url}')`}}
            className="folder-image"
            onClick={this.handleClick}
        ></button>;
    }

    handleClick(e) {
        const {pictures, picture} = this.props;
  
        localStorage.setItem('pictures', JSON.stringify(pictures));
  
        const encodedImageUrl = encodeURIComponent(picture.url);
        this.props.history.push(`/picture?path=${encodedImageUrl}`);
      }

  }

export default withRouter(Thumb);