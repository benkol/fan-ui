import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';
import './PictureNodeButton.css';

class PictureNodeButton extends Component {
    constructor(props) {
    
        super(props);
    
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
      const {label, left, angle, i} = this.props;
      return <div className="pictureNode">
        <Button label={this.props.label} callback={this.handleClick} left={left} angle={angle} i={i}>
          <FontAwesomeIcon icon={faImage} size="lg" />
        </Button>
      </div>;
    }

    handleClick(e) {
      const {url, pictures} = this.props;

      localStorage.setItem('pictures', JSON.stringify(pictures));

      const encodedImageUrl = encodeURIComponent(url);

      this.props.history.push(`/picture?path=${encodedImageUrl}`);
    }

  }

export default withRouter(PictureNodeButton);