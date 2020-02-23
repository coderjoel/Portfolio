import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import MainPage from './pages/main';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import NoMatch from './pages/notfound';
import Header from './components/header'
import NavBar from './components/navbar'
import useStyles from './styles/stylesheet'

function App() {

  const classes = useStyles();
  
  return (
    <Router>
      <ParallaxProvider>
        <div className={classes.root}>
          <Header />
            <div className={classes.contentStyle}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route component={NoMatch} />
            </Switch>
            </div>
          <NavBar />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
