import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
    
        super(props);
    
        this.state = {
          doneAnimation: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      const {doneAnimation} = this.state;
      if(!doneAnimation) {
        setTimeout(() => {
          this.setState({
            doneAnimation: true
          });
        }, 10);
      }
    }

    render() {
      const {doneAnimation} = this.state;
      const {label, left, angle, i, children} = this.props;

      var style = {
        left: `${left}px`,
        transformOrigin: `-${left}px center`,
        transform: (doneAnimation) ? `rotate(${i*angle}deg)` : 'rotate(0deg)'
      };

      return <button
        type="button"
        className="button"
        style={style}
        onClick={this.handleClick}
      >{children}</button>;
    }

    handleClick(e) {
      this.props.callback();
    }

  }

  export default Button;