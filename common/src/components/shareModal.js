import React, { useState } from "react";
import {
  Typography,
  Divider,
  Dialog,
  Box,
  Slide,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  CardHeading2: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: "Lato",
    fontSize: "1.4375rem",
    fontWeight: "bold",
    lineHeight: 1.22,
  },
  CardHeading: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: "Lato",
    fontSize: "1.125rem",
    fontWeight: "bold",
    lineHeight: 1.34,
  },
  SubmitButtom: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 2,
    letterSpacing: "1.25px",
  },
  SmallLoginButton: {
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: "0.9375rem",
    lineHeight: 3,
    textTransform: "none",
  },
  FacebookLoginButton: {
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: "0.9375rem",
    lineHeight: 3,
    textTransform: "none",
    color: theme.palette.getContrastText("#3C5A99"),
    backgroundColor: "#3C5A99",
    "&:hover": {
      backgroundColor: "#3a6ad0",
    },
  },
  ModalImage: {
    backgroundImage: `url('https://source.unsplash.com/random')`,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ShareProfile({ status, modalClose, url, heading }) {
  const classes = useStyles();
  const [copy, setCopy] = useState(false);
  return (
    <Dialog
      open={status}
      TransitionComponent={Transition}
      onClose={modalClose}
      disableRestoreFocus
      maxWidth="xs"
      fullWidth
      onExiting={() => {
        setCopy(false);
      }}
    >
      <Box width={1}>
        <Box width={1} px={2} py={1}>
          <Typography variant="h6" color="textSecondary" component="h1">
            {heading}
          </Typography>
        </Box>
        <Divider />
        <Box width={1} px={2} py={1}>
          <Box width={1}>
            <Typography
              variant="subtitle2"
              style={{
                fontWeight: 700,
                color: "rgba(0,0,0,0.6)",
                textTransform: "uppercase",
              }}
            >
              Share On
            </Typography>
          </Box>

          <Box width={1} py={2}>
            <Grid container justify="center" alignItems="center">
              <Grid item sm={2} xs>
                <FacebookShareButton
                  url={
                    url.includes("https") ? url : url.replace(/http/g, "https")
                  }
                >
                  <FacebookIcon size={48} round={true} />
                </FacebookShareButton>
              </Grid>
              <Grid item sm={2} xs>
                <WhatsappShareButton
                  url={
                    url.includes("https") ? url : url.replace(/http/g, "https")
                  }
                >
                  <WhatsappIcon size={48} round={true} />
                </WhatsappShareButton>
              </Grid>
              <Grid item sm={2} xs>
                <TwitterShareButton
                  url={
                    url.includes("https") ? url : url.replace(/http/g, "https")
                  }
                >
                  <TwitterIcon size={48} round={true} />
                </TwitterShareButton>
              </Grid>
              <Grid item sm={2} xs>
                <PinterestShareButton
                  url={
                    url.includes("https") ? url : url.replace(/http/g, "https")
                  }
                  media={url}
                >
                  <PinterestIcon size={48} round={true} />
                </PinterestShareButton>
              </Grid>
              <Grid item sm={2} xs>
                <LinkedinShareButton
                  url={
                    url.includes("https") ? url : url.replace(/http/g, "https")
                  }
                >
                  <LinkedinIcon size={48} round={true} />
                </LinkedinShareButton>
              </Grid>
            </Grid>
            {/* <Box px={1}>
                          
                        </Box>
                        <Box px={1}>
                          
                        </Box>
                        <Box px={1}>
                           
                        </Box>
                        <Box px={1}>
                          
                        </Box>
                        <Box px={1}>
                           
                        </Box> */}
          </Box>
          <Box width={1} py={1}>
            <Typography
              variant="subtitle2"
              style={{
                fontWeight: 700,
                color: "rgba(0,0,0,0.6)",
                textTransform: "uppercase",
              }}
            >
              Copy Link
            </Typography>
          </Box>
          <Box width={1} px={1} pb={1}>
            <TextField
              name="URL"
              label="URL"
              variant="outlined"
              margin="dense"
              value={
                url.includes("https") ? url : url.replace(/http/g, "https")
              }
              onClick={(e) => {
                e.target.select();
                // UrlRef.current.select();
                document.execCommand("copy");
                setCopy(true);
              }}
              fullWidth
              inputProps={{
                readOnly: true,
              }}
              helperText={!copy ? `Click to copy link` : `Link Copied!`}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
