import React, { Component } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';


class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newPostList = this.state.masterPostList.slice();
    newPostList.push(newPost);
    this.setState({ masterPostList: newPostList });
  }

  render() {
    return (
      <div>
        <PostForm onNewPostCreation={this.handleAddingNewPost}/>
        <PostList postList={this.state.masterPostList}/>
      </div>
    );
  }
}

export default Feed;