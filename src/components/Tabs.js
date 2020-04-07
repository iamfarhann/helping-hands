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
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Divider
} from "@material-ui/core";
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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    width: "1150px",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonForce() {
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
        <Typography variant="h6">Overview</Typography>
        <Typography variant="body1" paragraph>
          Akhuwat is the world’s largest Islamic micro-finance organization.
          Since 2001, Akhuwat has been working for poverty alleviation by
          empowering socially and economically marginalized segments of the
          society through its various poverty alleviation projects. Akhuwat aims
          to alleviate poverty by creating a bond of solidarity between the
          affluent and the marginalized. Our goal is to develop and sustain a
          social system based on mutual support. Akhuwat not only helps and
          support the poor to become self-reliant but combined with their own
          hard work enable them to escape the clutches of poverty.
        </Typography>
        <Typography variant="h6">Philosophy of Akhuwat</Typography>
        <Typography variant="body1" paragraph>
          Akhuwat derives its name from ‘mawakhaat’ or brotherhood, the earliest
          example of which was seen in the community formed by the Ansars,
          citizens of Medina and the Muhajireen, who had migrated to Medina to
          escape religious persecution. Inspired by the spirit which induced the
          Medinites to share half of their wealth with the migrants, Akhuwat
          seeks to invoke this very concept of brotherhood through its
          operations. For Akhuwat, the metaphor of brotherhood entails the
          creation of a system based on mutual support in the society.
        </Typography>
        <Typography variant="h6">Our Values</Typography>
        <Typography variant="body1" paragraph>
          Interest-free Loans – The loan provided will be interest free since
          providing loans with interest is business and poverty cannot be
          alleviated and eradicated by doing business with the deprived. Use of
          Religious Places – Akhuwat wants to climb up the ladder of social and
          economic development through making Mosques, churches and religious
          places, the foundation. This is because in Islamic history Mosques
          used to be the seat of governance. In the time of Prophet Muhammad
          PBUH, mosques were used for worship, training and providing services.
          With this, comes the Transparency, Good Governance, participation and
          accountability. Volunteerism – To think beyond the confines of oneself
          and to think about others. Akhuwat’s operations and activities rely
          upon the passion, energy, zeal and enthusiasm of its volunteers.
          Transforming Borrowers into Donors – Akhuwat strives to empower its
          borrowers, so they are in a position to be givers one day.
          Non-Discrimination on Caste, Color, Creed, Political Affiliation &
          Faith – Since Akhuwat strongly believes in solidarity and brotherhood.
          Therefore, it gives a message to cut down all the discriminatory and
          differential barriers in the society such as caste, color creed,
          political affiliation and religion.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
          </Box>
      </Box>
    </Paper>
    // <Grid container className={classes.root} alignContent="center">
    //   {/* <AppBar position="static" color="default"> */}
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       variant="scrollable"
    //       scrollButtons="on"
    //       indicatorColor="primary"
    //       textColor="primary"
    //       aria-label="scrollable force tabs example"
    //       padding="90"
    //     >
    //       <Grid container item sm={4} justify="space-around">
    //         <Tab label="Overview" icon={<BusinessIcon />} {...a11yProps(0)} />
    //       </Grid>
    //       <Grid container item sm={4} justify="space-around">
    //         <Tab label="Projects" icon={<BallotIcon />} {...a11yProps(1)} />
    //       </Grid>
    //       <Grid container item sm={4} justify="space-around">
    //         <Tab
    //           label="Transparency Metrics"
    //           icon={<AssessmentIcon />}
    //           {...a11yProps(2)}
    //         />
    //       </Grid>
    //     </Tabs>
    //   {/* </AppBar> */}

      
    // </Grid>
  );
}
