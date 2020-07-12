import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import Text from "../common/src/components/Text";
import Image from "../common/src/components/Image";
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
import Button from "../common/src/components/Button";
import Heading from "../common/src/components/Heading";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import TextField from "@material-ui/core/TextField";
import PasswordField from "material-ui-password-field";

import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useData, useDispatchUser } from "../lib/userData";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { UPDATE_ORGANIZATION } from "../lib/mutations";

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
  const dispatch = useDispatchUser();
  const organization = useData(); //returns context
  const [filedIds, setFileIDs] = useState([]);
  const [logo, setLogo] = useState(null);
  const [cover, setCover] = useState(null);
  const [regFile, setRegFile] = useState(null);
  const [taxFile, setTaxFile] = useState(null);

  const [formValues, setFormValues] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");

  const [fileLoading, setFileLoading] = useState(false);
  const [fileError, setFileError] = useState("");

  const [updateOrganization] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: (data) => {
      console.log(data);
      dispatch({
        type: "UPDATE",
        payload: data.updateOrganization.organization,
      });
      setUpdateError("Changes saved succesfully!");
      setUpdateLoading(false);
    },
    onError: (error) => {
      console.log(error);
      setUpdateError("Sorry an error occurred. Please try again!");
    },
  });
  const [updateFiles] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: (data) => {
      console.log(data);
      dispatch({
        type: "UPDATE",
        payload: data.updateOrganization.organization,
      });
      setFileError("File Uploaded Succesfully!");
      setFileLoading(false);
    },
    onError: (error) => {
      console.log(error);
      setFileError("Sorry an error occurred. Please try again!");
    },
  });
  const schemas = [
    {
      email: Yup.string()
        .email("Email not valid")
        .required("Please Enter Your Email"),

      focalPerson: Yup.string().required("Please Enter Full Name"),
      mobileNumber: Yup.string().required("Please Enter Your Mobile Number"),
      organizationName: Yup.string().required("Please Enter Organization Name"),
      address: Yup.string().required("Please Enter Organization Address"),
      registrationNumber: Yup.string(),
      overview: Yup.string().required("Please Enter Your Organization Overiew"),
      mission: Yup.string().required("Please Enter Your Organization Mission"),
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
      focalPerson: "",
      mobileNumber: "",
      organizationName: "",
      address: "",
      registrationNumber: "",
      overview: "",
      mission: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setUpdateLoading(true);
      setUpdateError(null);
      setFormValues(values);
      updateOrganization({
        variables: {
          fields: {
            data: {
              focalPerson: values.focalPerson,
              mobileNumber: values.mobileNumber,
              address: values.address,
              organizationName: values.organizationName,
              registrationNumber: values.registrationNumber,
              overview: values.overview,
              mission: values.mission,
            },
            where: { id: organization.id },
          },
        },
      });
    },
    validationSchema: Yup.object().shape(schemas[0]),
  });
  useEffect(() => {
    console.log(organization, "organization");
    if (organization["id"]) {
      setFieldValue("organizationName", organization.organizationName);
      setFieldValue("registrationNumber", organization.registrationNumber);
      setFieldValue("focalPerson", organization.focalPerson);
      setFieldValue("email", organization.user.email);
      setFieldValue("address", organization.address);
      setFieldValue("mobileNumber", organization.mobileNumber);
      setFieldValue(
        "overview",
        organization.overview ? organization.overview : ""
      );
      setFieldValue(
        "mission",
        organization.mission ? organization.mission : ""
      );
    }
  }, [organization]);

  const handlefiles = async (files, type) => {
    console.log(files, type);
    if (files.length) {
      setFileLoading(true);

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
            if (type == "logo") {
              //setLogo(res.data[0]);
              updateFiles({
                variables: {
                  fields: {
                    data: {
                      profilePicture: res.data[0].id,
                    },
                    where: {
                      id: organization.id,
                    },
                  },
                },
              });
            }
            if (type == "cover") {
              // setTaxFile(res.data[0]);
              updateFiles({
                variables: {
                  fields: {
                    data: {
                      profilePicture: res.data[0].id,
                    },
                    where: {
                      id: organization.id,
                    },
                  },
                },
              });
            }
            if (type == "regFile") {
              // setTaxFile(res.data[0]);
              updateFiles({
                variables: {
                  fields: {
                    data: {
                      registrationCertificate: res.data[0].id,
                    },
                    where: {
                      id: organization.id,
                    },
                  },
                },
              });
            }
            if (type == "taxFile") {
              // setTaxFile(res.data[0]);
              updateFiles({
                variables: {
                  fields: {
                    data: {
                      taxExemptionForm: res.data[0].id,
                    },
                    where: {
                      id: organization.id,
                    },
                  },
                },
              });
            }
            setUpdateLoading(false);
          });
      } catch (error) {
        console.log(error, "error");
        setFileError("Sorry an error occurred. Please try again!");
      }
    }
  };
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
                    <Heading content="Profile" color="#05B890" /> <Divider />
                    <Grid container>
                      <Grid item md={5} style={{ marginTop: "30px" }}>
                        <Heading
                          content="Organization Name"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        <TextField
                          name="organizationName"
                          value={values.organizationName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.organizationName && touched.organizationName
                          }
                          helperText={
                            errors.organizationName && touched.organizationName
                              ? errors.organizationName
                              : null
                          }
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
                          name="focalPerson"
                          value={values.focalPerson}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.focalPerson && touched.focalPerson}
                          helperText={
                            errors.focalPerson && touched.focalPerson
                              ? errors.focalPerson
                              : null
                          }
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
                          type="email"
                          name="email"
                          inputProps={{
                            readOnly: true,
                          }}
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email}
                          helperText={
                            errors.email && touched.email ? errors.email : null
                          }
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                        <Heading
                          content="Logo"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />
                        <DropzoneArea
                          acceptedFiles={["image/*"]}
                          dropzoneText={"Drag and drop images here or click"}
                          onChange={(files) => handlefiles(files, "logo")}
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
                          name="registrationNumber"
                          value={values.registrationNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.registrationNumber &&
                            touched.registrationNumber
                          }
                          helperText={
                            errors.registrationNumber &&
                            touched.registrationNumber
                              ? errors.registrationNumber
                              : null
                          }
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
                          name="mobileNumber"
                          value={values.mobileNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.mobileNumber && touched.mobileNumber}
                          helperText={
                            errors.mobileNumber && touched.mobileNumber
                              ? errors.mobileNumber
                              : null
                          }
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
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.address && touched.address}
                          helperText={
                            errors.address && touched.address
                              ? errors.address
                              : null
                          }
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          multiline
                          rows={1}
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                        <Heading
                          content="Cover"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />
                        <DropzoneArea
                          acceptedFiles={["image/*"]}
                          dropzoneText={"Drag and drop images here or click"}
                          onChange={(files) => handlefiles(files, "cover")}
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        md={12}
                        style={{
                          alignContent: "center",
                        }}
                      >
                        <Heading
                          content="Organization Mission:"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />
                        <TextField
                          name="mission"
                          value={values.mission}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.mission && touched.mission}
                          helperText={
                            errors.mission && touched.mission
                              ? errors.mission
                              : null
                          }
                          label=""
                          variant="outlined"
                          multiline
                          rows={8}
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                        <Heading
                          content="Organization Overview"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />
                        <TextField
                          name="overview"
                          value={values.overview}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.overview && touched.overview}
                          helperText={
                            errors.overview && touched.overview
                              ? errors.overview
                              : null
                          }
                          label=""
                          variant="outlined"
                          multiline
                          rows={8}
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        md={12}
                        style={{
                          alignContent: "center",
                        }}
                      >
                        {updateError ? <Text content={updateError} /> : null}
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
                        onChange={(files) => handlefiles(files, "regFile")}
                      />
                      <Heading
                        content="Tax Exemption Form"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        dropzoneText={"Drag and drop images here or click"}
                        onChange={(files) => handlefiles(files, "taxFile")}
                      />
                      <Grid
                        container
                        item
                        md={12}
                        style={{
                          alignContent: "center",
                        }}
                      >
                        {fileError ? <Text content={fileError} /> : null}
                      </Grid>

                      <Grid
                        container
                        item
                        md={12}
                        style={{ alignContent: "center" }}
                      >
                        <Button
                          title="Update Changes"
                          variant="extendedFab"
                          onClick={handleSubmit}
                          disabled={updateLoading}
                          isLoading={updateLoading}
                          style={{
                            marginTop: "20px",
                            marginLeft: "230px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "200px",
                            height: "auto",
                          }}
                        />
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
