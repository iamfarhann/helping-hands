import React from "react";
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../src/components/ProjectCard";
import Category from "../src/components/Category";
import RankingCard from "../src/components/RankingCard";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  testGrid: {
    backgroundColor: "orange"
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <Grid maxWidth="lg" gutterBottom>
        <img
          src="./landing.jpg"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Grid>
      <Typography variant="h3" gutterBottom align="center" gutterBottom>
        <br />
        Top Projects
        <br />
      </Typography>

      <Grid container spacing={4}>
        <Grid item md={3}>
          <ProjectCard />
        </Grid>
        <Grid item md={3}>
          <ProjectCard />
        </Grid>
        <Grid item md={3}>
          <ProjectCard />
        </Grid>
        <Grid item md={3}>
          <ProjectCard />
        </Grid>
      </Grid>
      <Grid>
        <Typography variant="h3" gutterBottom align="center" gutterBottom>
          <br />
          Fundraising Categories
          <br />
        </Typography>
        <Category />
      </Grid>
      <Grid spacing={10}>
        <RankingCard />
      </Grid>
    </Container>
  );
}
