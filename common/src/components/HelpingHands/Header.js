import React, { useState, useEffect } from "react";
import {
  SwipeableDrawer,
  TextField,
  InputAdornment,
  Hidden,
  Typography,
  Container,
  Grid,
  Divider,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Box,
  useScrollTrigger,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import NextLink from "next/link";
import ExpandIcon from "@material-ui/icons/ExpandMoreOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  AppBar: {
    marginBottom: "100px",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 2,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="transparent">
          <Container maxWidth="xl" style={{ padding: 0 }}>
            <Toolbar disableGutters>
              <Container maxWidth="lg" style={{ paddingLeft: 20 }}>
                <Grid container>
                  <Grid item md={6}>
                    <a href="/">
                      <img src="/logo_v2.png" height="40px" />
                    </a>
                  </Grid>
                  <Grid container item md={6} justify="flex-end">
                    <SearchIcon
                      color="primary"
                      fontSize="large"
                      //style={{ paddingTop: 5 }}
                    />

                    <Button color="primary">Search</Button>

                    <Button href="/signup" color="primary">
                      Sign Up
                    </Button>

                    <Button href="/signin" color="primary">
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      {/* <Toolbar style={{ marginBottom: "0px", color: "primary" }} /> */}
    </React.Fragment>
  );
}

export default Header;
