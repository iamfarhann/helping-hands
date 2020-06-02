import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Divider,
  Button,
  Box,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 100,
    // paddingTop: '56.25%', // 16:9
  },
}));

export default function AddCredit({ data }) {
  const classes = useStyles();

  return (
    <Box
      m={5}
      p={5}
      border={1}
      borderColor="primary"
      borderRadius="borderRadius"
    >
      <Typography
        style={{
          fontFamily: '"Heebo",sans-serif',
          color: "#140047",
          fontSize: "36px",
          lineHeight: "36px",
          fontWeight: "700",
          display: "block",
          letterSpacing: "1.5px",
          textAlign: "center",
        }}
      >
        50 <br />
      </Typography>
      <Typography
        style={{
          fontFamily: '"Heebo",sans-serif',
          color: "#140047",
          fontSize: "24px",
          lineHeight: "24px",
          fontWeight: "700",
          display: "block",
          letterSpacing: "1.5px",
          textAlign: "center",
        }}
      >
        Credits
      </Typography>
      <Button
        fullWidth
        color="primary"
        variant="outlined"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        BUY
      </Button>
      <Typography
        style={{
          fontFamily: '"Heebo",sans-serif',
          color: "#140047",
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "700",
          display: "block",
          letterSpacing: "1.5px",
          textAlign: "center",
        }}
      >
        PKR 50.00
      </Typography>
    </Box>
  );
}
