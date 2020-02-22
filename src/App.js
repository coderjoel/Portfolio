import React, { useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import useStyles from './styles/stylesheet'
import Layout from './components/desktop/layout'
import LayoutMobile from './components/mobile/layout'

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
      <Layout>
      <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center" className={classes.hi_grid}>
        <Parallax y={["-10%", "120%"]} tagOuter="figure">
          <Collapse in={checked}>
            <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h1">Hi,<br/>I'm Joel Saji</Typography>
          </Collapse>
        </Parallax>
      </Grid>
      <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '50vh', paddingBottom: '10%' }}>
          <Typography style={{color: 'white', fontFamily: 'Courier Prime'}} variant="h5">site under construction...<span role="img" aria-label="emoji">👨‍💻</span></Typography>
      </Grid>
      </Layout>
    </Grid>
  );
}

function LandingMobile() {
  const classes = useStyles();
  
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecked(prev => !prev)
      }, 1500);
    return () => clearTimeout(timer);
  }, []);  

  return (
    <div className={classes.root}>
      <Grid container align="center" justify="center" >
        <LayoutMobile>
          <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center" className={classes.hi_grid}>
            <Parallax y={["-10%", "120%"]} tagOuter="figure">
              <Collapse in={checked}>
                <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h1">Hi,<br/>I'm Joel Saji</Typography>
              </Collapse>
            </Parallax>
          </Grid>
          <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '50vh', paddingBottom: '10%' }}>
              <Typography style={{color: 'white', fontFamily: 'Courier Prime'}} variant="h7">site under construction...<span role="img" aria-label="emoji">👨‍💻</span></Typography>
          </Grid>
        </LayoutMobile>
      </Grid>
    </div>
  );
}

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentDidMount() {
    document.title="Joel CS"
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    // the rest is the same...
    if (!isMobile) {
      return (
        <ParallaxProvider>
          <Landing />
        </ParallaxProvider>
      );
    } else {
      return (
        <ParallaxProvider>
          <LandingMobile />
        </ParallaxProvider>
      );
    }
  }
}

export default App;
