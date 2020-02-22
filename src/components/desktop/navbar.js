import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import text from '../../strings.json';

function NavBar() {
    return (
        <div>
            <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '10vh', paddingBottom: '10%' }}>
                <Typography style={{color: '#adadad', fontFamily: 'Open Sans', fontSize: 12}} >{text.navbarText}</Typography>
            </Grid>
        </div>
    )
}

export default NavBar;