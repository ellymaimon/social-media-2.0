import React, { Component } from 'react';
import PostList from './PostList';
import './App.css';

class App extends Component {
  render() {
    return <div className="container">
        {/* <Feed> */}
        <div className="post">
          <PostList />
          {/* </Feed> */}
        </div>
      </div>;
  }
}

export default App;
