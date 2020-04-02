import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import MuiLink from '@material-ui/core/Link';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  testGrid: {
    backgroundColor: "orange",
  }
}));


export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.testGrid} alignItems="flex-end" spacing={2}>
        <Grid container item md={8} spacing={2}>
         <Grid item>
           <img src="/car_placeholder.png" width={230} height={230} />
         </Grid>
        </Grid>
        <Grid item md={4}>
          helllo <br/>
          ashdbhjasvdjh<br/>
        </Grid>
        {/* <Grid item md={12}>
          4th
        </Grid>
        <Grid item md={12}>
          5th
        </Grid> */}
      </Grid>

      {/* <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography> */}
      {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
      {/* <ProTip /> */}
      {/* <Copyright /> */}
      {/* </Box> */}
    </Container>
  );
}
