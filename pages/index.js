import React from "react";
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
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
    <Container maxWidth="xl" style={{ minHeight: "100vh", padding: 0 }}>
      <Grid container style={{ paddingBottom: 20 }}>
        <Grid
          item
          container
          md={12}
          style={{
            backgroundImage: `url(${"./landing.jpg"})`,
            backgroundSize: "cover",
            minHeight: "650px"
          }}
        >
          <Grid item md={8} justify="flex-end" alignItems="center">
            <Box width={1} mx={15} my={20}>
              <Typography
                gutterBottom
                variant="h2"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Pakistan's First <br />
                Micro-Donation Platform <br />
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "white", fontWeight: "bold" }}
              >
                Through the power of giving, we make the world a better place.
                Join today in our <br />
                effort to make someone feel blessed today.
                <br />
                <br />
              </Typography>
              <Button size="medium" variant="contained" color="primary">
                Dontate Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item md={12}>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Top Projects
            </Typography>
          </Grid>
          <Grid item container spacing={4} md={12}>
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
          <Grid item md={12}>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Fundraising Categories
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Category />
          </Grid>
          <Grid
            item
            md={12}
            style={{
              minHeight: "500px"
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Top Organizations
            </Typography>
            <RankingCard />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
