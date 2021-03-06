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
  Hidden,
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

import { addCredits, currencyOptions } from "../common/src/data/Charity";

import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useData, useDispatchUser } from "../lib/userData";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { UPDATE_DONOR } from "../lib/mutations";
import { GET_PROJECTS, GET_TAG_NAMES } from "../lib/queries";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import TagSelection from "../containers/Charity/Tags/tagSelection";

import CircularProgress from "@material-ui/core/CircularProgress";
import ProjectCard from "../containers/Charity/Project";

import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default () => {
  const classes = useStyles();
  const [selectedTag, setSelectedTag] = useState([]);
  const [fetched, setFetch] = useState(true);
  const { query } = useRouter();

  const {
    data: allTags,
    loading: tagLoading,
    error: tagError,
    refetch: tagRefetch,
  } = useQuery(GET_TAG_NAMES);
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

    if (!data && fetched && !query["tag"]) {
      getProjects({
        variables: {
          where: {},
          sort: "createdAt:desc",
          limit: null,
          start: 0,
        },
      });
      setFetch(false);
    }
    if (!data && fetched && query["tag"]) {
      getProjects({
        variables: {
          where: { tags_in: [query.tag] },
          sort: "createdAt:desc",
          limit: null,
          start: 0,
        },
      });
      setFetch(false);
    }
  }, [data, query]);
  const handleFilter = () => {
    //console.log("Handle Filter:", selectedTag,{});

    if (selectedTag.length) {
      console.log("if");
      getProjects({
        variables: {
          where: { tags_in: selectedTag.map((tag) => tag.id) },
          sort: "createdAt:desc",
          limit: null,
          start: 0,
        },
      });
    } else {
      console.log("else");
      getProjects({
        variables: {
          where: {},
          sort: "createdAt:desc",
          limit: null,
          start: 0,
        },
      });
    }
  };
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>Explore Projects | Esaar</title>
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
              <Grid item style={{ marginBottom: "20px" }} md={12}>
                <img
                  src="/image/charity/recommended.jpg"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "400px",
                  }}
                />
              </Grid>
              <Grid item style={{ marginBottom: "20px" }} md={12}>
                <Heading
                  content="Explore Fundraisers"
                  as="h1"
                  color="secondary"
                />
              </Grid>
              <Grid container alignItems="flex-start" spacing={4}>
                <Hidden smDown>
                  <Grid item md={3}>
                    <Paper style={{ height: "90vh" }}>
                      <Container style={{ padding: "20px" }}>
                        <div className={classes.root}>
                          <Text
                            content="Explore projects by categories:"
                            style={{ fontSize: "20px" }}
                          />

                          <Autocomplete
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={
                              allTags
                                ? allTags.tags.map((tag) => {
                                    return {
                                      id: tag.id,
                                      value: tag.id,
                                      label: tag.name,
                                    };
                                  })
                                : []
                            }
                            getOptionLabel={(option) => option.label}
                            value={selectedTag}
                            onChange={(event, newValue) => {
                              setSelectedTag(_.uniqBy(newValue, "id"));
                            }}
                            //defaultValue={[top100Films[13]]}
                            filterSelectedOptions
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="outlined"
                                label="Select Categories"
                                placeholder="Categories"
                              />
                            )}
                          />
                          <Box display="flex" py={2} justifyContent="center">
                            <Button
                              title="Filter"
                              onClick={handleFilter}
                              variant="extendedFab"
                              fullWidth
                            />
                          </Box>
                        </div>
                      </Container>
                    </Paper>
                  </Grid>
                </Hidden>

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
