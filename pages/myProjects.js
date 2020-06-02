import React, { Fragment } from "react";
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
import FundraiserSection from "../containers/Charity/ProjectOrganization";
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
  const [state, setState] = useState({
    price: "",
    currency: "Shaukat Khanum",
    policy: "oneTime",
  });

  const handleFormData = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleDonation = (e) => {
    e.preventDefault();
    console.log("Donation form data: ", state);

    setState({
      ...state,
      price: "",
    });
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
                        <ListItem button component="a" href="/account_o">
                          <ListItemIcon>
                            <AccountCircleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Account" />
                        </ListItem>
                        <Divider />
                        <ListItem button component="a" href="/addProject">
                          <ListItemIcon>
                            <BusinessCenterIcon />
                          </ListItemIcon>
                          <ListItemText primary="Add Project " />
                        </ListItem>
                        <Divider />
                        <ListItem button component="a" href="/myProjects">
                          <ListItemIcon>
                            <AssessmentIcon />
                          </ListItemIcon>
                          <ListItemText primary="Projects" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
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
                      <Grid item md={4}>
                        <FundraiserSection />
                      </Grid>
                      <Grid item md={4}>
                        <FundraiserSection />
                      </Grid>
                      <Grid item md={4}>
                        <FundraiserSection />
                      </Grid>
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
