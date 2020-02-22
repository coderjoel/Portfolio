import React from 'react';
import Header from "./header";
import NavBar from "./navbar";
import useStyles from '../../styles/stylesheet'

const Layout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.contentStyle}>
                {props.children}
            </div>
            <NavBar />
        </div>
    )
}

export default Layout;