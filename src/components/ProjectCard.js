import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Divider,
  Button,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FancySlider from "./fancySlider";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 256
    // paddingTop: '56.25%', // 16:9
  }
}));

const marks = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];

function valuetext(value) {
  return `${value}°C`;
}

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="Paella dish"
      />
      <CardContent>
        <Box width={1}>
          <FancySlider  />
        </Box>
        <Typography variant="h6" component="h1" gutterBottom>
          Brick Kiln School
        </Typography>

        <Grid container spacing={1}>
          <Grid item md={11}>
            <Typography variant="body2" gutterBottom>
              Edhi Foundation
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
        <Divider style={{ marginBottom: "4px" }} />
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Typography variant="body2" gutterBottom>
              Location
            </Typography>
          </Grid>
          <Grid item md={6} justify="flex-start">
            <Typography variant="body2">
              <RoomIcon fontSize="inherit" />
              Lahore,Pakistan
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" gutterBottom>
          <br />
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" fullWidth color="primary">
          Dontate Now
        </Button>
      </CardActions>
    </Card>
  );
}
