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
  Modal
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import NextLink from "next/link";
import ExpandIcon from "@material-ui/icons/ExpandMoreOutlined";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  AppBar: {
    marginBottom: "100px"
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 2
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Container maxWidth="lg">
                <img src="/logo.png" height="40px" />
              </Container>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Toolbar style={{ marginBottom: "25px" }} />
    </React.Fragment>
  );
}

export default Header;
