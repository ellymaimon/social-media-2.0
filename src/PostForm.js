import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from "uuid";

function PostForm(props) {
	let _name = null;
	let _description = null;

	function handlePostSubmission(event) {
		event.preventDefault();
		props.onNewPostCreation({name:_name.value, time: makeTime(), description:_description.value, id: v4()})
	}

	function makeTime() {
		const time = Date();
		return time;
	}

	return <div>
      <form onSubmit={handlePostSubmission}>
        <input type="text" id="name" placeholder="Your name" ref={input => {
            _name = input;
          }} />
        <textarea id="description" placeholder="Describe your issue." ref={textarea => {
            _description = textarea;
          }} />
        <button type="submit">Create Post</button>
      </form>
    </div>;
}

PostForm.propTypes = {
	onNewPostCreation: PropTypes.func

};

export default PostForm;