import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

  function Navbar () {
    return (
    <Router>
      <div className="flex navbar sticky">
        <AppBar className="flex" id="nav">
          <Toolbar>
            <Link to="/home#home"><Button color="inherit">Home</Button></Link>
            <Link to="/about#about"><Button color="inherit">About</Button></Link>
            <Link to="/work#work"><Button color="inherit">Work</Button></Link>
            <Link to="/contact#contact-page"><Button color="inherit">Contact</Button></Link>

          </Toolbar>
        </AppBar>
      </div>
    </Router>
    );
  }
  
  export default Navbar;