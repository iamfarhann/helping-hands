import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PetsIcon from "@material-ui/icons/Pets";
import BrushIcon from "@material-ui/icons/Brush";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PublicIcon from "@material-ui/icons/Public";
import HouseIcon from "@material-ui/icons/House";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function Category() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Grid container>
      <Grid item md={3}>
        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Health & Welleness" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Pets & Animals" />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={3}>
        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary="Arts & Culture" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Pets & Animals" />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={3}>
        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <SportsBasketballIcon />
            </ListItemIcon>
            <ListItemText primary="Sports" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccessibleIcon />
            </ListItemIcon>
            <ListItemText primary="Disability" />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={3}>
        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="International Aid" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary="Local Community" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
