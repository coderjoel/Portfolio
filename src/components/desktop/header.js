import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from '../../styles/stylesheet'

const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);


function Header() {
    const classes = useStyles();

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
            </Grid>
        </div>
    )
}

export default Header;