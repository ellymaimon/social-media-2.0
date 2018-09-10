import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";




const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

// function handleLike() {

// }

class PostCard extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      liked: false
    }
    // this.handleLike = this.handleLike.bind(this)
  }
  
  

  render() {
    const { classes } = this.props;
    return (<Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Name: {this.props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          Time: {this.props.time}
          </Typography>
        <Typography component="p">{this.props.description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
          <FavoriteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
    );

  }
}

PostCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,

};

export default withStyles(styles)(PostCard);