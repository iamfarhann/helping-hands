import React, { Fragment, useEffect, useState } from "./node_modules/react";
import Link from "./node_modules/next/link";
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "./node_modules/@material-ui/core";
import HouseIcon from "./node_modules/@material-ui/icons/House";
import { borders } from "./node_modules/@material-ui/system";
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import ProjectCard from "../../common/src/components/HelpingHands/ProjectCard";
import Category from "../../common/src/components/HelpingHands/Category";
import RankingCard from "../../common/src/components/HelpingHands/RankingCard";
import FancySlider from "../../common/src/components/HelpingHands/fancySlider";
import LinearSlider from "../../common/src/components/HelpingHands/LinearSlider";
import ScrollableTabsButtonForce from "../../common/src/components/HelpingHands/Tabs";
import Navbar from "../../containers/Charity/Navbar";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../../containers/Charity/charity.style";
import Sticky from "./node_modules/react-stickynode";
import { ThemeProvider } from "./node_modules/styled-components";
import Head from "./node_modules/next/head";
import { ResetCSS } from "../../common/src/assets/css/style";
import { charityTheme } from "../../common/src/theme/charity";
import Text from "../../common/src/components/Text";
import Heading from "../../common/src/components/Heading";
import DrawerSection from "../../containers/Charity/DrawerSection";
import { DrawerProvider } from "../../common/src/contexts/DrawerContext";
import Footer from "../../containers/Charity/Footer";
import Button from "../../common/src/components/Button";
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
} from "../../containers/Charity/FundraiserSection/fundraiserSection.style";
import CircularProgress from "./node_modules/@material-ui/core/CircularProgress";
import { useRouter } from "./node_modules/next/router";
import { useData, useDispatchUser } from "../../lib/userData";
import { ORGANIZATION_INFO } from "../../lib/queries";
import { CREATE_PORTFOLIO } from "../../lib/mutations";
import { useQuery, useMutation } from "./node_modules/@apollo/react-hooks";
import Error from "../../containers/Error";

import Dialog from "./node_modules/@material-ui/core/Dialog";
import DialogActions from "./node_modules/@material-ui/core/DialogActions";
import DialogContent from "./node_modules/@material-ui/core/DialogContent";
import DialogContentText from "./node_modules/@material-ui/core/DialogContentText";
import DialogTitle from "./node_modules/@material-ui/core/DialogTitle";

import RadioGroup from "../../common/src/components/RadioGroup";
import TextField from "./node_modules/@material-ui/core/TextField";

import { useFormik } from "./node_modules/formik";
import * as Yup from "./node_modules/yup";

import moment from "./node_modules/moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  testGrid: {
    backgroundColor: "orange",
  },
}));

function Organization({ organizationID }) {
  const classes = useStyles();
  const router = useRouter();
  const [portfolio, setPortfolio] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");
  const donor = useData();
  const dispatch = useDispatchUser();
  const { data, loading, error, refetch } = useQuery(ORGANIZATION_INFO, {
    variables: { fields: { id: organizationID } },
    skip: !organizationID,
    fetchPolicy: "network-only",
  });
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
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handlePortfolio = () => {
    console.log("handle portfolio");
    if (donor["id"]) {
      setPortfolio(true);
    } else router.push("/signin");
  };

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
      setCreateError("Review Added succesfully!");
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
      paymentSize: Yup.number().required(
        "Please enter a donation paymentSize."
      ),
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
      paymentSize: 0,
      period: "",
    },
    onSubmit: (values) => {
      console.log("Portfolio => On Submit");
      console.log(values.period, "Period:");
      setCreateLoading(true);
      setCreateError(null);

      if (donor.creditAmount >= values.paymentSize) {
        createPortfolio({
          variables: {
            field: {
              data: {
                paymentSize: parseInt(values.paymentSize),
                period: values.period,
                donor: donor ? donor.id : null,
                organization: organizationID,
                paymentDate: moment().format("YYYY-MM-DD"),
              },
            },
          },
        });
      } else {
        setCreateLoading(false);
        setCreateError(
          "Insufficent balance. Please refill your account & then add to portfolio"
        );
      }
    },
    validationSchema: Yup.object().shape(schemas[0]),
  });

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!error && !loading && !data) {
    return <Error statusCode={404} />;
  }
  if (loading && !data) {
    return (
      <Container
        maxWidth="xl"
        style={{
          minHeight: "100vh",
          background: "#F2F2F2",

          textAlign: "center",
          paddingTop: "30%",
        }}
      >
        <CircularProgress color="secondary" />
        {/* <Box
          width="100%"
          height="100%"
          align="center"
          style={{ marginTop: "50%" }}
        >
          <CircularProgress color="secondary" />
        </Box> */}
      </Container>
    );
  }
  if (data && !loading) {
    return (
      <ThemeProvider theme={charityTheme}>
        <Fragment>
          {/* Start charity head section */}
          <Head>
            <title>Organization Page</title>
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
            <Container
              maxWidth="xl"
              style={{ minHeight: "100vh", background: "#F2F2F2", padding: 0 }}
            >
              <Grid container style={{ paddingLeft: 0 }}>
                <Grid
                  item
                  container
                  md={12}
                  style={{
                    backgroundImage: `url(${process.env.PLAIN_URL}${data.organizations[0].coverImage.url})`,

                    backgroundSize: "cover",

                    minHeight: "525px",
                  }}
                ></Grid>
              </Grid>

              <Grid item md={4}>
                <Box width={1} px={20} my={-10}>
                  <img
                    src={`${process.env.PLAIN_URL}${data.organizations[0].profilePicture.url}`}
                    height="150px"
                    width="175px"
                    style={{
                      borderRadius: "4px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Grid>
              <Container maxWidth="lg">
                <Grid
                  container
                  style={{ background: "#F2F2F2", paddingTop: "50px" }}
                  spacing={2}
                >
                  <Grid
                    item
                    md={8}
                    style={{ marginLeft: "60px", marginTop: "50px" }}
                  >
                    <Heading
                      as="h1"
                      style={{ marginBottom: 10 }}
                      content={data.organizations[0].organizationName}
                    />
                    <Text content={data.organizations[0].mission} />
                  </Grid>
                  <Grid container style={{ marginLeft: "65px" }}>
                    <Grid item md={7} style={{ display: "flex" }}>
                      {donor &&
                      donor.portfolios.filter(
                        (portfolio) =>
                          portfolio.organization.id == data.organizations[0].id
                      ).length ? (
                        <Link href="/portfolio">
                          <Button
                            title="Added to Portfolio"
                            variant="outlined"
                            style={{
                              marginTop: "0px",
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
                        </Link>
                      ) : (
                        <Button
                          title="Add to Portfolio"
                          variant="textButton"
                          onClick={handlePortfolio}
                          style={{
                            marginTop: "0px",
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
                      )}
                      {portfolio ? (
                        <Dialog
                          open={portfolio}
                          onClose={() => setPortfolio(false)}
                          aria-labelledby="form-dialog-title"
                        >
                          <DialogTitle id="form-dialog-title">
                            Add to portfolio
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              {` By adding this organization to your portfolio you give your consent to one-time or monthly deduction from your wallet. This amount will be transferred into  ${data.organizations[0].organizationName}'s account`}
                            </DialogContentText>

                            <TextField
                              type="number"
                              autoFocus
                              name="paymentSize"
                              value={values.paymentSize}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={errors.paymentSize && touched.paymentSize}
                              helperText={
                                errors.paymentSize && touched.paymentSize
                                  ? errors.paymentSize
                                  : null
                              }
                              label="paymentSize"
                              fullWidth
                              style={{ marginBottom: "20px" }}
                            />
                            <RadioGroup
                              name="period"
                              value={paymentPolicy.id}
                              items={paymentPolicy}
                              onUpdate={(value) =>
                                setFieldValue("period", value)
                              }
                            />
                            {/* {donationError ? (
                            <Text content={donationError} />
                          ) : null} */}
                            {createError ? (
                              <Box width="100%" p={2}>
                                <Text content={createError} />
                              </Box>
                            ) : null}
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => setPortfolio(false)}
                              title="Cancel"
                              variant="extendedFab"
                            />
                            <Button
                              title="Add"
                              variant="extendedFab"
                              onClick={handleSubmit}
                              disabled={createLoading}
                              isLoading={createLoading}
                            />
                          </DialogActions>
                        </Dialog>
                      ) : null}
                      <a href={`mailto:${data.organizations[0].user.email}`}>
                        <Button
                          title="Contact"
                          variant="outlined"
                          style={{
                            marginTop: "0px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "200px",
                            height: "auto",
                            border: "1",
                            borderColor: "#3E2672",
                            fontSize: "15px",
                            fontWeight: "700",
                            borderRadius: "10px",
                            cursor: "pointer",
                            color: "#060F1E",

                            position: "relative",
                            overflow: "hidden",
                            zIndex: "1",
                          }}
                        />
                      </a>
                    </Grid>
                    {/* <Grid
                      item
                      md={5}
                      style={{ paddingLeft: "50px", paddingRight: "-20px" }}
                    >
                      <DonationProgressbar
                        style={{
                          width: "115%",
                          marginTop: "10px",
                          marginBottom: "0px",
                        }}
                      >
                        <BarArea style={{ margin: "0px", padding: "0px" }}>
                          <CurrentStatus style={{ margin: "0px" }}>
                            <strong>86%</strong> on transparency scale
                          </CurrentStatus>
                          <Text content="" />
                        </BarArea>
                        
                      </DonationProgressbar>
                    </Grid> */}
                  </Grid>

                  <Grid container item md={12} style={{ marginTop: "20px" }}>
                    <Box width="100%">
                      <Paper>
                        <ScrollableTabsButtonForce
                          organization={data.organizations[0]}
                        />
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
              <Grid
                item
                container
                md={12}
                style={{
                  background: "#F2F2F2",
                  minHeight: "100px",
                }}
              ></Grid>
            </Container>
            <Footer />
          </CharityWrapper>
        </Fragment>
      </ThemeProvider>
    );
  }
}

Organization.getInitialProps = async ({ query }) => {
  console.log(query);
  if (query["organization"]) {
    return {
      organizationID: query.organization,
    };
  } else {
    return {
      organizationID: "",
    };
  }
};
export default Organization;
