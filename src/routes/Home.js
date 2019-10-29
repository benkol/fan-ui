import React, { Component } from 'react';
import FolderNodeButton from '../components/FolderNodeButton';
//import './Home.css';

class Home extends Component {
    constructor(props) {
    
        super(props);
    
        this.state = {
        };

    }

    render() {
      return <FolderNodeButton  path="" label="root" left={0} angle={0} i={0} activeChild={0} callback={()=>{}} />;
    }
  }

  export default Home;