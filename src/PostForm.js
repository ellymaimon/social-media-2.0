import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from "uuid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


import './App.css'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
	iconSmall: {
		fontSize: 20,
	},
});


function PostForm(props) {
	const { classes } = props;

	function handlePostSubmission(event) {
		event.preventDefault();
		const name = event.target.elements.name.value;
		const description = event.target.elements.description.value;
		props.onNewPostCreation({name: name, time: makeTime(), 
			description: description, id: v4()});
	}

	function makeTime() {
		const time = Date();
		return time;
	}

	return <div className="postForm">
      <Paper>
        <form onSubmit={handlePostSubmission}>
          <TextField id="name" placeholder="Name" name="name" />
          <br />
          <TextField id="description" label="Post" placeholder="How are you feeling?" margin="normal" name="description"/>
          <Button type="submit" variant="fab" color="secondary" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Button>
          {/* <button type="submit">Create Post</button> */}
        </form>
      </Paper>
    </div>;
}

PostForm.propTypes = {
	onNewPostCreation: PropTypes.func
};

export default withStyles(styles)(PostForm);