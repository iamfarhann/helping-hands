import React, { Fragment } from "react";
import { useState } from "react";

import Link from "next/link";
import Image from "../common/src/components/Image";
const heartImage = "/image/charity/heart-alt.svg";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "../common/src/theme/charity";
import { ResetCSS } from "../common/src/assets/css/style";
import { DrawerProvider } from "../common/src/contexts/DrawerContext";
import Navbar from "../containers/Charity/Navbar";
import DrawerSection from "../containers/Charity/DrawerSection";
import Footer from "../containers/Charity/Footer";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../containers/Charity/charity.style";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Heading from "../common/src/components/Heading";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useRouter } from "next/router";
import { useData, useDispatchUser } from "../lib/userData";
import ProjectCard from "../containers/Charity/ProjectOrganization";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default () => {
  const classes = useStyles();
  const { query } = useRouter();
  const organization = useData();
  const dispatch = useDispatchUser();

  const handleLogout = () => {
    console.log("logout called");
    cookie.remove("token");

    dispatch({ type: "LOGOUT", payload: {} });

    window.location = "/";
  };

  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>My Projects | Esaar</title>
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
          <ContentWrapper>
            <Grid
              container
              style={{
                maxWidth: "1170px",
                minHeight: "100vh",
                paddingTop: "140px",
                marginLeft: "170px",
              }}
            >
              <Grid item md={3}>
                <Paper style={{ height: "90vh" }}>
                  <Container style={{ padding: "40px" }}>
                    <div className={classes.root}>
                      <List component="nav" aria-label="main mailbox folders">
                        <Link href="/account">
                          <ListItem button>
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                          </ListItem>
                        </Link>
                        <Divider />
                        <Link href="/portfolio">
                          <ListItem button>
                            <ListItemIcon>
                              <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio " />
                          </ListItem>
                        </Link>
                        <Divider />
                        <ListItem button component="a" href="/pastProject">
                          <ListItemIcon>
                            <AssessmentIcon />
                          </ListItemIcon>
                          <ListItemText primary="Past Projects" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleLogout}>
                          <ListItemIcon>
                            <PowerSettingsNewIcon />
                          </ListItemIcon>
                          <ListItemText primary="Logout" />
                        </ListItem>
                      </List>
                    </div>
                  </Container>
                </Paper>
              </Grid>
              <Grid item md={8} style={{ marginLeft: "30px" }}>
                <Paper style={{ height: "150vh" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading content="Past Projects" color="#05B890" />{" "}
                    <Divider />
                    {/* <BlogPost
                      thumbUrl="http://lorempixel.com/600/400"
                      title="Help COVID patients"
                      excerpt="The academic world stands witness to several occasions when Pakistani students stunned their peers, international counterparts, and even their mentors by not only acing but also setting unimaginably high standards of success in numerous international examinations and certifications. "
                      link={
                        <a>
                          <span className="hyphen"></span>
                          <span className="btn_text">Add</span>
                        </a>
                      }
                    /> */}
                    <Grid container>
                      {organization["id"]
                        ? organization.projects.map((project) => {
                            return (
                              <Grid item md={4} key={project.id}>
                                <ProjectCard project={project} />
                              </Grid>
                            );
                          })
                        : null}
                    </Grid>
                  </Container>
                </Paper>
              </Grid>
            </Grid>
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
