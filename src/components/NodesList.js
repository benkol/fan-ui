import React, { Component } from 'react';
import PictureNodeButton from '../components/PictureNodeButton';
import FolderNodeButton from '../components/FolderNodeButton';
import axios from 'axios';
import './NodesList.css';

class NodesList extends Component {
    constructor(props) {
    
        super(props);
    
        this.state = {
            children: null,
            activeChild: null,
            error: null
        };

        this.handleFolderNodeClick = this.handleFolderNodeClick.bind(this);
        this.statusChanged = this.statusChanged.bind(this);
    }

    componentDidMount() {


        //const url = 'http://test.devsense.co.il/public/explorePictures'
        const url = 'http://34.240.128.157/public/explorePictures'
        //const url = 'http://localhost:3000/explorePictures.json'

        const config = {
            params: { path: this.props.path },
            headers: {'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456'}
        }

        this.statusChanged('RETRIEVING_DATA');
        axios.get(url, config)
            .then(result => {
                this.statusChanged('DATA_RETRIEVED');
                this.setState({
                    children: result.data.data.children
                });
            },
            (error) => {
                this.statusChanged('ERROR_RETRIEVING_DATA');
                this.setState({
                    error
                });
            });
    }

    render() {
        const {path, left} = this.props;
        const {error, children, activeChild} = this.state;

        if (error) {

            alert(error.message);
            return <div></div>;

          } else if (!children) {
              
            return <div></div>;

          } else {

            const iconWidth = 50;
            const listsPadding = 40;
            const iconsPadding = 10;

            const minLeft = left + iconWidth + listsPadding;
            const reqLeft = children.length * (iconWidth + iconsPadding) / (Math.PI / 2);
            const newLeft = (reqLeft > minLeft)? reqLeft : minLeft;

            const angle = ((iconWidth + iconsPadding) / (newLeft)) * 180 / Math.PI;

            const pictures = children.filter(function (child) {
                return child.type === 1;
            });

            return <ul className="nodes-list">
                {children.map((child, i) =>
                    <li key={i}>
                        {(child.type === 0) ?
                            <FolderNodeButton  path={path} label={child.label} left={newLeft} angle={angle} i={i}
                                activeChild={activeChild}
                                callback={this.handleFolderNodeClick}
                            />
                        :
                            <PictureNodeButton path={path} label={child.label} left={newLeft} angle={angle} i={i}
                                pictures={pictures}
                                url={child.url}
                            />
                        }
                    </li>
                )}
            </ul>;

          }
    }

    handleFolderNodeClick (i) {
        this.setState({
            activeChild: i
        });
    }

    statusChanged(status) {
        this.props.statusChanged(status);
    }
  }

  export default NodesList;