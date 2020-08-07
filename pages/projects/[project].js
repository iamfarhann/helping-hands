import react, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";

import Head from "next/head";
import Navbar from "../../containers/Charity/Navbar";
import ProjectUpdates from "../../common/src/components/HelpingHands/UpdateStepper";
import LinearSlider from "../../common/src/components/HelpingHands/LinearSlider";
import ReviewList from "../../common/src/components/HelpingHands/ReviewCard";
import Avatar from "@material-ui/core/Avatar";
import DonorList from "../../common/src/components/HelpingHands/DonorList";
import UpdateSlider from "../../common/src/components/HelpingHands/UpdateSlider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventIcon from "@material-ui/icons/Event";
import LabelIcon from "@material-ui/icons/Label";

import Button from "../../common/src/components/Button";
import { ThemeProvider } from "styled-components";

import Footer from "../../containers/Charity/Footer";
import { charityTheme } from "../../common/src/theme/charity";
import { ResetCSS } from "../../common/src/assets/css/style";
import Sticky from "react-stickynode";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../../containers/Charity/charity.style";
import Heading from "../../common/src/components/Heading";

import Link from "next/link";
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

import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/fa/twitter";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";

import Text from "../../common/src/components/Text";

import DrawerSection from "../../containers/Charity/DrawerSection";

import { DrawerProvider } from "../../common/src/contexts/DrawerContext";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";
import { useData, useDispatchUser } from "../../lib/userData";
import { GET_PROJECT } from "../../lib/queries";

import { CREATE_DONATION, UPDATE_DONOR } from "../../lib/mutations";

import { useQuery, useMutation } from "@apollo/react-hooks";
import Error from "../../containers/Error";
import moment from "moment";

import Skeleton from "@material-ui/lab/Skeleton";

import ShareModal from "../../common/src/components/shareModal";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";

import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import FsLightbox from "fslightbox-react";

function Project({ projectID }) {
  const router = useRouter();
  const [openShare, setOpenShare] = useState(false);
  const [donations, setDonations] = useState(false);
  const [donationLoading, setDonationLoading] = useState(false);
  const [donationError, setDonationError] = useState("");
  const dispatch = useDispatchUser();
  const donor = useData();
  const [updated, setUpdated] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [coverToggler, setCoverToggler] = useState(false);
  const [imageSlide, setImageSlider] = useState(0);

  const { data, loading, error, refetch } = useQuery(GET_PROJECT, {
    variables: { id: projectID },
    skip: !projectID,
  });
  const [updateDonor] = useMutation(UPDATE_DONOR, {
    onCompleted: (data) => {
      console.log(data);
      dispatch({
        type: "UPDATE",
        payload: data.updateDonor.donor,
      });
      setUpdated(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  useEffect(() => {
    console.log(data);
    if (data && donor["id"] && !updated) {
      if (donor.user.role.name == "Donor") {
        updateDonor({
          variables: {
            fields: {
              data: {
                visitedTags: _.uniq([
                  ...donor.visitedTags.map((tag) => tag.id),
                  ...data.project.tags.map((tag) => tag.id),
                ]),
              },
              where: {
                id: donor.id,
              },
            },
          },
        });
      }
    }
  }, [data, updated]);

  const [createDonation] = useMutation(CREATE_DONATION, {
    onCompleted: (data) => {
      console.log(data);
      setDonations(false);
      refetch();
      dispatch({
        type: "UPDATE",
        payload: {
          ...donor,
          creditAmount:
            donor.creditAmount - data.createDonation.donation.amount,
        },
      });
      setDonationError("Review Added succesfully!");
      setDonationLoading(false);
      handleReset();
    },
    onError: (error) => {
      console.log(error);
      setDonationError("Sorry an error occurred. Please try again!");
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
      donation: 10,
    },
    onSubmit: (values) => {
      console.log("Review On Submit");
      console.log(values);
      setDonationLoading(true);
      setDonationError(null);
      if (donor.creditAmount >= values.donation) {
        createDonation({
          variables: {
            field: {
              data: {
                donor: donor.id,
                project: projectID,
                amount: values.donation,
              },
            },
          },
        });
      } else {
        setDonationError("Please add more credits in your wallet first");
        setDonationLoading(false);
      }
    },
    validationSchema: Yup.object().shape({
      donation: Yup.number()
        .min(10, "Minimumum donation size is 10 rupees")
        .required("Please enter donation amount"),
    }),
  });

  const handleDonation = () => {
    if (donor["id"]) {
      setDonations(true);
    } else router.push("/signin");
  };
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
      </Container>
    );
  }

  // if (data && !loading) {
  return (
    <ThemeProvider theme={charityTheme}>
      <Head>
        <title>{data.project.name}</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#FCF22B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Load google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      {/* End of charity head section */}
      {/* Start charity wrapper section */}
      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar />
        </Sticky>
        <DrawerProvider>
          <DrawerSection />
        </DrawerProvider>
        <ContentWrapper>
          <Container
            style={{
              maxWidth: "1170px",
              minHeight: "100vh",
              paddingTop: "140px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Heading as="h1" content={data.project.name} />
              </Grid>

              <Grid container item md={8} spacing={1}>
                <Grid item md={12}>
                  <img
                    src={`${process.env.PLAIN_URL}${data.project.titleImage.url}`}
                    onClick={() => {
                      setToggler(!toggler);
                      setImageSlider(
                        data.project.relatedImages.length
                          ? data.project.relatedImages.length + 1
                          : 1
                      );
                    }}
                    height="400px"
                    width="100%"
                    style={{ borderRadius: 4, cursor: "pointer" }}
                  />
                </Grid>
                <Grid
                  item
                  container
                  md={12}
                  spacing={2}
                  style={{ paddingRight: 0, margin: 0 }}
                >
                  {data.project.relatedImages.map((item, index) => {
                    return (
                      <Grid item md={2} key={item.id}>
                        <img
                          src={`${process.env.PLAIN_URL}${item.url}`}
                          onClick={() => {
                            setToggler(!toggler);
                            setImageSlider(index + 1);
                          }}
                          style={{
                            cursor: "pointer",
                            height: "100px",
                            borderRadius: 4,
                            objectFit: "cover",
                            width: "100%",
                          }}
                          loading="lazy"
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <FsLightbox
                  toggler={toggler}
                  type="image"
                  sources={
                    data
                      ? data.project.relatedImages
                          .map((pic) => `${process.env.PLAIN_URL}${pic.url}`)
                          .concat(
                            `${process.env.PLAIN_URL}${data.project.titleImage.url}`
                          )
                      : []
                  }
                  slide={imageSlide}
                />

                <Grid
                  container
                  item
                  md={12}
                  spacing={1}
                  alignItems="center"
                  style={{ paddingTop: "16px" }}
                >
                  <Grid item md={1}>
                    <Avatar
                      src={`${process.env.PLAIN_URL}${data.project.organization.profilePicture.url}`}
                    />
                  </Grid>
                  <Grid item md={11}>
                    <a
                      href={`http://localhost:3000/Organizations/${data.project.organization.id}`}
                    >
                      <Heading
                        content={`${data.project.organization.organizationName} is organizing this fundraiser`}
                        style={{ margin: "0px" }}
                        as="h3"
                      />
                    </a>
                  </Grid>
                  <Grid item md={12}>
                    <Divider />
                  </Grid>
                  <Grid container item md={6} spacing={1}>
                    <Grid item>
                      <EventIcon />
                    </Grid>
                    <Grid item>
                      <Text
                        color="#060F1E"
                        content={`Created ${moment(
                          data.project.createdAt
                        ).format("MMMM Do, YYYY")}`}
                        style={{ margin: "0px" }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container item md={6} spacing={1}>
                    {data.project.tags.map((tag) => {
                      return (
                        <>
                          <Grid item>
                            <LabelIcon />
                          </Grid>
                          <Grid item>
                            <Text
                              color="#060F1E"
                              content={tag.name}
                              style={{ margin: "0px" }}
                            />
                          </Grid>
                        </>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <Paper>
                    <Box width={1} p={2}>
                      <Heading
                        as="h3"
                        content="Description"
                        style={{ paddingBottom: "10px" }}
                      />
                      <Text
                        color="#060F1E"
                        content={data.project.description}
                      />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item md={12}>
                  <Paper>
                    <Box width={1} p={2}>
                      <Heading
                        as="h3"
                        content="Project Updates:"
                        style={{ margin: "0px" }}
                      />
                      <ProjectUpdates project={data.project} />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              <Grid conatiner item md={4}>
                <Paper>
                  <Box p={2}>
                    <DonationProgressbar
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <BarArea>
                        <CurrentStatus>
                          <strong>{`Rs. ${data.project.totalDonations}`}</strong>{" "}
                          of {data.project.targetAmount} goal
                        </CurrentStatus>
                        <Text content="" />
                      </BarArea>
                      <Heading
                        as="h5"
                        content={`Raised by ${
                          data.project.donations.length
                        } people since ${moment(data.project.createdAt).format(
                          "MMMM Do"
                        )}.`}
                        style={{ fontSize: "18px" }}
                      />
                    </DonationProgressbar>

                    <Button
                      title="DONATE NOW"
                      variant="textButton"
                      onClick={handleDonation}
                      style={{
                        marginTop: "18px",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "100%",
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
                    {donations ? (
                      <Dialog
                        open={donations}
                        onClose={() => setDonations(false)}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">
                          Donate Now
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Donate to your favourite project
                          </DialogContentText>

                          <TextField
                            type="number"
                            autoFocus
                            name="donation"
                            value={values.donation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.donation && touched.donation}
                            helperText={
                              errors.donation && touched.donation
                                ? errors.donation
                                : null
                            }
                            label="Donation"
                            fullWidth
                          />
                          {donationError ? (
                            <Text content={donationError} />
                          ) : null}
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => setDonations(false)}
                            title="Cancel"
                            variant="extendedFab"
                          />
                          <Button
                            title="Submit"
                            variant="extendedFab"
                            onClick={handleSubmit}
                            disabled={donationLoading}
                            isLoading={donationLoading}
                          />
                        </DialogActions>
                      </Dialog>
                    ) : null}

                    {openShare ? (
                      <ShareModal
                        status={openShare}
                        modalClose={() => setOpenShare(false)}
                        url={`http://localhost:3000/projects/${data.project.id}`}
                        heading={`Share this project`}
                      />
                    ) : null}
                    <Button
                      title="SHARE"
                      variant="outlined"
                      onClick={() => setOpenShare(true)}
                      style={{
                        marginTop: "5px",
                        marginBottom: "23px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "100%",
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

                    <Grid container alignItems="center" spacing={1}>
                      <Grid item md="12" style={{ paddingTop: "0px" }}>
                        <Divider />
                      </Grid>
                      <Grid item md={12}>
                        <DonorList project={data.project} />
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
                <Paper>
                  <Box p={1} m={2}>
                    <Typography variant="h6">Reviews</Typography>
                    <ReviewList project={data.project} />

                    <Grid item md={12} align="center">
                      <a href="/project">
                        {/* <Button
                          title="See All"
                          style={{
                            marginTop: "18px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "auto",
                            height: "auto",
                            border: "0",
                            fontSize: "15px",
                            fontWeight: "700",
                            borderRadius: "30px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            backgroundColor: "#05B890",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "1",
                          }}
                        /> */}
                      </a>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </ContentWrapper>
      </CharityWrapper>
    </ThemeProvider>
  );
  // }

  // return (
  //   <Container
  //     maxWidth="xl"
  //     style={{
  //       minHeight: "100vh",
  //       background: "#F2F2F2",

  //       textAlign: "center",
  //       paddingTop: "30%",
  //     }}
  //   >
  //     <h3>Data: {data.project.id}</h3>
  //     <h3>Error: {error}</h3>
  //     <h3>Loading: {loading}</h3>
  //   </Container>
  // );
}
Project.getInitialProps = async ({ query }) => {
  console.log(query);
  if (query["project"]) {
    return {
      projectID: query.project,
    };
  } else {
    return {
      projectID: "",
    };
  }
};
export default Project;
