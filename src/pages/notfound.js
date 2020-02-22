import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function NotFound(){
  return(
    <div>
      <Grid container  spacing={0}  direction="column"  alignItems="center"  justify="center"  style={{ minHeight: '70vh' }}>
        <Grid item xs={6}>
          <Typography style={{color: 'white', fontFamily: 'Courier Prime'}} variant="h2">404</Typography>
          <Typography style={{color: 'white', fontFamily: 'Courier Prime'}} variant="h5">Looks like someone found an unexplored space of the internet <span role="img" aria-label="emoji">😦</span></Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default NotFound