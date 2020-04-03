import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Grid,Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PetsIcon from "@material-ui/icons/Pets";
import LinearSlider from "./LinearSlider"

const useStyles = makeStyles({
  root: {
    minWidth: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function RankingCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper>
    <Grid container>
          <Grid item md={3} >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText disableTypography >
                  <Box width={1}>
                    <Typography variant="body1" gutterBottom>
                      Shukat Khanam
                    </Typography>
                    <LinearSlider/>
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText primary="Edhi Foundation" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText primary="Sahara Trust" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText primary="SOS Children Village" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText primary="FIF Foundation" />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={9}>
            <Typography variant="body1" gutterBottom>
              Top Projects
            </Typography>
          </Grid>
    </Grid>
    </Paper>
  );
}
