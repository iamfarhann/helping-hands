import React, { Fragment } from "react";
import { useRouter } from "next/router";
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
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";

import Text from "../common/src/components/Text";

import axios from "axios";
import { useData, useDispatchUser } from "../lib/userData";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { CREATE_UPDATE } from "../lib/mutations";

import Button from "../common/src/components/Button";

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
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");
  const [createUpdate] = useMutation(CREATE_UPDATE, {
    onCompleted: (data) => {
      console.log(data);
      // dispatch({
      //   type: "UPDATE",
      //   payload: data.updateOrganization.organization,
      // });
      setCreateError("Project Added succesfully!");
      setCreateLoading(false);
      handleReset();
    },
    onError: (error) => {
      console.log(error);
      setCreateError("Sorry an error occurred. Please try again!");
    },
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      update: "",
      images: [],
    },
    onSubmit: (values) => {
      console.log("On Submit");
      console.log(values, "Query", query.project);

      setCreateLoading(true);
      setCreateError(null);
      createUpdate({
        variables: {
          field: {
            data: {
              images: values.images.length ? values.images : null,
              update: values.update,
              project: query.project,
            },
          },
        },
      });
    },
    validationSchema: Yup.object().shape({
      update: Yup.string().required("Please Enter Project Update!"),
      images: Yup.array(),
    }),
  });
  const handlefiles = async (files, type) => {
    console.log(files, type);
    if (files.length) {
      setCreateLoading(true);

      const form = new FormData();
      files.forEach((file) => {
        form.append("files", file);
      });
      try {
        await axios
          .post("http://localhost:1337/upload", form, {
            headers: {
              "Content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            //setFileIDs([...filedIds, ...res.data]);

            if (type == "images") {
              let images = [];
              res.data.map((img) => {
                images.push(img.id);
              });

              setFieldValue("images", images);
            }

            setCreateLoading(false);
          });
      } catch (error) {
        console.log(error, "error");
        setCreateError("Sorry an error occurred. Please try again!");
      }
    } else {
      setFieldValue("images", []);
    }
  };

  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>Update | Esaar</title>
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
                        <Link href="/pastProject">
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
                <Paper style={{ height: "150vh" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading content="Latest Update" color="#05B890" />{" "}
                    <Divider />
                    <Grid item md={7} style={{ marginTop: "30px" }}>
                      <Heading
                        content="Update Details"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />{" "}
                      {/* FIXME: Color of text fields */}
                      <TextField
                        name="update"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.update && touched.update}
                        helperText={
                          errors.update && touched.update ? errors.update : null
                        }
                        label=""
                        variant="outlined"
                        size="large"
                        multiline
                        rows={7}
                        style={{ color: "#05B890" }}
                        fullWidth
                      />
                    </Grid>
                    <Heading
                      content="Related Images"
                      as="h4"
                      style={{ marginTop: "1rem" }}
                    />
                    <DropzoneArea
                      acceptedFiles={["image/*"]}
                      dropzoneText={"Drag and drop images here or click"}
                      onChange={(files) => handlefiles(files, "images")}
                    />
                  </Container>
                  <Grid
                    container
                    item
                    md={12}
                    style={{
                      paddingLeft: "40px",
                      alignContent: "center",
                    }}
                  >
                    {createError ? (
                      <Text style={{ color: "orange" }} content={createError} />
                    ) : null}
                  </Grid>
                  <Grid
                    container
                    item
                    md={12}
                    style={{ alignContent: "center" }}
                  >
                    <Button
                      title="Send Update"
                      variant="extendedFab"
                      onClick={handleSubmit}
                      disabled={createLoading}
                      isLoading={createLoading}
                      style={{
                        marginTop: "20px",
                        marginLeft: "260px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "200px",
                        height: "auto",
                      }}
                    />
                  </Grid>
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
