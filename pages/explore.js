import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Text from "../common/src/components/Text";
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
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import CommentIcon from "@material-ui/icons/Comment";
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

import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { UPDATE_DONOR } from "../lib/mutations";
import { GET_PROJECTS } from "../lib/queries";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import TagSelection from "../containers/Charity/Tags/tagSelection";

import CircularProgress from "@material-ui/core/CircularProgress";
import ProjectCard from "../containers/Charity/Project";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [getProjects, { data, loading, error, refetch }] = useLazyQuery(
    GET_PROJECTS
  );

  useEffect(() => {
    console.log(data);
    if (!data) {
      getProjects({
        variables: {
          where: {},
          sort: "createdAt:desc",
          limit: 10,
          start: 0,
        },
      });
    }
  }, [data]);
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
            <Container
              maxWidth="lg"
              style={{
                marginTop: "140px",
                height: "100%",
                paddingBottom: "40px",
              }}
            >
              <Grid container alignItems="flex-start" spacing={4}>
                <Grid item md={3}>
                  <Paper style={{ height: "90vh" }}>
                    <Container style={{ padding: "20px" }}>
                      <div className={classes.root}>
                        <Text
                          content="Explore projects by categories:"
                          style={{ fontSize: "20px" }}
                        />
                        <Checkbox checked={true} />
                      </div>
                    </Container>
                  </Paper>
                </Grid>

                {data ? (
                  <Grid container item md={9} spacing={4}>
                    {data.projects.map((project) => {
                      return (
                        <Grid item md={4} key={project.id}>
                          <Paper>
                            <ProjectCard project={project} />
                          </Paper>
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  <Grid
                    container
                    item
                    md={8}
                    justify="center"
                    alignItem="center"
                    spacing={4}
                  >
                    <Grid item md={2}>
                      <CircularProgress color="secondary" />
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Container>
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
