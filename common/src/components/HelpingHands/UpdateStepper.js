import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Grid, Divider } from "@material-ui/core";
import Text from "../Text";
import Heading from "../Heading";
import { GET_PROJECT_UPDATES } from "../../../../lib/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";

import FsLightbox from "fslightbox-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Update # 3", "Update # 2", "Update # 1"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function UpdateStepper({ project }) {
  const { data, loading, error, refetch } = useQuery(GET_PROJECT_UPDATES, {
    variables: {
      where: { project: project ? project.id : "" },
      sort: "createdAt:desc",
      start: 0,
      limit: null,
    },
    skip: !project,
  });

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  //const steps = getSteps();
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data, "Updates");
      setSteps(data.updates);
    }
  }, [data]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [toggler, setToggler] = useState(false);
  const [coverToggler, setCoverToggler] = useState(false);
  const [imageSlide, setImageSlider] = useState(0);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((updateData, index) => (
          <Step key={updateData.id}>
            <StepLabel>
              {" "}
              <Heading
                as="h3"
                color="#060F1E"
                content={`Project Update on ${moment(
                  updateData.createAt
                ).format("MMMM Do, YYYY")}`}
                style={{ padding: "0px", margin: "0px" }}
              />
            </StepLabel>
            <StepContent>
              <Text color="#060F1E" content={updateData.update} />
              <FsLightbox
                toggler={toggler}
                type="image"
                sources={
                  updateData
                    ? updateData.images.map(
                        (pic) => `${process.env.PLAIN_URL}${pic.url}`
                      )
                    : []
                }
                slide={imageSlide}
              />
              {updateData.images.map((item, index) => {
                return (
                  <img
                    onClick={() => {
                      setToggler(!toggler);
                      setImageSlider(index + 1);
                    }}
                    src={`${process.env.PLAIN_URL}${item.url}`}
                    style={{
                      borderRadius: 4,
                      objectFit: "cover",
                      margin: 2,
                      height: "80px",
                      width: "80px",
                      cursor: "pointer",
                    }}
                  />
                );
              })}

              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
