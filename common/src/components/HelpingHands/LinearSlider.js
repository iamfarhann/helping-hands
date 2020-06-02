import React, { useState } from 'react';
import { LinearProgress, Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
}));



export default function LinearSlider(props) {
    const classes = useStyles();


    return (
        <Box display="flex" width={1} alignItems="center">
            <Box width={1}>
                <LinearProgress variant="determinate" value={20} />

            </Box>
        </Box>
    );
};