import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

  function Navbar () {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Jesus Salazar
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Work</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default Navbar;