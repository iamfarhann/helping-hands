import React, { useEffect } from "react";
import {
  Tooltip,
  Hidden,
  Typography,
  Container,
  Grid,
  Divider,
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  TextField,
  useScrollTrigger
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "../Link";

const useStyles = makeStyles(theme => ({
  AppContainer: {
    boxShadow: theme.shadows[4],
    background: "#fff"
  },
  FooterContainer: {
    // padding: '0px',
    marginTop: "50px",
    marginBottom: "50px"
  },
  MenuHeading: {
    marginBottom: "35px"
  },
  FooterContainerSecond: {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "black",
    maxWidth: "100%"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="xl" className={classes.FooterContainerSecond}>
        <Box pt="20px" pb={2}>
          <Typography component="div">
            <Box
              textAlign="center"
              fontFamily="Roboto"
              fontSize="1rem"
              fontWeight={300}
              lineHeight="1.2"
              color="white"
            >
              Copyright © 2003 - 2019 Helping Hands (Pvt) Ltd. - All Rights
              Reserved.
            </Box>
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
