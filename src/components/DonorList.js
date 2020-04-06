import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
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
          primary="Ovais Basit"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 120
              </Typography>
              {" — yesterday"}
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
          primary="Mahad Ahmad"
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
              {" — 2d ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{" "}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="A" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Anonymous"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 1000
              </Typography>
              {" — 4d ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{" "}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Fatimah Zafar" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Fatimah Zafar"
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
              {" — 5d ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{" "}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Noor"
            src="https://picsum.photos/200
"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Noor Fatimah"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Rs. 35
              </Typography>
              {" — 6d ago"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
