import React, { Component } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import AppBar from "./AppBar";


class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
      count: 0
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
    this.updateBadge = this.updateBadge.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newPostList = this.state.masterPostList.slice();
    newPostList.push(newPost);
    this.setState({ masterPostList: newPostList });
    this.updateBadge(newPostList.length);
  }

  updateBadge(length) {
    this.setState({ count: length });
  }

  render() {
    return <div>
        <AppBar count={this.state.count}/>
        <PostForm onNewPostCreation={this.handleAddingNewPost}  />
        <PostList postList={this.state.masterPostList} />
      </div>;
  }
}

export default Feed;