import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";
import FrontPage from '../Frontpage';
import AboutPage from '../AboutPage';
import WorkPage from '../WorkPage';
import ContactPage from '../ContactPage';
import { yellow } from '@material-ui/core/colors';

  function Navbar () {
    return (
    <Router>
      <div className="flex navbar">
        <AppBar className="flex" id="nav">
          <Toolbar>
            {/* <NavLink to={{
                pathname:"/home" }
              } 
              activeClassName="selected" 
              activeStyle={{color:"green"}}>
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink to={{
                pathname:"/about" }
              } 
              activeClassName="selected" 
              activeStyle={{color:"green"}}>
              <Button color="inherit">About</Button>
            </NavLink> 
            <NavLink to={{
                pathname:"/work" }
              } 
              activeClassName="selected" 
              activeStyle={{color:"green"}}>
              <Button color="inherit">Work</Button>
            </NavLink> 
            <NavLink to={{
                pathname:"/contact#contact" }
              } 
              activeClassName="selected" 
              activeStyle={{color:"green"}}>
              <Button color="inherit">Contact</Button>
            </NavLink> */}
            <Link to="/home#home"><Button color="inherit">Home</Button></Link>
            <Link to="/about#about"><Button color="inherit">About</Button></Link>
            <Link to="/work#work"><Button color="inherit">Work</Button></Link>
            <Link to="/contact#contact"><Button color="inherit">Contact</Button></Link>

          </Toolbar>
          {/* <Route exact path="/home" component={FrontPage} /> */}
          {/* <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/contact" component={ContactPage} /> */}
        </AppBar>
      </div>
    </Router>
    );
  }
  
  export default Navbar;