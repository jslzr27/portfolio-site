import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
    render() {
        return(
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
        )
    }
};

export default Footer;