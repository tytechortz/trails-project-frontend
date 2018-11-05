import React, { Component } from 'react';
import './App.css';
import TrailContainer from './TrailContainer/trailContainer';
import NavBarContainer from './NavBarContainer/Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <TrailContainer />
      </div>
    );
  }
}

export default App;
