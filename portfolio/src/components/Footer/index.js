import React, { Component } from "react";
import "./style.css";
import { Grid } from "@material-ui/core";

class Footer extends Component {
    render() {
        return(
            <Grid id="footer-page">
                <h3 className="highlight">Let's get in touch</h3>
                <div className="social-links">
                    {/*email*/}
                    <a href="mailto:jslzr27@gmail.com? subject=subject text" rel="noopener noreferrer" target="_blank">
                        <i class="fas fa-envelope"></i>
                    </a>
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