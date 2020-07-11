import React, { Fragment } from "react";

import Text from "../common/src/components/Text";
import Button from "../common/src/components/Button";
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
import TagSelection from "../containers/Charity/Tags/tagSelection";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
import axios from "axios";
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
import { useData, useDispatchUser } from "../lib/userData";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { CREATE_PROJECT } from "../lib/mutations";
import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const handleLogout = () => {
  console.log("logout called");
  cookie.remove("token");

  dispatch({ type: "LOGOUT", payload: {} });

  window.location = "/";
};

export default () => {
  const classes = useStyles();

  const dispatch = useDispatchUser();
  const organization = useData(); //returns context
  const [filedIds, setFileIDs] = useState([]);
  const [logo, setLogo] = useState(null);
  const [cover, setCover] = useState(null);
  const [regFile, setRegFile] = useState(null);
  const [taxFile, setTaxFile] = useState(null);

  const [formValues, setFormValues] = useState("");
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");

  const [fileLoading, setFileLoading] = useState(false);
  const [fileError, setFileError] = useState("");

  const [createProject] = useMutation(CREATE_PROJECT, {
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
  const schemas = [
    {
      name: Yup.string().required("Please Enter Project Title"),
      targetAmount: Yup.number().required("Please Enter Target Amount"),
      shortDescription: Yup.string().required("Please Enter Short Description"),
      description: Yup.string().required("Please Enter Project Details"),
      titleImage: Yup.string().required("Please Upload a title image"),
      relatedImages: Yup.array(),
      tags: Yup.array(),
    },
  ];

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
      name: "",
      targetAmount: 0,
      shortDescription: "",
      description: "",
      titleImage: "",
      relatedImages: [],
      tags: [],
    },
    onSubmit: (values) => {
      console.log("On Submit");

      console.log(values);
      setCreateLoading(true);
      setCreateError(null);
      createProject({
        variables: {
          fields: {
            data: {
              titleImage: values.titleImage,
              relatedImages: values.relatedImages.length
                ? values.relatedImages
                : null,
              name: values.name,
              targetAmount: values.targetAmount,
              shortDescription: values.shortDescription,
              description: values.description,
              organization: organization.id,
              status: "active",
              tags: values.tags.length
                ? values.tags.map((item) => {
                    return item.id;
                  })
                : null,
            },
          },
        },
      });
    },
    validationSchema: Yup.object().shape(schemas[0]),
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
            if (type == "titleImage") {
              setFieldValue("titleImage", res.data[0].id);
            }
            if (type == "relatedImages") {
              let images = [];
              res.data.map((img) => {
                images.push(img.id);
              });

              setFieldValue("relatedImages", images);
            }

            setCreateLoading(false);
          });
      } catch (error) {
        console.log(error, "error");
        setCreateError("Sorry an error occurred. Please try again!");
      }
    } else {
      setFieldValue("titleImage", "");
    }
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
                <Paper style={{ height: "100%" }}>
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
                    <Heading content="Add Project" color="#05B890" />{" "}
                    <Divider />
                    <Grid item md={7} style={{ marginTop: "30px" }}>
                      <Heading
                        content="Project Title"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />{" "}
                      {/* FIXME: Color of text fields */}
                      <TextField
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.name && touched.name}
                        helperText={
                          errors.name && touched.name ? errors.name : null
                        }
                        label=""
                        variant="outlined"
                        size="small"
                        style={{ color: "#3E2672" }}
                        fullWidth
                      />
                      <Heading
                        content="Target Amount"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />{" "}
                      {/* FIXME: Color of text fields */}
                      <TextField
                        name="targetAmount"
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.targetAmount && touched.targetAmount}
                        helperText={
                          errors.targetAmount && touched.targetAmount
                            ? errors.targetAmount
                            : null
                        }
                        id="outlined-basic"
                        label="in PKR"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <TagSelection
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                      <Heading
                        content="Short Description"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />{" "}
                      {/* FIXME: Color of text fields */}
                      <TextField
                        name="shortDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.shortDescription && touched.shortDescription
                        }
                        helperText={
                          errors.shortDescription && touched.shortDescription
                            ? errors.shortDescription
                            : null
                        }
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        size="small"
                        style={{ color: "#05B890" }}
                        fullWidth
                      />
                      <Heading
                        content="Project Details"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />{" "}
                      {/* FIXME: Color of text fields */}
                      <TextField
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.description && touched.description}
                        helperText={
                          errors.description && touched.description
                            ? errors.description
                            : null
                        }
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        size="large"
                        multiline
                        rows={5}
                        style={{ color: "#05B890" }}
                        fullWidth
                      />
                    </Grid>
                    <Heading
                      content="Title Image"
                      as="h4"
                      style={{ marginTop: "1rem" }}
                    />
                    <DropzoneArea
                      acceptedFiles={["image/*"]}
                      dropzoneText={"Drag and drop an image here or click"}
                      onChange={(files) => handlefiles(files, "titleImage")}
                    />
                    {errors.titleImage ? (
                      <Text
                        style={{ color: "orange" }}
                        content={errors.titleImage}
                      />
                    ) : null}
                    <Heading
                      content="Related Images"
                      as="h4"
                      style={{ marginTop: "1rem" }}
                    />
                    <DropzoneArea
                      acceptedFiles={["image/*"]}
                      dropzoneText={"Drag and drop images here or click"}
                      onChange={(files) => handlefiles(files, "relatedImages")}
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
                      title="Create Project"
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
