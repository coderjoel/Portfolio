import React, { useEffect } from 'react';
import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
      flex: 1,
      backgroundColor : 'black',
      height: "100%",
    },
    app_bar_button: {
      '@media (min-width:200px)': {
        fontSize: '1.5rem',
        marginTop: '10%',
      },
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
        marginTop: '13%',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
        marginTop: '10%',
      },
      '@media (min-width:1279px)': {
        fontSize: '2.5rem',
        marginTop: '5%',
      },
      "&:hover": {
        backgroundColor: 'white',
        color: 'black',
      },
      color: 'white',
      fontFamily: 'Playfair Display',
      textTransform: 'none',
    },
    square: {
      '@media (min-width:200px)': {
        width: 250,
        height: 80,
      },
      '@media (min-width:600px)': {
        width: 250,
        height: 80,
      },
      '@media (min-width:960px)': {
        width: 250,
        height: 80,
      },
      '@media (min-width:1279px)': {
        width: 300,
        height: 100,
      },
      backgroundColor: 'white',
    },
    hi_grid: {
      '@media (min-width:200px)': {
        minHeight: '60vh',
        marginTop: '-9%',
      },
      '@media (min-width:600px)': {
        minHeight: '100vh',
        marginTop: '-9%',
      },
      '@media (min-width:960px)': {
        minHeight: '100vh',
        marginTop: '-9%',
      },
      '@media (min-width:1279px)': {
        minHeight: '100vh',
        marginTop: '-9%',
      },
    },
    parallax_grid: {
      '@media (min-width:200px)': {
        marginTop: '25%'
      },
      '@media (min-width:600px)': {
        marginTop: '25%'
      },
      '@media (min-width:960px)': {
        marginTop: '5%'
      },
      '@media (min-width:1279px)': {
        marginTop: '5%'
      },
    },
    list_item_text: {
      '@media (min-width:200px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      color: 'black',
      fontFamily: 'Playfair Display',
      textTransform: 'none',
    }
}));

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function Square() {
  const classes = useStyles();

  return (
      <div className={classes.square} />
  )
};

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
    <div className={classes.root}>
      <Grid container align="center" justify="center" style={{paddingTop: '2%'}}>
        <Grid container>
          <Grid container item xs={2} style={{marginLeft: '8%'}}>
              <Typography style={{color: 'white', fontFamily: 'Pacifico'}} variant="h1">joel</Typography>
          </Grid>
          <LightTooltip title="coming soon" className={classes.tooltip}>
            <Grid container item xs={2}>
              <Button  className={classes.app_bar_button}>
                about
              </Button>
            </Grid>
          </LightTooltip>
          <LightTooltip title="coming soon">
            <Grid container item xs={2}>
              <Button  className={classes.app_bar_button}>
                resume
              </Button>
            </Grid>
          </LightTooltip>
          <LightTooltip title="coming soon" className={classes.tooltip}>
            <Grid container item xs={2}>
              <Button  className={classes.app_bar_button}>
                projects
              </Button>
            </Grid>
          </LightTooltip>
          <LightTooltip title="coming soon" className={classes.tooltip}>
            <Grid container item xs={2}>
              <Button  className={classes.app_bar_button}>
                contact
              </Button>
            </Grid>
          </LightTooltip>
        </Grid>
        <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center" className={classes.hi_grid}>
          <Parallax y={["-10%", "120%"]} tagOuter="figure">
            <Collapse in={checked}>
              <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h1">Hi,<br/>I'm Joel Saji</Typography>
            </Collapse>
          </Parallax>
        </Grid>
        {/* <Grid item className={classes.parallax_grid}>
          <Parallax x={[ '-6%', "120%"]}tagOuter="figure">
            <Square/>
          </Parallax>
        </Grid>
        <Grid item className={classes.parallax_grid} >
          <Parallax x={[ '40%', '-180%']}tagOuter="figure">
              <Square/>
          </Parallax>
        </Grid> */}
        <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '50vh', paddingBottom: '10%' }}>
            <Typography style={{color: 'white', fontFamily: 'Courier Prime'}} variant="h5">site under construction...<span role="img" aria-label="emoji">👨‍💻</span></Typography>
        </Grid>
      </Grid>
    </div>
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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['about', 'resume', 'projects', 'contact'].map((text, index) => (
          <LightTooltip title="coming soon" className={classes.tooltip}>
            <ListItem button key={text}>
              <ListItemText primary={text} classes={{primary: classes.list_item_text}}/>
            </ListItem>
          </LightTooltip>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid container align="center" justify="center" style={{paddingTop: '2%'}}>
        <AppBar position="static" style={{backgroundColor: 'black'}}>
          <Toolbar>
            <Grid container item xs={2} style={{marginLeft: '8%'}}>
                <Typography style={{color: 'white', fontFamily: 'Pacifico'}} variant="h2">joel</Typography>
            </Grid>
            <MenuIcon onClick={toggleDrawer('right', true)} style={{position: 'absolute', right: 0, marginRight: '5%'}}/>
          </Toolbar>
        </AppBar>
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
        <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '10vh', paddingBottom: '10%' }}>
            <Typography style={{color: '#adadad', fontFamily: 'Open Sans', fontSize: 12}} >JOEL CHACKO <span style={{ color: '#F2AA4CFF'}}>©2020</span></Typography>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
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
