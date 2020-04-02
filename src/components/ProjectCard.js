import React,{useState,useEffect} from 'react';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,IconButton,Typography,Grid,Divider,Button,Slider,Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
      },
      media: {
        height: 256,
        // paddingTop: '56.25%', // 16:9
      },
 
  }));

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }


export default function ProjectCard(props){
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Paella dish"
            />
            <CardContent>
            <Box px={1} width={1}>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
               
                step={0}
                valueLabelDisplay="auto"
                marks={marks}
            />
            </Box>
                <Typography variant="h6" component="h1" gutterBottom>
                    Brick Klin School
                </Typography>

                <Grid container spacing={1}>
                    <Grid item md={11}>
                        <Typography variant="body1" gutterBottom>
                            Foundation 1
                        </Typography>
                    </Grid>
                    <Grid item md={1}>
                       <ShareIcon/>
                    </Grid>
                </Grid>
                <Divider style={{marginBottom:"4px"}}/>
                <Grid container spacing={1}>
                    <Grid item md={11}>
                        <Typography variant="body1" gutterBottom>
                            Foundation 2
                        </Typography>
                    </Grid>
                    <Grid item md={1}>
                        <Typography variant="body1" gutterBottom>
                            I
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{marginBottom:"4px"}}/>

                <Typography variant="body2" gutterBottom>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              
                
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" fullWidth color="primary">
                Dontate Now
                </Button>
                
            </CardActions>
            
        </Card>
    );
}