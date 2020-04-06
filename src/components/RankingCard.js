import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PetsIcon from "@material-ui/icons/Pets";
import LinearSlider from "./LinearSlider";

const useStyles = makeStyles({
  root: {
    minWidth: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function RankingCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper>
      <Grid container>
        <Grid item md={4}>
          <List>
            <Link href=".././organization">
              <ListItem button>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="./akhuwat-logo-1.png" />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Box width={1}>
                    <Typography variant="body1" gutterBottom>
                      Akhuwat Foundation
                    </Typography>
                    <LinearSlider />
                  </Box>
                </ListItemText>
              </ListItem>
            </Link>
            <Link href=".././organization">
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Box width={1}>
                    <Typography variant="body1" gutterBottom>
                      Edhi Foundation
                    </Typography>
                    <LinearSlider />
                  </Box>
                </ListItemText>
              </ListItem>
            </Link>
            <Link href=".././organization">
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Box width={1}>
                    <Typography variant="body1" gutterBottom>
                      Sahara Trust
                    </Typography>
                    <LinearSlider />
                  </Box>
                </ListItemText>
              </ListItem>
            </Link>
            <Link href=".././organization">
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Box width={1}>
                    <Typography variant="body1" gutterBottom>
                      FIF Foundation
                    </Typography>
                    <LinearSlider />
                  </Box>
                </ListItemText>
              </ListItem>
            </Link>
            <Link href=".././organization">
              <ListItem button>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Box width={1}>
                    <Typography variant="body1" gutterBottom>
                      SOS Childern's Village
                    </Typography>
                    <LinearSlider />
                  </Box>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item md={1}>
          <Box justifyContent="center" py={3} px={4} bgcolor="background.paper">
            <Paper>
              <Typography variant="h6" gutterBottom>
                84
              </Typography>
            </Paper>
          </Box>
          <Box justifyContent="center" px={4} bgcolor="background.paper">
            <Paper>
              <Typography variant="h6" gutterBottom>
                53
              </Typography>
            </Paper>
          </Box>
          <Box justifyContent="center" py={2} px={4} bgcolor="background.paper">
            <Paper>
              <Typography variant="h6" gutterBottom>
                67
              </Typography>
            </Paper>
          </Box>
          <Box justifyContent="center" px={4} bgcolor="background.paper">
            <Paper>
              <Typography variant="h6" gutterBottom>
                91
              </Typography>
            </Paper>
          </Box>
          <Box justifyContent="center" px={4} py={2} bgcolor="background.paper">
            <Paper>
              <Typography variant="h6" gutterBottom>
                95
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Paper elevation={1}>
            <Box py={4} m={1}>
              <Typography variant="body1" gutterBottom>
                “To act as a model institution to alleviate the suffering of
                patients with cancer through the application of modern methods
                of curative and palliative therapy irrespective of their ability
                to pay, the education of health care professionals and the
                public and perform research into the causes and treatment of
                cancer.”
                <br />
                The Shaukat Khanum Memorial Trust has established a number of
                centres all over Pakistan that help in the awareness, diagnosis,
                and treatment of cancer in Pakistan. Hospitals Shaukat Khanum
                Memorial Cancer Hospital and Research Centre (Lahore, Pakistan),
                the first specialised cancer facility in the entire region with
                all the cancer diagnostic and therapeutic facilities under…
                <br />
                For more than two decades, SKMCH&RC has been committed to the
                highest standards of patient care, education, and research. The
                Hospital’s commitment has been recognized at both, national and
                international levels. Accreditation by the American Society of
                Health-System Pharmacists Pharmacy residency program of SKMCH&RC
                has been accredited by the American Society of Health-System
                Pharmacists
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
