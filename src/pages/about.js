import React, { useEffect } from 'react';
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

const useStyles = makeStyles({
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
});


function FirstQuarter() {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setChecked(prev => !prev)
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
}

export default FirstQuarter;