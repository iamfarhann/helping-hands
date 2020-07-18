import react, { useEffect } from "react";
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
import { CREATE_REVIEWS } from "../../../../lib/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";
import Button from "../../../../common/src/components/Button";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ReviewCard({ project }) {
  const { data, loading, error, refetch } = useQuery(GET_PROJECT_REVIEWS, {
    variables: {
      where: { project: project ? project.id : "" },
      sort: "createdAt:desc",
      start: 0,
      limit: null,
    },
    skip: !project,
  });
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

  // const [createReview] = useMutation(CREATE_REVIEW, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //     setCreateError("Project Added succesfully!");
  //     setCreateLoading(false);
  //     handleReset();
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     setCreateError("Sorry an error occurred. Please try again!");
  //   },
  // });
  // createReview({
  //   variables: {
  //     fields: {
  //       data: {
  //         titleImage: values.titleImage,
  //         relatedImages: values.relatedImages.length
  //           ? values.relatedImages
  //           : null,
  //         name: values.name,
  //         targetAmount: values.targetAmount,
  //         shortDescription: values.shortDescription,
  //         description: values.description,
  //         organization: organization.id,
  //         status: "active",
  //         tags: values.tags.length
  //           ? values.tags.map((item) => {
  //               return item.id;
  //             })
  //           : null,
  //       },
  //     },
  //   },
  // });

  return (
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
                <Avatar
                  alt="Remy Sharp"
                  src="https://picsum.photos/200
"
                />
              </Grid>
              <Grid item md={8}>
                <Typography variant="body 1" style={{ fontWeight: "bold" }}>
                  Mahad Ahmad <br />
                </Typography>
                <Rating name="read-only" size="small" value={5} readOnly />
              </Grid>
              <Grid item md={1}>
                <MoreVertIcon />
              </Grid>
              <Grid item md={12}>
                <Text
                  color="#060F1E"
                  content="This is no doubt an amazing venture. I am amazed by the speed and
            progress of this so far. Godspeed team Akhuwat!"
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )
      //else
      }
      <Container
        style={{
          textAlign: "center",
        }}
      >
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
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
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
              onClick={handleClose}
              title="Submit"
              variant="extendedFab"
            />
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}
