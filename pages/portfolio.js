import React, { Fragment } from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
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

import Text from "../common/src/components/Text";
import OrganizationList from "../common/src/components/HelpingHands/OrganizationList";
import InputGroup from "../common/src/components/InputGroup";
import RadioGroup from "../common/src/components/RadioGroup";
import SectionWrapper, {
  ContentArea,
  ButtonGroup,
  DonationForm,
  DonateButton,
} from "../containers/Charity/DonateSection/donateSection.style";

import { paymentPolicy, currencyOptions } from "../common/src/data/Charity";

import { useData, useDispatchUser } from "../lib/userData";
import { GET_ORGANIZATION_NAMES } from "../lib/queries";

import { CREATE_PORTFOLIO, UPDATE_PORTFOLIO } from "../lib/mutations";

import { useQuery, useMutation } from "@apollo/react-hooks";

import { useFormik } from "formik";
import * as Yup from "yup";

import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
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
  const paymentPolicy = [
    {
      id: 1,
      title: "One Time",
      value: "once",
      text: "One Time donation given",
    },
    {
      id: 2,
      title: "Ongoing",
      value: "monthly",
      text: "Everymonth donation given",
    },
  ];

  const dispatch = useDispatchUser();
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");

  const [portfolio, setPortfolio] = useState(false);

  const [refetchNow, setRefetchNow] = useState(false);
  const donor = useData();

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
  const { data, loading, error, refetch } = useQuery(GET_ORGANIZATION_NAMES);

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    onCompleted: (data) => {
      console.log(data, "Portfolio Completed");

      setPortfolio(false);
      dispatch({
        type: "UPDATE",
        payload: {
          ...donor,
          portfolios: donor.portfolios.concat(data.createPortfolio.portfolio),
          creditAmount:
            donor.creditAmount - data.updatePortfolio.portfolio.paymentSize,
        },
      });
      setRefetchNow(true);
      setCreateError("Added to portfolio succesfully!");
      setCreateLoading(false);
      handleReset();
    },
    onError: (error) => {
      console.log(error);
      setCreateError("Sorry an error occurred. Please try again!");
    },
  });
  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO, {
    onCompleted: (data) => {
      console.log(data, "Portfolio UPDATED");

      setPortfolio(false);
      dispatch({
        type: "UPDATE",
        payload: {
          ...donor,
          portfolios: donor.portfolios.concat(data.updatePortfolio.portfolio),
          creditAmount:
            donor.creditAmount - data.updatePortfolio.portfolio.paymentSize,
        },
      });
      setRefetchNow(true);
      setCreateError("Portfolio updated succesfully!");
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
      paymentSize: Yup.number()
        .min(10, "Please enter a value greater than Rs. 10")
        .required("Please enter a valid donation size."),
      organization: Yup.string(),
      period: Yup.string().required("Please enter the period."),
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
      paymentSize: 10,
      period: "once",
      organization: "",
    },
    onSubmit: (values) => {
      setCreateLoading(true);
      setCreateError(null);
      if (donor.creditAmount >= values.paymentSize) {
        if (
          donor.portfolios.filter(
            (portfolio) =>
              portfolio.organization.organizationName == values.organization
          ).length
        ) {
          console.log("if block");
          updatePortfolio({
            variables: {
              field: {
                data: {
                  paymentSize: parseInt(values.paymentSize),
                  period: values.period,
                  paymentDate: moment().format("YYYY-MM-DD"),
                },
                where: {
                  id: donor.portfolios.filter(
                    (portfolio) =>
                      portfolio.organization.organizationName ==
                      values.organization
                  )[0].id,
                },
              },
            },
          });
        } else {
          createPortfolio({
            variables: {
              field: {
                data: {
                  paymentSize: parseInt(values.paymentSize),
                  period: values.period,
                  donor: donor ? donor.id : null,
                  organization: data.organizations.filter(
                    (organization) =>
                      organization.organizationName == values.organization
                  )[0].id,
                  paymentDate: moment().format("YYYY-MM-DD"),
                },
              },
            },
          });
        }
      } else {
        setCreateLoading(false);
        setCreateError(
          "Insufficent balance. Please refill your account & then add to portfolio"
        );
      }
    },

    validationSchema: Yup.object().shape(schemas[0]),
  });

  useEffect(() => {
    if (data) {
      setFieldValue("organization", data.organizations[0].organizationName);
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
                        <ListItem button>
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
                    <Heading content="Portfolio" color="#05B890" /> <Divider />
                    <DonationForm
                      onSubmit={(e) => handleDonation(e)}
                      style={{ width: "550px", marginLeft: "50px" }}
                    >
                      <InputGroup
                        inputType="number"
                        placeholder="0"
                        inputValue={values.paymentSize}
                        inputOnChange={(e) =>
                          setFieldValue("paymentSize", e.target.value)
                        }
                        currency={
                          data ? data.organizations[0].organizationName : ""
                        }
                        selectedValue={values.organization}
                        selectOptions={
                          data
                            ? data.organizations.map((organization) => {
                                return {
                                  id: organization.id,
                                  title: organization.organizationName,
                                  value: organization.organizationName,
                                };
                              })
                            : []
                        }
                        selectOnUpdate={(value) => {
                          console.log("value:", value);
                          setFieldValue("organization", value);
                        }}
                      />
                      {errors.paymentSize ? (
                        <Box width="100%" p={2}>
                          <Text content={errors.paymentSize} />
                        </Box>
                      ) : null}
                      <RadioGroup
                        name="period"
                        value={paymentPolicy.id}
                        items={paymentPolicy}
                        onUpdate={(value) => setFieldValue("period", value)}
                      />
                      {createError ? (
                        <Box width="100%" p={2}>
                          <Text
                            style={{ color: "orange" }}
                            content={createError}
                          />
                        </Box>
                      ) : null}
                      <DonateButton type="submit" onClick={handleSubmit}>
                        Add to protfolio
                        {createLoading ? (
                          <CircularProgress
                            style={{ marginLeft: "10px", color: "#FFFFFF" }}
                            size={20}
                          />
                        ) : (
                          <Image src={heartImage} alt="Charity Landing" />
                        )}
                      </DonateButton>
                    </DonationForm>
                    <Heading content="My Organizations" color="#05B890" />{" "}
                    <Divider />
                    <OrganizationList
                      refetchNow={refetchNow}
                      setRefetchNow={setRefetchNow}
                    />
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
