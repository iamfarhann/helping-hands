import React, { Fragment } from "react";
import { useState } from "react";
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

import { DropzoneArea } from "material-ui-dropzone";

import InputGroup from "../common/src/components/InputGroup";
import RadioGroup from "../common/src/components/RadioGroup";
import SectionWrapper, {
  ContentArea,
  ButtonGroup,
  DonationForm,
  DonateButton,
} from "../containers/Charity/donateSection/donateSection.style";
import { addCredits, currencyOptions } from "../common/src/data/Charity";
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
    currency: "usd",
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
          <title>Sign Up | Esaar</title>
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
              <Grid item md={2}></Grid>
              <Grid item md={8} style={{ marginLeft: "30px" }}>
                <Paper style={{ height: "170vh" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading
                      content="Register your organization"
                      color="#05B890"
                    />{" "}
                    <Divider />
                    <Grid container>
                      <Grid item md={5} style={{ marginTop: "30px" }}>
                        <Heading
                          content="Organization Name"
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
                          content="Focal Person"
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
                          content="Registration Number"
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
                          content="Contact Number"
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
                          content="Address"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          multiline
                          rows={6}
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid item md={12} style={{ marginTop: "30px" }}>
                      <Heading content="Documents" color="#05B890" />
                      <Divider />
                      <Heading
                        content="Registration Certificate"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        dropzoneText={"Drag and drop images here or click"}
                        onChange={(files) => console.log("Files:", files)}
                      />
                      <Heading
                        content="Tax Exemption Form"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        dropzoneText={"Drag and drop images here or click"}
                        onChange={(files) => console.log("Files:", files)}
                      />
                      <Grid
                        container
                        item
                        md={12}
                        style={{ alignContent: "center" }}
                      >
                        <a href="/account_o">
                          <Button
                            title="Create Account"
                            variant="textButton"
                            style={{
                              marginTop: "20px",
                              marginLeft: "250px",

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
