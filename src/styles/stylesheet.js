import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flex: 1,
      backgroundColor : 'black',
      height: "100%",
    },
    contentStyle: {    
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: '100vh'
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
      // "&:hover": {
      //   backgroundColor: 'white',
      //   color: 'black',
      // },
      color: 'white',
      fontFamily: 'Playfair Display',
      textTransform: 'none',
      textDecoration: 'none'
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

export default useStyles