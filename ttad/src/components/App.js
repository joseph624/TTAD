import React, { Component } from 'react';
import 'css/App.css';
import Header from 'components/elements/Header';
import Leads from 'components/elements/Leads'
 
class App extends Component {
  render() {
    return (
      <div className="App">
  <Header />
{/*
  <div className="App-header-arrow">
  </div>

  <div className="arrow-down">
  </div> */}

  <Leads />
  </div>
 
 
 
    );
  }
}

export default App;
