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

import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { UPDATE_DONOR } from "../lib/mutations";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import TagSelection from "../containers/Charity/Tags/tagSelection";

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
  const donor = useData(); //returns context

  const [filedIds, setFileIDs] = useState([]);
  const [imgFile, setImgFile] = useState(null);

  const [formValues, setFormValues] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(addCredits[0]);

  const [updateDonor] = useMutation(UPDATE_DONOR, {
    onCompleted: (data) => {
      console.log(data);
      dispatch({
        type: "UPDATE",
        payload: data.updateDonor.donor,
      });
      setUpdateError("Changes saved succesfully!");
      setUpdateLoading(false);
    },
    onError: (error) => {
      console.log(error);
      setUpdateError("Sorry an error occurred. Please try again!");
    },
  });

  const schemas = [
    {
      email: Yup.string()
        .email("Email not valid")
        .required("Please Enter Your Email"),

      fullName: Yup.string().required("Please Enter Full Name"),
      mobileNumber: Yup.string().required("Please Enter Your Mobile Number"),
      cnic: Yup.string().required("Please Enter Your CNIC Number"),
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
      fullName: "",
      email: "",
      mobileNumber: "",
      cnic: "",
      tags: [],
    },
    onSubmit: (values) => {
      console.log(values);
      setUpdateLoading(true);
      setUpdateError(null);
      setFormValues(values);
      updateDonor({
        variables: {
          fields: {
            data: imgFile
              ? {
                  fullName: values.fullName,
                  mobileNumber: values.mobileNumber,
                  cnic: values.cnic,
                  profilePicture: imgFile.id,
                  preferredTags: values.tags.length
                    ? values.tags.map((item) => {
                        return item.id;
                      })
                    : null,
                }
              : {
                  fullName: values.fullName,
                  mobileNumber: values.mobileNumber,
                  cnic: values.cnic,
                  preferredTags: values.tags.length
                    ? values.tags.map((item) => {
                        return item.id;
                      })
                    : null,
                },
            where: { id: donor.id },
          },
        },
      });
    },
    validationSchema: Yup.object().shape(schemas[0]),
  });
  useEffect(() => {
    console.log(donor, "donor");
    if (donor["id"]) {
      setFieldValue("fullName", donor.fullName);
      setFieldValue("email", donor.user.email);
      setFieldValue("cnic", donor.cnic);
      setFieldValue("mobileNumber", donor.mobileNumber);
      setFieldValue("tags", donor.preferredTags ? donor.preferredTags : []);
    }
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

    dispatch({ type: "LOGOUT", payload: {} });

    window.location = "/";
  };
  const handlefiles = async (files, type) => {
    console.log(files, type);
    if (files.length) {
      setUpdateLoading(true);

      const form = new FormData();
      files.forEach((file) => {
        form.append("files", file);
      });

      await axios
        .post("http://localhost:1337/upload", form, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          //setFileIDs([...filedIds, ...res.data]);
          if (type == "profile") {
            setImgFile(res.data[0]);
          }
          // if (type == "tax") {
          //   setTaxFile(res.data[0]);
          // }
          setUpdateLoading(false);
        });
    }
  };
  const handleCredit = () => {
    console.log(selectedAmount);
    setUpdateLoading(true);
    updateDonor({
      variables: {
        fields: {
          data: {
            creditAmount:
              selectedAmount == "Basic"
                ? donor.creditAmount + 250
                : donor.creditAmount + 500,
          },
          where: { id: donor.id },
        },
      },
    });
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
                <Paper style={{ height: "100%" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading content="Profile" color="#05B890" /> <Divider />
                    <Grid container>
                      <Grid item md={5} style={{ marginTop: "30px" }}>
                        <Heading
                          content="Full Name"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          name="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.fullName && touched.fullName}
                          helperText={
                            errors.fullName && touched.fullName
                              ? errors.fullName
                              : null
                          }
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Mobile Number"
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
                          variant="outlined"
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                        <Heading
                          content="Upload Profile Picture"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />
                        <DropzoneArea
                          acceptedFiles={["image/*"]}
                          dropzoneText={"Drag and drop images here or click"}
                          onChange={(files) => handlefiles(files, "profile")}
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
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="CNIC"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          name="cnic"
                          value={values.cnic}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.cnic && touched.cnic}
                          helperText={
                            errors.cnic && touched.cnic ? errors.cnic : null
                          }
                          label=""
                          variant="outlined"
                          size="small"
                          style={{ color: "#05B890" }}
                          fullWidth
                        />
                        <TagSelection
                          values={values}
                          setFieldValue={setFieldValue}
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
                        value={`PKR ${donor ? donor.creditAmount : 0}`}
                        inputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                        size="small"
                        style={{ color: "#05B890", marginBottom: "30px" }}
                        fullWidth
                      />
                      <RadioGroup
                        name="radioGroup"
                        value={selectedAmount}
                        items={addCredits}
                        onUpdate={(value) => setSelectedAmount(value)}
                      />
                      <Button
                        title="Add Credit"
                        variant="extendedFab"
                        onClick={handleCredit}
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
