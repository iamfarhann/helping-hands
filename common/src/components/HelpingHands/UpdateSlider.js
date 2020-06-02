import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    height: 300
  }
});

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 1,
    label: "03/21"
  },
  {
    value: 25,
    label: "03/25"
  },
  {
    value: 50,
    label: "03/29"
  },
  {
    value: 100,
    label: "04/12"
  }
];

export default function UpdateSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          defaultValue={[1, 25, 50, 100]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
    </React.Fragment>
  );
}
