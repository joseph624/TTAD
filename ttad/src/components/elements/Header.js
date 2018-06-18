import React, { Component } from 'react';
import { Button } from 'reactstrap';
 

class Header extends Component {
  render() {
    return (
 
        <div className="App-header"> 
          <p className="App-title">TTAD</p>
          <div>
          			<Button className="btn-outline" color="primary"></Button>{' '}
          			</div>


      </div>
    );
  }
}

export default Header;
