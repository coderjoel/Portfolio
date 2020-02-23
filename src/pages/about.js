import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import ProfilePic from '../assets/profile.png'
import text from '../config/strings.json'

function About(){
  
  let newText = text.about_me.split('\n').map((item, i) => {
    return <p key={i}>{item}</p>;
  });

  return(
      <div>
        <Grid container  spacing={0}  direction="row"  alignItems="center"  justify="center"  style={{ minHeight: '70vh', paddingTop: '5%' }}>
          <Grid item xs={6} style={{ paddingRight: '5%'}}>
            <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h1">About me</Typography>
            <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h5"><br/>{newText}</Typography>
            <Typography style={{color: 'white', fontFamily: 'Playfair Display'}} variant="h5"><br/>{text.asterisk}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Parallax y={["-10%", "10%"]}>
              <img src={ProfilePic} style={{height: '20%', width: '100%'}}/>
            </Parallax>
          </Grid>
        </Grid>
      </div>
  )
}

export default About