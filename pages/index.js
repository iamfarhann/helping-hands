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
    <Container maxWidth="xl" style={{ minHeight: "100vh",padding:0 }}>

      <Grid container  alignItems="flex-start" style={{ paddingBottom:20 }}>
        <Grid item md={12} style={{backgroundImage:`url(${"./landing.jpg"})`,backgroundSize:"cover",minHeight:"500px"}}>
          <Box width={1} >
            <Typography variant="h3" style={{color:"white"}}>
              hello
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="lg" >
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item md={12}>
          <Typography variant="h3" gutterBottom align="center" >
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
          <Typography variant="h3" gutterBottom align="center">
            Fundraising Categories
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Category />
        </Grid>
        <Grid item md={12}>
          <RankingCard />
        </Grid>
      </Grid>
      </Container>
    </Container>
  );
}
