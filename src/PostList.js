import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";
import './App.css'



// const examplePost = [
//   {
//     name: "Kevin Ahn",
//     time: "3:00",
//     description: "Hello World, its my birthday!"
//   },
//   {
//     name: "Kevin Ahn",
//     time: "3:00",
//     description: "Hello World, its my birthday!"
//   },
//   {
//         name: "Kevin Ahn",
//         time: "3:00",
//         description: "Hello World, its my birthday!",
//     },
//     {
//         name: "Kevin Ahn",
//         time: "3:00",
//         description: "Hello World, its my birthday!",
//     },
// ];

function PostList(props) {
    console.log(props);
        return (
        <div className="postList">
            {props.postList.map((item) =>
             <Post { ...item} key={item.id}/>
            )}
        </div>
        );
    
}


PostList.propTypes = {
    postList: PropTypes.array
};

export default PostList;
