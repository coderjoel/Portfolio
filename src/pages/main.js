import React, { useEffect } from 'react';
import '../App.css';
import { Grid, Typography, Collapse, Button } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import useStyles from '../styles/stylesheet'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { Link } from 'react-router-dom';

function Main() {

  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    document.title="Joel CS"
    const timer = setTimeout(() => {
    setChecked(prev => !prev)
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container align="center" justify="center">
      <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center" className={classes.hi_grid}>
          <Parallax y={["-10%", "120%"]} tagOuter="figure">
          <Collapse in={checked}>
              <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h1">Hi,<br/>I'm Joel Saji</Typography>
          </Collapse>
          </Parallax>
      </Grid>
      <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '20vh', paddingBottom: '10%' }}>
        <Grid item xs={6}>
          <Typography style={{color: 'white', fontFamily: 'Playfair Display', marginBottom: '2%'}} variant="h5">go to about</Typography>
          <Button component={Link} to='/about'>
            <ArrowDropDownCircleIcon style={{fill: 'white', height: 50, width: 50}} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
