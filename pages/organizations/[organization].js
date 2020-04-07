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
import {useRouter} from "next/router";
// import ProjectCard from "../../src/components/ProjectCard";
// import Category from "../src/components/Category";
// import RankingCard from "../src/components/RankingCard";
// import FancySlider from "../src/components/fancySlider";
import LinearSlider from "../../src/components/LinearSlider";
import ScrollableTabsButtonForce from "../../src/components/Tabs";

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
  const { query } = useRouter();

  console.log(query);

  return (
    <Container maxWidth="xl" style={{ minHeight: "100vh", padding: 0,background: "#F2F2F2", }}>
      <Grid container >
        <Grid
          item
          container
          md={12}
          
          // style={{
          //   backgroundImage: `url(${"/khawajasira-banner.jpg"})`,
          //   backgroundSize: "cover",
          //   minHeight: "425px"
          // }}
        >
          <Box width={1} position="relative">
          <img src="/khawajasira-banner.jpg" style={{objectFit:"cover",width:"100%",height:"425px",display:"block"}}/>
            <Box  position="absolute" bottom="-55px" left="145px">
                <img
                  src="/logo_organization.png"
                  height="150px"
                  width="175px"
                  style={{
                    borderRadius: "4px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="lg" style={{  paddingTop: 64 }}>
      <Grid container  spacing={2} alignItems="flex-start">
        <Grid item md={6}>
            <Typography variant="h4" style={{ marginBottom: 10 }}>
              {query.organization}
            </Typography>
            <Typography variant="body1">
              Akhuwat is world's largest interest free microfinance organization
              which envisions a poverty free society built on the principles of
              compassion.
            </Typography>
            <Box py={2} width={300}>
              <LinearSlider />
            </Box>
        </Grid>
        <Grid container item md={6} justify="flex-end" spacing={2}>
          <Grid item >
          <Button
            size="small"
            variant="contained"
            // fullWidth
            color="primary"
            // style={{ marginBottom: 10, marginTop: 55 }}
          >
            Dontate Now
          </Button>
          </Grid>
          <Grid item>
          <Button size="small" variant="contained"  color="secondary">
            Favorite
          </Button>
          </Grid>
        </Grid>
        <Grid item md={12}>
              <ScrollableTabsButtonForce />
        </Grid>
      </Grid>
      </Container>
      
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
