import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from "../src/components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  testGrid: {
    backgroundColor: "orange",
  }
}));


export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{minHeight:"90vh"}}>
      <Grid container  spacing={2}>
        <Grid item md={3} >
          <ProjectCard/>
        </Grid>
        <Grid item md={3} >
          <ProjectCard/>
        </Grid>
        <Grid item md={3} >
          <ProjectCard/>
        </Grid>
        <Grid item md={3} >
          <ProjectCard/>
        </Grid>
       
      </Grid>

    </Container>
  );
}
