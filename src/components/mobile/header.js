import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from '../../styles/stylesheet'
import Drawer from '@material-ui/core/Drawer';

const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);


function HeaderMobile() {
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
            <AppBar position="static" style={{backgroundColor: 'black'}}>
                <Toolbar>
                    <Grid container item xs={2} style={{marginLeft: '8%'}}>
                        <Typography style={{color: 'white', fontFamily: 'Pacifico'}} variant="h2">joel</Typography>
                    </Grid>
                    <MenuIcon onClick={toggleDrawer('right', true)} style={{position: 'absolute', right: 0, marginRight: '5%'}}/>
                </Toolbar>
                <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {sideList('right')}
            </Drawer>
            </AppBar>
            
    )
}

export default HeaderMobile;