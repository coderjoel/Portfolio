import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flex: 1,
      backgroundColor : 'black',
      height: "100vh"
    }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
          <Typography style={{color: 'white', fontFamily: 'Pacifico'}} variant="h1">joel</Typography>
          <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h5" gutterBottom>portfolio</Typography>
          <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h3" gutterBottom>Coming soon!</Typography>

      </Grid>
    </div>
  );
}

export default App;
