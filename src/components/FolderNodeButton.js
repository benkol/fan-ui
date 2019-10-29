import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button';
import NodesList from '../components/NodesList';
import './FolderNodeButton.css';

class FolderNodeButton extends Component {
    constructor(props) {
    
        super(props);
    
        this.state = {
          clicked: false,
          nodesListStatus: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.statusChanged = this.statusChanged.bind(this);
        //this.closeNodeList = this.closeNodeList.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
      if (props.i !== props.activeChild) {
        return {
          clicked: false
        };
      } else {
        return state;
      }
    }

    render() {
      const {label, path, left, angle, i} = this.props;
      const {clicked, nodesListStatus} = this.state;

      const newPath = `${path}/${label}`;

      let icon = faFolder;
      if (clicked) {
        icon = faFolderOpen;
      }
      if (nodesListStatus === 'RETRIEVING_DATA') {
        icon = faSpinner;
      }

      return <div className={`folderNode${ (clicked) ? ' open' : '' }`}>
        <Button label={this.props.label} callback={this.handleClick} left={left} angle={angle} i={i}>
          <FontAwesomeIcon icon={icon} size="lg" spin={(icon === faSpinner)} />
        </Button>
        { (clicked) ? <NodesList path={newPath} left={left} statusChanged={this.statusChanged} /> : null }
      </div>;
    }

    handleClick(e) {
      const {callback, i} = this.props;
      const {clicked} = this.state;

      this.setState({
        clicked: !clicked
      });

      callback(i);
    }

    statusChanged(status) {
      this.setState({
        nodesListStatus: status
      });
    }

    /*closeNodeList(i) {
      if (i !== this.props.i) {
        this.setState({
          clicked: false
        });
      }
    }*/

  }

  export default FolderNodeButton;