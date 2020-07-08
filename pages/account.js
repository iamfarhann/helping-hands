import React, { Fragment, useEffect } from "react";
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
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Button from "../common/src/components/Button";
import Heading from "../common/src/components/Heading";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import PasswordField from "material-ui-password-field";

import InputGroup from "../common/src/components/InputGroup";
import RadioGroup from "../common/src/components/RadioGroup";
import SectionWrapper, {
  ContentArea,
  ButtonGroup,
  DonationForm,
  DonateButton,
} from "../containers/Charity/donateSection/donateSection.style";
import { addCredits, currencyOptions } from "../common/src/data/Charity";

import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useData, useDispatchUser } from "../lib/userData";

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
  const router = useRouter();
  const dispatch = useDispatchUser();
  const donor = useData();

  const [state, setState] = useState({
    price: "",
    currency: "usd",
    policy: "oneTime",
  });
  useEffect(() => {
    console.log(donor, "donor");
  }, [donor]);
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
  const handleLogout = () => {
    console.log("logout called");
    cookie.remove("token");
    // client.resetStore();
    dispatch({ type: "LOGOUT", payload: {} });
    router.push("/");
  };

  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>My Account | Esaar</title>
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
                        <ListItem button component="a" href="/account">
                          <ListItemIcon>
                            <AccountCircleIcon />
                          </ListItemIcon>
                          <ListItemText primary="My Profile" />
                        </ListItem>
                        <Divider />
                        <ListItem button component="a" href="/portfolio">
                          <ListItemIcon>
                            <BusinessCenterIcon />
                          </ListItemIcon>
                          <ListItemText primary="Portfolio " />
                        </ListItem>
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
                <Paper style={{ height: "125vh" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading content="Profile" color="#05B890" /> <Divider />
                    <Grid container>
                      <Grid item md={5} style={{ marginTop: "30px" }}>
                        <Heading
                          content="User Name"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="First Name"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                        <Heading
                          content="Mobile Number"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                        <Heading
                          content="Password"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <PasswordField
                          hintText="At least 8 characters"
                          floatingLabelText="Enter your password"
                          errorText="Your password is too short"
                          fullWidth
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={1} />
                      <Grid item md={5} style={{ marginTop: "30px" }}>
                        <Heading
                          content="Email ID"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Last Name"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                        <Heading
                          content="CNIC"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        md={12}
                        style={{ alignContent: "center" }}
                      >
                        <a href="/project">
                          <Button
                            title="Save Changes"
                            variant="textButton"
                            style={{
                              marginTop: "20px",
                              marginLeft: "230px",

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
                      </Grid>
                    </Grid>
                    <Grid item md={12} style={{ marginTop: "30px" }}>
                      <Heading content="Wallet" color="#05B890" />
                      <Divider />
                      <Heading
                        content="Your Balance"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />{" "}
                      {/* FIXME: Color of text fields */}
                      <TextField
                        id="outlined-basic"
                        label="PKR 560"
                        variant="outlined"
                        size="small"
                        style={{ color: "#05B890", marginBottom: "30px" }}
                        fullWidth
                      />
                      <RadioGroup
                        name="radioGroup"
                        value={state.policy}
                        items={addCredits}
                        onUpdate={(value) => handleFormData(value, "policy")}
                      />
                      <a href="/project">
                        <Button
                          title="Add Credits"
                          variant="textButton"
                          style={{
                            marginTop: "30px",
                            marginLeft: "230px",

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
