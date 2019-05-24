import React from 'react';
import './App.css';
import FrontPage from "./components/Frontpage";
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (  
      <div className="overflow-wrap">
        <Grid>
          <FrontPage />
          <Navbar />  
          <AboutPage />
          <WorkPage />
          <ContactPage />
          <Footer />
        </Grid>
    </div>
  );
}

export default App;
