import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/200
"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Akhuwat Foundation"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 100
              </Typography>
              {' — monthly'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/200
"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Shaukat Khanum"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 50
              </Typography>
              {' — monthly'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{' '}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="A" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Edhi Foundation"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 100
              </Typography>
              {' — monthly'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{' '}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="S" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SOS Childeren Village"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 70
              </Typography>
              {' — once'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{' '}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Noor"
            src="https://picsum.photos/200
"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Bunyad Foundation"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 30
              </Typography>
              {' — once'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
