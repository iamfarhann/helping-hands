import react from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";

import Head from "next/head";
import Navbar from "../containers/Charity/Navbar";
import HorizontalLinearStepper from "../common/src/components/HelpingHands/UpdateStepper";
import LinearSlider from "../common/src/components/HelpingHands/LinearSlider";
import ReviewCard from "../common/src/components/HelpingHands/ReviewCard";
import Avatar from "@material-ui/core/Avatar";
import DonorList from "../common/src/components/HelpingHands/DonorList";
import UpdateSlider from "../common/src/components/HelpingHands/UpdateSlider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventIcon from "@material-ui/icons/Event";
import LabelIcon from "@material-ui/icons/Label";

import Button from "../common/src/components/Button";
import { ThemeProvider } from "styled-components";

import Footer from "../containers/Charity/Footer";
import { charityTheme } from "../common/src/theme/charity";
import { ResetCSS } from "../common/src/assets/css/style";
import Sticky from "react-stickynode";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../containers/Charity/charity.style";
import Heading from "../common/src/components/Heading";

import Link from "next/link";
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

import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/fa/twitter";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";

import Text from "../common/src/components/Text";

import DrawerSection from "../containers/Charity/DrawerSection";

import { DrawerProvider } from "../common/src/contexts/DrawerContext";
export default function project() {
  return (
    <ThemeProvider theme={charityTheme}>
      <Head>
        <title>Project Page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#FCF22B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Load google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      {/* End of charity head section */}
      {/* Start charity wrapper section */}
      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar />
        </Sticky>
        <DrawerProvider>
          <DrawerSection />
        </DrawerProvider>
        <ContentWrapper>
          <Container
            style={{
              maxWidth: "1170px",
              minHeight: "100vh",
              paddingTop: "140px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Heading
                  as="h1"
                  content="Support needy people of Pakistan affected by COVID"
                />
              </Grid>

              <Grid container item md={8} spacing={1}>
                <Grid item md={12}>
                  <img
                    src="http://lorempixel.com/600/400"
                    height="400px"
                    width="100%"
                    style={{ borderRadius: 4 }}
                  />
                </Grid>
                <Grid
                  item
                  container
                  md={12}
                  spacing={2}
                  style={{ paddingRight: 0, margin: 0 }}
                >
                  <Grid item md={2}>
                    <img
                      src="http://lorempixel.com/600/400"
                      height="100px"
                      width="100%"
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src="http://lorempixel.com/600/400"
                      height="100px"
                      width="100%"
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src="http://lorempixel.com/600/400"
                      height="100px"
                      width="100%"
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src="http://lorempixel.com/600/400"
                      height="100px"
                      width="100%"
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src="http://lorempixel.com/600/400"
                      height="100px"
                      width="100%"
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src="http://lorempixel.com/600/400"
                      height="100px"
                      width="100%"
                      style={{ borderRadius: 4, objectFit: "cover" }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  md={12}
                  spacing={1}
                  alignItems="center"
                  style={{ paddingTop: "16px" }}
                >
                  <Grid item md={1}>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
                  </Grid>
                  <Grid item md={11}>
                    <Heading
                      content=" Akhuwat is organizing this fundraiser"
                      style={{ margin: "0px" }}
                      as="h3"
                    />
                  </Grid>
                  <Grid item md={12}>
                    <Divider />
                  </Grid>
                  <Grid container item md={6} spacing={1}>
                    <Grid item>
                      <EventIcon />
                    </Grid>
                    <Grid item>
                      <Text
                        color="#060F1E"
                        content="Created April 2nd, 2020"
                        style={{ margin: "0px" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item md={6} spacing={1}>
                    <Grid item>
                      <LabelIcon />
                    </Grid>
                    <Grid item>
                      <Text
                        color="#060F1E"
                        content="Education"
                        style={{ margin: "0px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item md={12}>
                  <Paper>
                    <Box width={1} p={2}>
                      <Heading
                        as="h3"
                        content="Description"
                        style={{ margin: "0px" }}
                      />
                      <Text
                        color="#060F1E"
                        content="
                        The academic world stands witness to several occasions
                        when Pakistani students stunned their peers,
                        international counterparts, and even their mentors by
                        not only acing but also setting unimaginably high
                        standards of success in numerous international
                        examinations and certifications. There is no doubt that
                        these success stories make us feel proud as a nation,
                        but more importantly, they also serve as a source of
                        motivation for people who want to use their skills for
                        the betterment of Pakistan. Rohayl Varind is one such
                        motivated and dedicated individual whose name is worth
                        mentioning when it comes to the select few humanitarians
                        that want to make a difference, academically. He is
                        credited with proposing and single-handedly bringing the
                        concept of Students Learning Under the Moon SLUM School
                        — the first ever Solar-Powered Night School in Pakistan
                        — to life. While the government of Pakistan is taking
                        every possible measure to promote education and ensure
                        that every child in Pakistan has unhindered access to
                        quality education, the private sector, including the
                        NGOs and NPOs operating in the country, have
                        historically always lent tremendous support to this
                        worthy cause. Two well-known and proven examples include
                        the many initiatives to promote education in Pakistan by
                        The Citizens Foundation and the ILM Possible campaign, a
                        joint effort by the EAC and the British Council in
                        Pakistan. Similarly, Ruhayl Varind — an award-winning
                        entrepreneur, social activist, and educationist — has
                        laid the foundations of something extraordinary for the
                        next generation in the form of a solar night school."
                      />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item md={12}>
                  <Paper>
                    <Box width={1} p={2}>
                      <Heading
                        as="h3"
                        content="Project Updates:"
                        style={{ margin: "0px" }}
                      />
                      <HorizontalLinearStepper />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              <Grid conatiner item md={4}>
                <Paper>
                  <Box p={2}>
                    <DonationProgressbar
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <BarArea>
                        <CurrentStatus>
                          <strong>$95</strong> of $2,000 goal
                        </CurrentStatus>
                        <Text content="" />
                      </BarArea>
                      <Heading
                        as="h5"
                        content="Raised by 10 people in 1 month"
                        style={{ fontSize: "18px" }}
                      />
                    </DonationProgressbar>

                    <a href="/project">
                      <Button
                        title="DONATE NOW"
                        variant="textButton"
                        style={{
                          marginTop: "18px",

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "100%",
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
                        title="SHARE"
                        variant="outlined"
                        style={{
                          marginTop: "5px",
                          marginBottom: "23px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "100%",
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

                    <Grid container alignItems="center" spacing={1}>
                      <Grid item md="12" style={{ paddingTop: "0px" }}>
                        <Divider />
                      </Grid>
                      <Grid item md={12}>
                        <DonorList />
                      </Grid>
                      <Grid item md={12} align="center">
                        <a href="/project">
                          <Button
                            title="See All"
                            style={{
                              marginTop: "18px",

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              minWidth: "auto",
                              height: "auto",
                              border: "0",
                              fontSize: "15px",
                              fontWeight: "700",
                              borderRadius: "30px",
                              cursor: "pointer",
                              color: "#FFFFFF",
                              backgroundColor: "#05B890",
                              position: "relative",
                              overflow: "hidden",
                              zIndex: "1",
                            }}
                          />
                        </a>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
                <Paper>
                  <Box p={1} m={2}>
                    <Typography variant="h6">Reviews</Typography>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <Grid item md={12} align="center">
                      <a href="/project">
                        <Button
                          title="See All"
                          style={{
                            marginTop: "18px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "auto",
                            height: "auto",
                            border: "0",
                            fontSize: "15px",
                            fontWeight: "700",
                            borderRadius: "30px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            backgroundColor: "#05B890",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "1",
                          }}
                        />
                      </a>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </ContentWrapper>
      </CharityWrapper>
    </ThemeProvider>
  );
}
