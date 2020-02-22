import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flex: 1,
      backgroundColor: 'black',
      height: '100%',
      width: '100%'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <h1 style={{fontFamily:'PastCode'}}>joel</h1>
            </Grid>
        </div>
    );
}

export default Landing;
