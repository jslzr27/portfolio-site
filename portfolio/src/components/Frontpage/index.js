import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "./style.css";


class FrontPage extends Component {
    render() {
        return(
            <div className="modal-wrap flex">
                <Grid>
                <div id="home">
                    <div className="flexCard">
                        <Typography variant="h3" id="hello">
                            <span className="hello">Hello, my name is <span className="highlight">Jesus Salazar</span></span>. <br></br> 
                        </Typography>
                        <Typography variant="h3" id="dev">
                            <span className="dev">I am a full stack web developer.</span>
                        </Typography>
                        <Button id="check-work" href="#about">
                            Check My Work
                        </Button>
                    </div>
                </div>
                </Grid>
            </div>
        )
    }
    
}

export default FrontPage;