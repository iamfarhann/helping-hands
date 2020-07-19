import react, { useEffect, useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
} from "@material-ui/core";
import Text from "../Text";
import { GET_PROJECT_REVIEWS } from "../../../../lib/queries";
import { CREATE_REVIEW } from "../../../../lib/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";
import Button from "../../../../common/src/components/Button";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useData, useDispatchUser } from "../../../../lib/userData";

import Skeleton from "@material-ui/lab/Skeleton";
export default function ReviewCard({ project }) {
  const { data, loading, error, refetch } = useQuery(GET_PROJECT_REVIEWS, {
    variables: {
      where: { project: project ? project.id : "" },
      sort: "createdAt:desc",
      start: 0,
      limit: null,
    },
    skip: !project,
    fetchPolicy: "cache-and-network",
  });
  const donor = useData();

  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(2);
  useEffect(() => {
    if (data) {
      console.log(data, "Reviews");
      console.log(value, "Rating");
    }
  }, [data, value]);

  const [createReview] = useMutation(CREATE_REVIEW, {
    onCompleted: (data) => {
      console.log(data);
      refetch();
      handleClose();
      // dispatch({
      //   type: "UPDATE",
      //   payload: data.updateOrganization.organization,
      // });
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
      review: Yup.string().required("Please enter a review"),
      rating: Yup.number().required("Please enter rating"),
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
      review: "",
      rating: 0,
    },
    onSubmit: (values) => {
      console.log("Review On Submit");
      console.log(values);
      setCreateLoading(true);
      setCreateError(null);
      createReview({
        variables: {
          fields: {
            data: {
              donor: donor.id,
              project: project.id,
              rating: values.rating,
              review: values.review,
            },
          },
        },
      });
    },
    validationSchema: Yup.object().shape(schemas[0]),
  });
  return (
    <div>
      <div style={{ overflow: "auto", maxHeight: "600px" }}>
        {data ? (
          data.reviews.map((review) => {
            return (
              <Box
                p={2}
                mb={2}
                borderLeft={5}
                borderBottom={0.5}
                borderRadius={4}
                borderColor="#3E2672"
              >
                <Grid container alignItems="center">
                  <Grid
                    item
                    md={2}
                    style={{ marginRight: "10px", marginBottom: "10px" }}
                  >
                    <Avatar
                      alt={review.donor.fullName}
                      src={
                        review.donor.profilePicture
                          ? `${process.env.PLAIN_URL}${review.donor.profilePicture.url}`
                          : null
                      }
                    />
                  </Grid>
                  <Grid item md={8}>
                    <Typography variant="body 1" style={{ fontWeight: "bold" }}>
                      {review.donor.fullName} <br />
                    </Typography>
                    <Rating
                      name="read-only"
                      size="small"
                      value={review.rating}
                      readOnly
                    />
                  </Grid>
                  <Grid item md={1}>
                    <MoreVertIcon />
                  </Grid>
                  <Grid item md={12}>
                    <Text color="#060F1E" content={review.review} />
                  </Grid>
                </Grid>
              </Box>
            );
          })
        ) : (
          <>
            <Box
              p={2}
              m={2}
              borderLeft={5}
              borderBottom={0.5}
              borderRadius={4}
              borderColor="#3E2672"
            >
              <Grid container alignItems="center">
                <Grid
                  item
                  md={2}
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                  />
                </Grid>
                <Grid item md={8}>
                  <Skeleton animation="wave" height={10} width="80%" />

                  <Skeleton animation="wave" height={10} width="40%" />
                </Grid>
                <Grid item md={1}>
                  <MoreVertIcon />
                </Grid>
                <Grid item md={12}>
                  <Skeleton animation="wave" height={20} width="100%" />
                  <Skeleton animation="wave" height={20} width="100%" />
                  <Skeleton animation="wave" height={20} width="40%" />
                </Grid>
              </Grid>
            </Box>
            <Box
              p={2}
              m={2}
              borderLeft={5}
              borderBottom={0.5}
              borderRadius={4}
              borderColor="#3E2672"
            >
              <Grid container alignItems="center">
                <Grid
                  item
                  md={2}
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                  />
                </Grid>
                <Grid item md={8}>
                  <Skeleton animation="wave" height={10} width="80%" />

                  <Skeleton animation="wave" height={10} width="40%" />
                </Grid>
                <Grid item md={1}>
                  <MoreVertIcon />
                </Grid>
                <Grid item md={12}>
                  <Skeleton animation="wave" height={20} width="100%" />
                  <Skeleton animation="wave" height={20} width="100%" />
                  <Skeleton animation="wave" height={20} width="70%" />
                </Grid>
              </Grid>
            </Box>
          </>
        )
        //else
        }
      </div>

      {donor["id"] ? (
        donor.user.role.name == "Donor" ? (
          <Box display="flex" justifyContent="center" p={2}>
            <Button
              title="Write a Review"
              onClick={handleClickOpen}
              style={{
                marginTop: "18px",
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
            />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Project Review</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Let others know what are your thoughts on this project!
                </DialogContentText>
                <Rating
                  name="rating"
                  value={values.rating}
                  onChange={(event, newValue) => {
                    setFieldValue("rating", newValue);
                  }}
                />
                <TextField
                  autoFocus
                  name="review"
                  value={values.review}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.review && touched.review}
                  helperText={
                    errors.review && touched.review ? errors.review : null
                  }
                  id="name"
                  label="Review"
                  type="review"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  title="Cancel"
                  variant="extendedFab"
                />
                <Button
                  title="Submit"
                  variant="extendedFab"
                  onClick={handleSubmit}
                  disabled={createLoading}
                  isLoading={createLoading}
                />
              </DialogActions>
            </Dialog>
          </Box>
        ) : null
      ) : null}
    </div>
  );
}
