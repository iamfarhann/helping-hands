import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import BallotIcon from "@material-ui/icons/Ballot";
import AssessmentIcon from "@material-ui/icons/Assessment";
import BusinessIcon from "@material-ui/icons/Business";

import ProjectCard from "../../../../containers/Charity/Project";
import ReactMarkdown from "react-markdown";
import Text from "../Text";

import Heading from "../Heading";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Divider,
} from "@material-ui/core";
import ProjectList from "./ProjectListCard";
const data = [
  {
    id: 123,
    title: "Help childeren in orphanage",
    organization: "Akhuwat Foundation",
    description:
      " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
    img: "https://source.unsplash.com/random",
    points: 84,
  },
  {
    id: 124,
    title: "Save corona patients",
    organization: "Edhi Foundation",
    description: "Edhi Description",
    img: "https://source.unsplash.com/random",
    points: 34,
  },
  {
    id: 127,
    organization: "FIF Foundation",
    title: "Donate for ration package",
    description: "FIF Description",
    img: "https://source.unsplash.com/random",
    points: 34,
  },
  {
    id: 117,
    organization: "SOS Children Village",
    title: "Help us build a school in Kasur",
    description: "SOS Description",
    img: "https://source.unsplash.com/random",
    points: 34,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    // <Typography
    //   component="div"
    //   role="tabpanel"
    //   hidden={value !== index}
    //   id={`scrollable-force-tabpanel-${index}`}
    //   aria-labelledby={`scrollable-force-tab-${index}`}
    //   {...other}
    // >
    <Box hidden={value !== index} component="div" {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Box>
    // </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    width: "1150px",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce({ organization }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box width={1}>
        <Box width={1}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Overview" icon={<BusinessIcon />} {...a11yProps(0)} />

            <Tab label="Projects" icon={<BallotIcon />} {...a11yProps(1)} />

            <Tab
              label="Documents"
              icon={<AssessmentIcon />}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <Box width={1}>
          <TabPanel value={value} index={0}>
            <ReactMarkdown source={organization.overview} />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container md={12} spacing={4}>
              {organization.projects.map((project) => {
                return (
                  <Grid item md={3} key={project.id}>
                    <ProjectCard project={project} />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Grid container md={12} spacing={4}>
              {organization.taxExemptionForm ? (
                <Grid item md={3}>
                  <a
                    href={`${process.env.PLAIN_URL}${organization.taxExemptionForm.url}`}
                    target="_blank"
                  >
                    <img
                      src={`${process.env.PLAIN_URL}${organization.taxExemptionForm.url}`}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </a>
                </Grid>
              ) : null}
              {organization.registrationCertificate ? (
                <Grid item md={3}>
                  <a
                    href={`${process.env.PLAIN_URL}${organization.registrationCertificate.url}`}
                    target="_blank"
                  >
                    <img
                      src={`${process.env.PLAIN_URL}${organization.registrationCertificate.url}`}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </a>
                </Grid>
              ) : null}
            </Grid>
          </TabPanel>
        </Box>
      </Box>
    </Paper>
  );
}
