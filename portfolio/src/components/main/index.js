import React from 'react';
import {Switch, Route} from "react-router-dom";
import FrontPage from "../Frontpage";
import AboutPage from '../AboutPage';
import WorkPage from '../WorkPage';
import ContactPage from '../ContactPage';
import NoMatch from '../Nomatch';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Wrapper from '../components/Wrapper';


const Main = () => (
    <div>
    <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NoMatch} />
    </Switch>
    </div>
)

export default Main;