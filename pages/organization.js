import React, { Fragment } from "react";
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
import HouseIcon from "@material-ui/icons/House";
import { borders } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../common/src/components/HelpingHands/ProjectCard";
import Category from "../common/src/components/HelpingHands/Category";
import RankingCard from "../common/src/components/HelpingHands/RankingCard";
import FancySlider from "../common/src/components/HelpingHands/fancySlider";
import LinearSlider from "../common/src/components/HelpingHands/LinearSlider";
import ScrollableTabsButtonForce from "../common/src/components/HelpingHands/Tabs";
import Navbar from "../containers/Charity/Navbar";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../containers/Charity/charity.style";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { ResetCSS } from "../common/src/assets/css/style";
import { charityTheme } from "../common/src/theme/charity";
import Text from "../common/src/components/Text";
import Heading from "../common/src/components/Heading";

import DrawerSection from "../containers/Charity/DrawerSection";

import { DrawerProvider } from "../common/src/contexts/DrawerContext";
import Footer from "../containers/Charity/Footer";
import Button from "../common/src/components/Button";
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
} from "../containers/Charity/FundraiserSection/fundraiserSection.style";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  testGrid: {
    backgroundColor: "orange",
  },
}));

export default function Organization() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>Organization Page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#FCF22B" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <Container maxWidth="xl" style={{ minHeight: "100vh", padding: 0 }}>
            <Grid container style={{ paddingLeft: 0 }}>
              <Grid
                item
                container
                md={12}
                style={{
                  backgroundImage: "/image/charity/organization.jpg",
                  backgroundSize: "cover",

                  minHeight: "525px",
                }}
              ></Grid>

              <Grid item md={4}>
                <Box width={1} px={20} my={-10}>
                  {" "}
                  <img
                    src="http://lorempixel.com/175/175"
                    height="150px"
                    width="175px"
                    style={{
                      borderRadius: "4px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ background: "#F2F2F2", paddingTop: "50px" }}
              spacing={2}
            >
              <Grid
                item
                md={8}
                style={{ marginLeft: "160px", marginTop: "50px" }}
              >
                <Heading
                  as="h1"
                  style={{ marginBottom: 10 }}
                  content="Akhuwat"
                />
                <Text
                  content="Akhuwat is world's largest interest free microfinance
                  organization which envisions a poverty free society built on
                  the principles of compassion."
                />
              </Grid>
              <Grid container style={{ marginLeft: "165px" }}>
                <Grid item md={7} style={{ display: "flex" }}>
                  <a href="/project">
                    <Button
                      title="Add to Protfolio"
                      variant="textButton"
                      style={{
                        marginTop: "0px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "200px",
                        height: "auto",
                        border: "0",
                        fontSize: "15px",
                        fontWeight: "700",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "#FFFFFF",
                        backgroundColor: "#05B890",
                        position: "relative",
                        overflow: "hidden",
                        zIndex: "1",
                      }}
                    />
                  </a>
                  <a href="/project">
                    <Button
                      title="Contact"
                      variant="outlined"
                      style={{
                        marginTop: "0px",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "200px",
                        height: "auto",
                        border: "1",
                        borderColor: "#3E2672",
                        fontSize: "15px",
                        fontWeight: "700",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "#060F1E",

                        position: "relative",
                        overflow: "hidden",
                        zIndex: "1",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  md={5}
                  style={{ paddingLeft: "50px", paddingRight: "-20px" }}
                >
                  <DonationProgressbar
                    style={{
                      width: "115%",
                      marginTop: "10px",
                      marginBottom: "0px",
                    }}
                  >
                    <BarArea style={{ margin: "0px", padding: "0px" }}>
                      <CurrentStatus style={{ margin: "0px" }}>
                        <strong>86%</strong> on transparency scale
                      </CurrentStatus>
                      <Text content="" />
                    </BarArea>
                    {/* <Heading
                      as="h5"
                      content="Raised by 10 people in 1 month"
                      style={{ fontSize: '18px' }}
                    /> */}
                  </DonationProgressbar>
                </Grid>
              </Grid>

              <Grid container item md={12} style={{ marginTop: "20px" }}>
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
                minHeight: "100px",
              }}
            ></Grid>
          </Container>
          <Footer />
        </CharityWrapper>
      </Fragment>
    </ThemeProvider>
  );
}
