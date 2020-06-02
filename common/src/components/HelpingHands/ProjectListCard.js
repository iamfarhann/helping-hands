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
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import LinearSlider from "./LinearSlider";
import FancySlider from "./fancySlider";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 100,
    // paddingTop: '56.25%', // 16:9
  },
}));

export default function ProjectCard({ data }) {
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
          <LinearSlider />
        </Box>
        <Typography variant="h6" component="h1" gutterBottom>
          {data.title}
        </Typography>

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
        <Box width={1} pt={1} height="100px">
          <Typography
            variant="body2"
            gutterBottom
            // style={{
            //   display: "-webkit-box",
            //   WebkitLineClamp: 5,
            //   WebkitBoxOrient: "vertical",
            //   overflow: "hidden",
            //   wordWrap: "break-word",
            // }}
          >
            {data.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
