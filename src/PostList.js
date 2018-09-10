import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";
import './App.css'

function PostList(props) {
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
