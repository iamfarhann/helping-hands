import React, { Fragment } from "react";
import { useState } from "react";
import Text from "../common/src/components/Text";
import { useRouter } from "next/router";
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
import { Container, Grid, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../common/src/components/Button";
import Heading from "../common/src/components/Heading";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { LOGIN, REGISTER } from "../lib/mutations";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function signup() {
  const router = useRouter();
  const [formValues, setFormValues] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const [registerUser] = useMutation(REGISTER, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: ({ graphQLErrors, networkError }) => {
      console.log("Register Error");
      setLoginError("User already exists");
      setLoginLoading(false);
    },
  });

  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      console.log(data, "donor");
      router.push("/");
    },
    onError: ({ networkError, graphQLErrors }) => {
      // console.log(networkError.result, graphQLErrors, "Donor Signup");
      setLoginError("Login Error! Please try again.");
      setLoginLoading(false);
    },
  });
  const schemas = [
    {
      email: Yup.string()
        .email("Email not valid")
        .required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Password"),
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
      email: "",

      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setLoginLoading(true);
      setLoginError(null);
      setFormValues(values);
      login({
        variables: {
          fields: {
            identifier: values.email,
            password: values.password,
          },
        },
      });
    },
    validationSchema: Yup.object().shape(schemas[0]),
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
          <title>Sign in to esaar</title>
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
                <Paper style={{ height: "75vh" }}>
                  <Container style={{ padding: "40px" }}>
                    {" "}
                    <Heading content="Sign In" color="#05B890" /> <Divider />
                    <Grid container>
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
                        {/* FIXME: Color of text fields */}
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
                          title="Sign-in"
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
                      <Grid container item md={12}>
                        <a href="/signup_o">Forgot Password?</a>
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
}
