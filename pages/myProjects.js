import React, { Fragment } from "react";
import Link from "next/link";
import { useState } from "react";
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
import Project from "../containers/Charity/ProjectOrganization";

import { useData, useDispatchUser } from "../lib/userData";

import cookie from "js-cookie";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default () => {
  const classes = useStyles();
  const organization = useData();
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
                        <Link href="/account_o">
                          <ListItem button>
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                          </ListItem>
                        </Link>
                        <Divider />
                        <Link href="/addProject">
                          <ListItem button>
                            <ListItemIcon>
                              <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Project " />
                          </ListItem>
                        </Link>
                        <Divider />
                        <Link href="/myProjects">
                          <ListItem button>
                            <ListItemIcon>
                              <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                          </ListItem>
                        </Link>
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
                <Paper style={{ height: "100%" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading content="Past Projects" color="#05B890" />{" "}
                    <Divider />
                    {organization
                      ? organization.projects.map((project) => {
                          return (
                            <Grid item md={4} key={project.id}>
                              <Project project={project} />
                            </Grid>
                          );
                        })
                      : null}
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
