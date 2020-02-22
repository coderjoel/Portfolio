import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/main';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Header from './components/header'
import NavBar from './components/navbar'
import useStyles from './styles/stylesheet'

function App() {

  const classes = useStyles();
  
  return (
    <Router>
      <div className={classes.root}>
        <Header />
          <div className={classes.contentStyle}>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
          </Switch>
          </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
