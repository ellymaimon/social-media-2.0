import React, { Component } from 'react';
import Feed from './Feed';
import './App.css';
import AppBar from './AppBar'

class App extends Component {
  render() {
    return <div className="container">
    <AppBar/>
    <Feed/>
    </div>

  }
}

export default App;
