import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import kevin from "./images/kevin.jpeg"

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
  bigAvatar: {
    width: 60,
    height: 60,
  },
};



class PostCard extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      liked: false
    }
    this.handleLike = this.handleLike.bind(this)
  }

  handleLike() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  };
  
  

  render() {
    const { classes } = this.props;
    let color = "inherit";
    if (this.state.liked) {
      color="secondary";
    }
    
    return <div className="postItem">
        <Card className={classes.card}>
          <CardContent>
          <Avatar alt="Remy Sharp" src={kevin} className={classes.bigAvatar} />
            <Typography className={classes.title} color="textSecondary">
            {this.props.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Time: {this.props.time}
            </Typography>
            <Typography component="p">{this.props.description}</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <FavoriteIcon color={color} onClick={this.handleLike} />
            </IconButton>
          </CardActions>
        </Card>
      </div>;

  }
}

PostCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,

};

export default withStyles(styles)(PostCard);