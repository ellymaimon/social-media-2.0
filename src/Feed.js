import React, { Component } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';


class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newPostList: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newPostList = this.state.newPostList.slice();
    newPostList.push(newPost);
    this.setState({ masterTicketList: newPostList });
  }

  render() {
    return (
      <div>
        <PostForm onNewPostCreation={this.handleAddingNewPost}/>
        <PostList />
      </div>
    );
  }
}

export default Feed;