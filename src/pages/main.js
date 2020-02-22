import React, { useEffect } from 'react';
import '../App.css';
import { Grid, Typography, Collapse } from '@material-ui/core';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import useStyles from '../styles/stylesheet'

function Landing() {

  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
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
      <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '50vh', paddingBottom: '10%' }}>
        <Grid item xs={6}>
          <Typography style={{color: 'white', fontFamily: 'Courier Prime'}} variant="h5">site under construction <span role="img" aria-label="emoji">👨‍💻</span></Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

class Main extends React.Component {
  
  componentDidMount() {
    document.title="Joel CS"
  }

  render() {
    return (
      <ParallaxProvider>
        <Landing />
      </ParallaxProvider>
    );
  }
}

export default Main;
