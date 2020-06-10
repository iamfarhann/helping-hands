import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <Grid container style={{}}>
      <Grid item md={2}></Grid>
      <Grid item md={8} style={{}}>
        <Container style={{ padding: "40px" }}>
          {" "}
          <Grid container>
            <Grid item md={5} style={{}}>
              {/* FIXME: Color of text fields */}
              <TextField
                name="fullName"
                label="Full Name"
                variant="outlined"
                size="small"
                style={{ color: "#3E2672" }}
                fullWidth
              />

              <TextField
                id="outlined-basic"
                name="mobileNumber"
                label=""
                variant="outlined"
                size="small"
                style={{ color: "#05B890" }}
                fullWidth
              />
            </Grid>

            <Grid container item md={12}>
              <a href="/signup_o">Signup as organization?</a>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
