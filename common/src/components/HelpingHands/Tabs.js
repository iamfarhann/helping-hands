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
              label="Transparency Metrics"
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
            <Heading as="h3" content="Overview" />
            <Text
              content="
              Akhuwat is the world’s largest Islamic micro-finance organization.
              Since 2001, Akhuwat has been working for poverty alleviation by
              empowering socially and economically marginalized segments of the
              society through its various poverty alleviation projects. Akhuwat
              aims to alleviate poverty by creating a bond of solidarity between
              the affluent and the marginalized. Our goal is to develop and
              sustain a social system based on mutual support. Akhuwat not only
              helps and support the poor to become self-reliant but combined
              with their own hard work enable them to escape the clutches of
              poverty.
            "
            />
            <Heading as="h3" content="Philosophy of Akhuwat" />
            <Text
              content="
              Akhuwat derives its name from ‘mawakhaat’ or brotherhood, the
              earliest example of which was seen in the community formed by the
              Ansars, citizens of Medina and the Muhajireen, who had migrated to
              Medina to escape religious persecution. Inspired by the spirit
              which induced the Medinites to share half of their wealth with the
              migrants, Akhuwat seeks to invoke this very concept of brotherhood
              through its operations. For Akhuwat, the metaphor of brotherhood
              entails the creation of a system based on mutual support in the
              society."
            />
            <Heading as="h3" content="Our Values" />
            <Text
              content="
              Interest-free Loans – The loan provided will be interest free
              since providing loans with interest is business and poverty cannot
              be alleviated and eradicated by doing business with the deprived.
              Use of Religious Places – Akhuwat wants to climb up the ladder of
              social and economic development through making Mosques, churches
              and religious places, the foundation. This is because in Islamic
              history Mosques used to be the seat of governance. In the time of
              Prophet Muhammad PBUH, mosques were used for worship, training and
              providing services. With this, comes the Transparency, Good
              Governance, participation and accountability. Volunteerism – To
              think beyond the confines of oneself and to think about others.
              Akhuwat’s operations and activities rely upon the passion, energy,
              zeal and enthusiasm of its volunteers. Transforming Borrowers into
              Donors – Akhuwat strives to empower its borrowers, so they are in
              a position to be givers one day. Non-Discrimination on Caste,
              Color, Creed, Political Affiliation & Faith – Since Akhuwat
              strongly believes in solidarity and brotherhood. Therefore, it
              gives a message to cut down all the discriminatory and
              differential barriers in the society such as caste, color creed,
              political affiliation and religion.
            "
            />
          </TabPanel>
        </Box>
      </Box>
    </Paper>
  );
}
