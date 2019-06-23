import React, { Component } from "react";
import "./style.css";
import { Grid } from "@material-ui/core";

class Footer extends Component {
    render() {
        return(
            <Grid id="footer-page">
                <div className="social-links">
                    {/*linkedin*/}
                    <a href="https://www.linkedin.com/in/jesus-salazar-484837173/" rel="noopener noreferrer"  target="_blank">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                    {/*github*/}
                    <a href="https://github.com/jslzr27" rel="noopener noreferrer"  target="_blank">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>
                </div>
                <p>JESUS SALAZAR <span className="highlight">©2019</span></p>
            </Grid>
        )
    }
};

export default Footer;