import react from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Avatar,
  Divider,
} from '@material-ui/core';
import Text from '../Text';
export default function ReviewCard() {
  return (
    <Box
      p={2}
      m={2}
      borderLeft={5}
      borderBottom={0.5}
      borderRadius={4}
      borderColor="#3E2672"
    >
      <Grid container alignItems="center">
        <Grid item md={2} style={{ marginRight: '10px', marginBottom: '10px' }}>
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/200
"
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="body 1" style={{ fontWeight: 'bold' }}>
            Mahad Ahmad <br />
          </Typography>
          <Rating name="read-only" size="small" value={5} readOnly />
        </Grid>
        <Grid item md={1}>
          <MoreVertIcon />
        </Grid>
        <Grid item md={12}>
          <Text
            color="#060F1E"
            content="This is no doubt an amazing venture. I am amazed by the speed and
            progress of this so far. Godspeed team Akhuwat!"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
