import React from "react";
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Divider
} from "@material-ui/core";
import HouseIcon from "@material-ui/icons/House";
import { borders } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../src/components/ProjectCard";
import Category from "../src/components/Category";
import RankingCard from "../src/components/RankingCard";
import FancySlider from "../src/components/fancySlider";
import LinearSlider from "../src/components/LinearSlider";
import ScrollableTabsButtonForce from "../src/components/Tabs";
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

export default function Organization() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" style={{ minHeight: "100vh", padding: 0 }}>
      <Grid container style={{ paddingBottom: 50, paddingLeft: 0 }}>
        <Grid
          item
          container
          md={12}
          style={{
            backgroundImage: `url(${"khawajasira-banner.jpg"})`,
            backgroundSize: "cover",
            minHeight: "425px"
          }}
        ></Grid>

        <Grid item md={4}>
          <Box width={1} px={20} my={-10}>
            <Paper square variant="outlined">
              <img
                src="./logo_organization.png"
                height="150px"
                width="175px"
                style={{
                  borderRadius: "4px",
                  objectFit: "cover",
                  cursor: "pointer"
                }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Grid container style={{ background: "#F2F2F2" }} spacing={2}>
        <Grid item md={8}>
          <Box px={20} py={5}>
            <Typography variant="h4" style={{ marginBottom: 10 }}>
              Akhuwat
            </Typography>
            <Typography variant="body1">
              Akhuwat is world's largest interest free microfinance organization
              which envisions a poverty free society built on the principles of
              compassion.
            </Typography>
            <Box py={2} width={300}>
              <LinearSlider />
            </Box>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Button
            size="small"
            variant="contained"
            fullWidth
            color="primary"
            style={{ marginBottom: 10, marginTop: 55 }}
          >
            Dontate Now
          </Button>
          <Button size="small" variant="contained" fullWidth color="secondary">
            Favorite
          </Button>
        </Grid>
        <Grid container item md={12}>
          <Box px={20}>
            <Paper>
              <ScrollableTabsButtonForce />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        container
        md={12}
        style={{
          background: "#F2F2F2",
          minHeight: "100px"
        }}
      ></Grid>
    </Container>
  );
}
