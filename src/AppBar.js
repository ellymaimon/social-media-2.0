import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

import './App.css'

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {

    return <div>
        <AppBar position="static" color="default">
          <Toolbar className="navBar">
            <Typography variant="title" color="inherit">
              Kevin-book
            </Typography>
            <Badge badgeContent={props.count} color="primary">
              <MailIcon />
            </Badge>
          </Toolbar>
        </AppBar>
      </div>;
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number
};

export default withStyles(styles)(SimpleAppBar);