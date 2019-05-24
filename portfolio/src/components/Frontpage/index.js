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
                        <Typography variant="h3" id="text">
                            Hello, my name is <span className="highlight">Jesus Salazar</span>. <br></br> 
                            I am a full stack web developer
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