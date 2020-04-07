import react from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Divider
} from "@material-ui/core";
import LinearSlider from "../../src/components/LinearSlider";
import Avatar from "@material-ui/core/Avatar";
import DonorList from "../../src/components/DonorList";
import UpdateSlider from "../../src/components/UpdateSlider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventIcon from "@material-ui/icons/Event";
import LabelIcon from "@material-ui/icons/Label";
import { useRouter } from "next/router";


export default function project() {
  const { query } = useRouter();

  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh", paddingTop: "78px" }}>
      <Grid container spacing={2}>
        <Grid item md={12} >
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            {query.project}
          </Typography>
        </Grid>

        <Grid container item md={8} spacing={1}>
          <Grid item md={12}>
            <img src="/slum.jpg" height="400px" width="100%" style={{ borderRadius: 4 }} />
          </Grid>
          <Grid item container md={12} spacing={2} style={{paddingRight:0,margin:0}}>
            <Grid item md={2}>
            <img src="/slum.jpg" height="100px" width="100%" style={{ borderRadius: 4,objectFit:"cover" }} />
            </Grid>
            <Grid item md={2}>
            <img src="/slum.jpg" height="100px" width="100%" style={{ borderRadius: 4,objectFit:"cover" }} />
            </Grid>
            <Grid item md={2}>
            <img src="/slum.jpg" height="100px" width="100%" style={{ borderRadius: 4,objectFit:"cover" }} />
            </Grid>
            <Grid item md={2}>
            <img src="/slum.jpg" height="100px" width="100%" style={{ borderRadius: 4,objectFit:"cover" }} />
            </Grid>
            <Grid item md={2}>
            <img src="/slum.jpg" height="100px" width="100%" style={{ borderRadius: 4,objectFit:"cover" }} />
            </Grid>
            <Grid item md={2}>
            <img src="/slum.jpg" height="100px" width="100%" style={{ borderRadius: 4,objectFit:"cover" }} />
            </Grid>
          </Grid>
          <Grid container item md={12} spacing={1} alignItems="center" style={{paddingTop:"16px"}}>
            <Grid item md={1}>
              <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/200"
                    />
            </Grid>
            <Grid item md={11}>
              <Typography variant="h6">
                Akhuwat is organizing this fundraiser
              </Typography>
            </Grid>
            <Grid item md={12}>
            <Divider  />
            </Grid>
            <Grid container item md={6} spacing={1}  >
              <Grid item>
                <EventIcon />
              </Grid>
              <Grid item>
              <Typography variant="body1">
              Created April 2nd, 2020
              </Typography>
              </Grid>
            </Grid>
            <Grid container item md={6} spacing={1} >
              <Grid item>
              <LabelIcon />
              </Grid>
              <Grid item>
              <Typography variant="body1">
              Education
              </Typography>
              </Grid>
            </Grid>

          </Grid>




          <Grid item md={12}>
              <Paper >
                <Box width={1} p={2}>
                <Typography variant="h6">Description</Typography>
                <Typography variant="paragraph">
                  The academic world stands witness to several occasions when
                  Pakistani students stunned their peers, international
                  counterparts, and even their mentors by not only acing but also
                  setting unimaginably high standards of success in numerous
                  international examinations and certifications. There is no doubt
                  that these success stories make us feel proud as a nation, but
                  more importantly, they also serve as a source of motivation for
                  people who want to use their skills for the betterment of
                  Pakistan. Rohayl Varind is one such motivated and dedicated
                  individual whose name is worth mentioning when it comes to the
                  select few humanitarians that want to make a difference,
                  academically. He is credited with proposing and single-handedly
                  bringing the concept of Students Learning Under the Moon SLUM
                  School — the first ever Solar-Powered Night School in Pakistan —
                  to life. While the government of Pakistan is taking every
                  possible measure to promote education and ensure that every
                  child in Pakistan has unhindered access to quality education,
                  the private sector, including the NGOs and NPOs operating in the
                  country, have historically always lent tremendous support to
                  this worthy cause. Two well-known and proven examples include
                  the many initiatives to promote education in Pakistan by The
                  Citizens Foundation and the ILM Possible campaign, a joint
                  effort by the EAC and the British Council in Pakistan.
                  Similarly, Ruhayl Varind — an award-winning entrepreneur, social
                  activist, and educationist — has laid the foundations of
                  something extraordinary for the next generation in the form of a
                  solar night school.
              </Typography>
              </Box>
              </Paper>
             
          </Grid>
          <Grid item md={12}>
          <Paper>
            <Box width={1} p={2}>
              <Grid container alignItems="flex-start" spacing={1}>
                <Grid item md={12}>
                <Typography variant="h6" gutterBottom>Updates</Typography>
                </Grid>
                <Grid item md={2}>
                  <UpdateSlider />
                </Grid>
                <Grid item md={10}>

                <Typography variant="h6">Latest visit</Typography>
                      <Typography variant="paragraph">
                        Rohayl Varind, the founder himself, visits the school
                        daily for at least two hours to keep a regular check on
                        the progress of students. According to him, the motive
                        behind SLUM school, which is his philanthropic venture, is
                        to enable out-of-school children in Pakistan to at least
                        get basic education and academic knowledge.
                    </Typography>
                </Grid>
              </Grid>
              
                </Box>
              </Paper>
              
          </Grid>
        </Grid>



        <Grid conatiner item md={4}>
          <Paper>
            <Box p={2}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item >
                  <Typography variant="h6">PKR 6700</Typography>
                </Grid>
                <Grid item >
                  <Typography variant="body2">raised of PKR 20,000</Typography>
                </Grid>
                <Grid item md={12}>
                <LinearSlider />
                </Grid>
                
                <Grid item container alignItems="center" md={12}>
                  <Grid item md={4}>
                    <Typography variant="body2" style={{ fontWeight: "bold" }}>
                      18
                  </Typography>
                    <Typography variant="body2">Donors</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="body2" style={{ fontWeight: "bold" }}>
                      39
                  </Typography>
                    <Typography variant="body2">Shares</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="body2" style={{ fontWeight: "bold" }}>
                      18
                  </Typography>
                    <Typography variant="body2">Followers</Typography>
                  </Grid>
                </Grid>
                <Grid item md={12}>
                <Button
                  size="small"
                  variant="contained"
                  fullWidth
                  color="primary"
                  
                >
                  Dontate Now
              </Button>
                </Grid>
              <Grid item md={12}>
                <Button
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                
                >
                  Share
              </Button>
              </Grid>
              <Grid item md="12" style={{paddingTop:"8px"}}>
              <Divider />
              </Grid>
              <Grid item md={12}>
              <DonorList />
              </Grid>
              <Grid item md={12} align="center">
              <Button
                // size="small"
                variant="contained"
                color="primary"
                // style={{ marginBottom: 5, marginTop: 10, marginLeft: 160 }}
              >
                See All
            </Button>
              </Grid>
              </Grid>
              
            
             
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
