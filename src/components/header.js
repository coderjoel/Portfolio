import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/stylesheet';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';


function HeaderDesktop() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container align="center" justify="center" style={{paddingTop: '2%'}}>
                <Grid container>
                    <Grid container item xs={2} style={{marginLeft: '8%'}}>
                        <Typography style={{color: 'white', fontFamily: 'Pacifico', textDecoration: 'none'}} variant="h1" component={Link} to="/">joel</Typography>
                    </Grid>
                    <Grid container item xs={2}>
                        <Button  component={Link} to="/about">
                            <Typography className={classes.app_bar_button} variant="h3">about</Typography>
                        </Button>
                    </Grid>
                    <Grid container item xs={2}>
                        <Button component={Link} to="/resume">
                            <Typography className={classes.app_bar_button} variant="h3">resume</Typography>
                        </Button>
                    </Grid>
                    <Grid container item xs={2}>
                        <Button component={Link} to="/projects">
                            <Typography className={classes.app_bar_button} variant="h3">projects</Typography>
                        </Button>
                    </Grid>
                    <Grid container item xs={2}>
                        <Button component={Link} to="/contact">
                            <Typography className={classes.app_bar_button} variant="h3">contact</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

function HeaderMobile() {
    const classes = useStyles();

    const [state, setState] = React.useState({right: false});

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
            <ListItem button key={text} component={Link} to={`/${text}`}>
                <ListItemText primary={text} classes={{primary: classes.list_item_text}}/>
            </ListItem>
            ))}
        </List>
        </div>
    );

    return (
        <AppBar position="static" style={{backgroundColor: 'black', paddingTop:'2%'}}>
            <Toolbar>
                <Grid container item xs={2} style={{marginLeft: '8%'}}>
                    <Typography style={{color: 'white', fontFamily: 'Pacifico', textDecoration: 'none'}} variant="h2" component={Link} to="/">joel</Typography>
                </Grid>
                <MenuIcon onClick={toggleDrawer('right', true)} style={{position: 'absolute', right: 0, marginRight: '5%'}}/>
            </Toolbar>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
        </Drawer>
        </AppBar>
            
    )
}

class Header extends React.Component {
  
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
        <HeaderDesktop/>
      );
    } else {
      return (
        <HeaderMobile/>
      );
    }
    }
}

export default Header;