import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./style.css";


function FrontPage () {
    return(
        <div className="front">
            <Paper>
                <Typography variant="h1">
                Hello, my name is Jesus Salazar. <br></br> 
                I am a full stack web developer
                </Typography>
                <Button>
                    Check My Work
                </Button>
            </Paper>
        </div>
    )
}

export default FrontPage;