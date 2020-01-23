import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../Home/index';
import About from '../About/index';
import Footer from '../Footer/index';
import SerieSection from '../SerieSection/index';
import useStyles from './styles';

require('../../db/index.ts');

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/serie-section/:id" component={SerieSection}></Route>
          <Redirect to="/" />
        </Switch>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
