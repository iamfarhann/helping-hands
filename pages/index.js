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


const data = [
  {
    id: 123,
    name: "Akhuwat Foundation",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://source.unsplash.com/random",
    points: 84
  },
  {
    id: 124,
    name: "Edhi Foundation",
    description: "Edhi Description",
    img: "https://source.unsplash.com/random",
    points: 34
  },
  {
    id: 127,
    name: "Edhi Foundation",
    description: "Edhi Description",
    img: "https://source.unsplash.com/random",
    points: 34
  }
]

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
            {
              data.map(item=>{
                return(
                  <Grid item md={3} key={item.id}>
                    <ProjectCard data={item}/>
                  </Grid>
                );
              })
            }
            {/* <Grid item md={3}>
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
            </Grid> */}
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
