import React, { Component } from 'react';
import Post from './Post';


const examplePost = [
  {
    name: "Kevin Ahn",
    time: "3:00",
    description: "Hello World, its my birthday!"
  },
  {
    name: "Kevin Ahn",
    time: "3:00",
    description: "Hello World, its my birthday!"
  },
  {
        name: "Kevin Ahn",
        time: "3:00",
        description: "Hello World, its my birthday!",
    },
    {
        name: "Kevin Ahn",
        time: "3:00",
        description: "Hello World, its my birthday!",
    },
];

class PostList extends Component {
    render() {
        return (
        <div >
            {examplePost.map((item, index) =>
            <div>
             <Post { ...item} key={index}/>
             <br />
             </div>
            )}
        </div>
        );
    }
}

export default PostList;
