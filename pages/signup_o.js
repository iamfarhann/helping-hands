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
import Button from "../common/src/components/Button";
import Heading from "../common/src/components/Heading";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { CREATE_ORGANIZATION, REGISTER } from "../lib/mutations";

export default () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [filedIds, setFileIDs] = useState([]);
  const [regFile, setRegFile] = useState(null);
  const [taxFile, setTaxFile] = useState(null);

  const [registerUser] = useMutation(REGISTER, {
    onCompleted: (data) => {
      console.log(data);
      router.push("/signin");
    },
    onError: ({ graphQLErrors, networkError }) => {
      console.log("Register Error");
      setLoginError("User already exists");
      setLoginLoading(false);
    },
  });

  const [createOrganization] = useMutation(CREATE_ORGANIZATION, {
    onCompleted: (data) => {
      console.log(data, "Organization");
      registerUser({
        variables: {
          fields: {
            data: {
              organization: data.createOrganization.organization.id,
              username: formValues.email.split("@")[0],
              email: formValues.email,
              password: formValues.password,
              confirmed: true,
              isDonor: false,
            },
          },
        },
      });
    },
    onError: ({ networkError, graphQLErrors }) => {
      console.log(networkError.result, graphQLErrors, "Donor Signup");
      setLoginError("Sorry, an error occured, try again");
      setLoginLoading(false);
    },
  });
  const schemas = [
    {
      email: Yup.string()
        .email("Email not valid")
        .required("Please Enter Your Email"),
      orgName: Yup.string().required("Please Enter Organization Name"),
      address: Yup.string().required("Please Enter Organization Address"),
      regNumber: Yup.string().required("Please Enter Registration Number"),
      password: Yup.string().required("Please Enter Password"),
      fullName: Yup.string().required("Please Enter Full Name"),
      mobileNumber: Yup.string().required("Please Enter Your Mobile Number"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Pleaser confirm password"),
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
      orgName: "",
      regNumber: "",
      address: "",
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setLoginLoading(true);
      setLoginError(null);
      setFormValues(values);
      createOrganization({
        variables: {
          fields: {
            data: {
              organizationName: values.orgName,
              focalPerson: values.fullName,
              registrationNumber: values.regNumber,
              mobileNumber: values.mobileNumber,
              registrationCertificate: regFile ? regFile.id : null,
              taxExemptionForm: taxFile ? taxFile.id : null,
            },
          },
        },
      });
    },
    validationSchema: Yup.object().shape(schemas[0]),
  });

  const handlefiles = async (files, type) => {
    setLoginLoading(true);
    console.log(files, type);
    if (files.length) {
      const form = new FormData();
      files.forEach((file) => {
        form.append("files", file);
      });

      await axios
        .post(`${process.env.PLAIN_URL}/upload`, form, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          //setFileIDs([...filedIds, ...res.data]);
          if (type == "registration") {
            setRegFile(res.data[0]);
          }
          if (type == "tax") {
            setTaxFile(res.data[0]);
          }
          setLoginLoading(false);
        });
    }
  };
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <Head>
          <title>Register your organization | Esaar</title>
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
                <Paper style={{ height: "100%" }}>
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
                          name="orgName"
                          id="outlined-basic"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.orgName && touched.orgName}
                          helperText={
                            errors.orgName && touched.orgName
                              ? errors.orgName
                              : null
                          }
                          label=""
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Focal Person"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        <TextField
                          name="fullName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.fullName && touched.fullName}
                          helperText={
                            errors.fullName && touched.fullName
                              ? errors.fullName
                              : null
                          }
                          label=""
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Email ID"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        <TextField
                          id="outlined-basic"
                          label=""
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email}
                          helperText={
                            errors.email && touched.email ? errors.email : null
                          }
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Password"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        <TextField
                          label=""
                          name="password"
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          onBlur={handleBlur}
                          fullWidth
                          error={errors.password && touched.password}
                          helperText={
                            errors.password && touched.password
                              ? errors.password
                              : null
                          }
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
                          name="regNumber"
                          id="outlined-basic"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.regNumber && touched.regNumber}
                          helperText={
                            errors.regNumber && touched.regNumber
                              ? errors.regNumber
                              : null
                          }
                          label=""
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Contact Number"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        <TextField
                          id="outlined-basic"
                          name="mobileNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.mobileNumber && touched.mobileNumber}
                          helperText={
                            errors.mobileNumber && touched.mobileNumber
                              ? errors.mobileNumber
                              : null
                          }
                          label=""
                          size="small"
                          style={{ color: "#05B890" }}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.address && touched.address}
                          helperText={
                            errors.address && touched.address
                              ? errors.address
                              : null
                          }
                          label=""
                          size="small"
                          style={{ color: "#3E2672" }}
                          fullWidth
                        />
                        <Heading
                          content="Confirm Password"
                          as="h4"
                          style={{ marginTop: "1rem" }}
                        />{" "}
                        {/* FIXME: Color of text fields */}
                        <TextField
                          label=""
                          name="confirmPassword"
                          onChange={handleChange}
                          type="password"
                          value={values.confirmPassword}
                          onBlur={handleBlur}
                          fullWidth
                          error={
                            errors.confirmPassword && touched.confirmPassword
                          }
                          helperText={
                            errors.confirmPassword && touched.confirmPassword
                              ? errors.confirmPassword
                              : null
                          }
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
                        onChange={(files) => handlefiles(files, "registration")}
                      />
                      <Heading
                        content="Tax Exemption Form"
                        as="h4"
                        style={{ marginTop: "1rem" }}
                      />
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        dropzoneText={"Drag and drop images here or click"}
                        onChange={(files) => handlefiles(files, "tax")}
                      />
                      <Grid
                        container
                        item
                        md={12}
                        style={{
                          alignContent: "center",
                        }}
                      >
                        {loginError ? <Text content={loginError} /> : null}
                      </Grid>

                      <Grid
                        container
                        item
                        md={12}
                        style={{
                          alignContent: "center",
                        }}
                      >
                        <Button
                          title="Create Account"
                          variant="extendedFab"
                          onClick={handleSubmit}
                          disabled={loginLoading}
                          isLoading={loginLoading}
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
